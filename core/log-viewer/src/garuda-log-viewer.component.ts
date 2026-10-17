import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, effect, input, output, viewChild } from '@angular/core';
import { FitAddon } from '@xterm/addon-fit';
import { SearchAddon } from '@xterm/addon-search';
import { SerializeAddon } from '@xterm/addon-serialize';
import { WebLinksAddon } from '@xterm/addon-web-links';
import { Terminal, type ITheme, type ITerminalOptions } from '@xterm/xterm';

const DEFAULT_FONT_SIZE = 12;
const SCROLLBACK_LINES = 9999999;
const PIXELS_PER_SCROLL_LINE = 16;
const SCROLLBAR_COLOR = '#f5e0dc'; /* mocha.rosewater */
const LINE_NUMBER_TOP_OFFSET_PX = 1;
const GUTTER_MIN_FONT_SIZE_PX = 10;

const XTERM_THEME = {
  background: 'rgba(0, 0, 0, 0)',
  black: '#45475a' /* mocha.surface1 */,
  blue: '#89b4fa' /* mocha.blue */,
  brightBlack: '#6c7086' /* mocha.overlay0 */,
  brightBlue: '#89b4fa' /* mocha.blue */,
  brightCyan: '#94e2d5' /* mocha.teal */,
  brightGreen: '#a6e3a1' /* mocha.green */,
  brightMagenta: '#f5c2e7' /* mocha.pink */,
  brightRed: '#f38ba8' /* mocha.red */,
  brightWhite: '#9399b2' /* mocha.overlay2 */,
  brightYellow: '#f9e2af' /* mocha.yellow */,
  cursor: '#f5e0dc' /* mocha.rosewater */,
  cursorAccent: '#f5e0dc' /* mocha.rosewater */,
  cyan: '#94e2d5' /* mocha.teal */,
  foreground: '#cdd6f4' /* mocha.text */,
  green: '#a6e3a1' /* mocha.green */,
  magenta: '#f5c2e7' /* mocha.pink */,
  red: '#f38ba8' /* mocha.red */,
  white: '#7f849c' /* mocha.overlay1 */,
  yellow: '#f9e2af' /* mocha.yellow */,
};

/** Renders log output in an xterm.js terminal with ANSI colour support, a
 * clickable line-number gutter, search and serialisation; set `stdin` to use it
 * as an interactive terminal front-end.
 * Feed it accumulated text chunks through the `chunk` input; the component
 * batches writes so streaming stays smooth. All xterm styling, including
 * `@xterm/xterm/css/xterm.css`, ships with the component. */
@Component({
  selector: 'garuda-log-viewer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="xterm-container">
      <div class="terminal-gutter" #gutter></div>
      <div class="terminal-host" #terminalDiv></div>
    </div>
  `,
  styleUrl: './garuda-log-viewer.component.css',
})
export class GarudaLogViewerComponent implements OnInit, OnDestroy {
  /** Accumulated log text chunks; new entries are appended to the terminal. */
  readonly chunk = input<string[]>([]);
  /** Toggle to true to clear the terminal; reset it to false before reusing. */
  readonly clearSignal = input<boolean>(false);
  /** One-based logical line to scroll to and highlight once output arrives. */
  readonly scrollToLine = input<number | undefined>(undefined);
  /** Enables keyboard input; keystrokes are emitted through `data`. Read-only when off. */
  readonly stdin = input<boolean>(false);
  /** Extra colours layered over the default Catppuccin Mocha palette; applied live. */
  readonly theme = input<Partial<ITheme>>();
  /**
   * Extra xterm options layered over the component defaults, e.g. scrollback or
   * font. Read once when the terminal is created; later changes are ignored.
   */
  readonly options = input<ITerminalOptions>();

  /** Emits the logical line number of a clicked gutter entry. */
  readonly lineClick = output<number>();
  /** Emits keyboard input while `stdin` is enabled. */
  readonly userInput = output<string>();
  /** Emits the new grid size after the terminal re-fit. */
  readonly viewportResize = output<{ cols: number; rows: number }>();

  private readonly terminalDiv = viewChild<ElementRef<HTMLDivElement>>('terminalDiv');
  private readonly gutter = viewChild<ElementRef<HTMLDivElement>>('gutter');

  private terminal?: Terminal;
  private fitAddon?: FitAddon;
  private serializeAddon?: SerializeAddon;
  private searchAddon?: SearchAddon;
  private resizeObserver?: ResizeObserver;

  constructor() {
    effect(() => {
      if (this.clearSignal()) {
        this.receivedLength = 0;
        this.consumedLength = 0;
        this.flushScheduled = false;
        this.lineScrolled = false;
        this.logicalLineStarts = [];
        this.lastMappedLength = -1;
        this.lastMappedCols = -1;
        this.clearFlushTimer();
        this.terminal?.clear();
        this.terminal?.reset();
      }
    });

    effect(() => {
      this.receivedLength = this.chunk().length;
      this.scheduleFlush();
    });

    effect(() => {
      const theme = this.theme();
      if (!this.terminal || !theme) return;
      this.terminal.options.theme = { ...XTERM_THEME, ...theme };
    });
  }

  private receivedLength = 0;
  private consumedLength = 0;
  private flushScheduled = false;
  private flushTimer: number | undefined;
  private lineScrolled = false;

  /** Buffer row where each logical (un-wrapped) line starts; re-mapped on re-wrap. */
  private logicalLineStarts: number[] = [];
  private lastMappedLength = -1;
  private lastMappedCols = -1;

  private gutterRows = 0;
  private gutterCellHeightPx = 0;
  private gutterTopOffsetPx = 0;
  private gutterFontSizePx = '';
  private lastGutterViewportStart = -1;
  private gutterButtons: HTMLButtonElement[] = [];
  private gutterUpdateRaf = 0;

  private static readonly MAX_FLUSH_BYTES = 64 * 1024;
  private static readonly FLUSH_DELAY_MS = 16;

  private scheduleFlush(): void {
    if (this.flushScheduled) return;
    this.flushScheduled = true;
    this.flushTimer = window.setTimeout(() => {
      this.flushScheduled = false;
      this.flushTimer = undefined;
      this.flush();
    }, GarudaLogViewerComponent.FLUSH_DELAY_MS);
  }

  private clearFlushTimer(): void {
    if (this.flushTimer !== undefined) window.clearTimeout(this.flushTimer);
    this.flushTimer = undefined;
  }

  private flush(): void {
    if (!this.terminal || this.receivedLength <= this.consumedLength) return;
    const chunks = this.chunk();

    let bytes = 0;
    let end = this.consumedLength;
    while (end < chunks.length) {
      bytes += chunks[end].length;
      end++;
      if (bytes >= GarudaLogViewerComponent.MAX_FLUSH_BYTES) break;
    }
    const delta = chunks.slice(this.consumedLength, end).join('');
    this.consumedLength = end;
    const normalized = this.normalizeChunk(delta);
    if (normalized) {
      this.terminal.write(normalized, () => this.afterWrite());
    }

    if (this.consumedLength < this.receivedLength) this.scheduleFlush();
  }

  private afterWrite(): void {
    if (!this.terminal || this.lineScrolled) return;
    const line = this.scrollToLine();
    this.ensureLogicalLineMapping();
    const bufferRow = line === undefined ? undefined : this.logicalLineStarts[line - 1];
    if (bufferRow === undefined) {
      this.terminal.scrollToBottom();
      return;
    }
    this.highlightLine(bufferRow);
    this.terminal.scrollToLine(bufferRow);
    this.lineScrolled = true;
    this.updateLineNumbers();
  }

  private highlightLine(bufferIndex: number): void {
    if (!this.terminal) return;
    const cursor = this.terminal.buffer.active.baseY + this.terminal.buffer.active.cursorY;
    try {
      const marker = this.terminal.registerMarker(bufferIndex - cursor);
      if (!marker) return;
      this.terminal.registerDecoration({
        marker,
        layer: 'bottom',
        backgroundColor: '#313244' /* mocha.surface0 */,
        width: this.terminal.cols,
      });
    } catch {
      // Marker/decoration APIs can fail for out-of-range lines; ignore.
    }
  }

  private readonly onGutterClick = (event: Event): void => {
    const target = event.target instanceof HTMLElement ? (event.target.closest('.line-num') as HTMLElement | null) : null;
    const raw = target?.dataset['line'];
    if (!raw) return;
    this.lineClick.emit(Number(raw));
  };

  /** Reads gutter layout once; cached to avoid forced reflows per scroll. */
  private measureGutter(): void {
    const terminal = this.terminal;
    const gutterEl = this.gutter()?.nativeElement;
    const host = this.terminalDiv()?.nativeElement;
    if (!terminal || !gutterEl || !host) return;
    const screen = host.querySelector('.xterm-screen') as HTMLElement | null;
    if (!screen || !screen.clientHeight) return;
    this.gutterRows = terminal.rows;
    this.gutterCellHeightPx = screen.clientHeight / terminal.rows;
    this.gutterTopOffsetPx = screen.getBoundingClientRect().top - gutterEl.getBoundingClientRect().top;
    const cellFontSize = Math.max(
      GUTTER_MIN_FONT_SIZE_PX,
      Math.min(terminal.options.fontSize ?? DEFAULT_FONT_SIZE, this.gutterCellHeightPx),
    );
    this.gutterFontSizePx = `${cellFontSize}px`;
  }

  private updateLineNumbers(): void {
    const terminal = this.terminal;
    const gutterEl = this.gutter()?.nativeElement;
    if (!terminal || !gutterEl || this.gutterRows === 0) return;
    this.ensureLogicalLineMapping();
    const start = terminal.buffer.active.viewportY;

    if (start === this.lastGutterViewportStart && this.gutterButtons.length > 0) return;
    this.lastGutterViewportStart = start;

    if (this.gutterButtons.length !== this.gutterRows) {
      gutterEl.textContent = '';
      this.gutterButtons = [];
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < this.gutterRows; i++) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'line-num';
        button.style.fontSize = this.gutterFontSizePx;
        button.style.height = `${this.gutterCellHeightPx}px`;
        button.style.lineHeight = `${this.gutterCellHeightPx}px`;
        this.gutterButtons.push(button);
        fragment.appendChild(button);
      }
      gutterEl.appendChild(fragment);
    }

    gutterEl.style.paddingTop = `${Math.max(0, this.gutterTopOffsetPx) + LINE_NUMBER_TOP_OFFSET_PX}px`;
    for (let r = 0; r < this.gutterRows; r++) {
      const bufferRow = start + r;
      const line = terminal.buffer.active.getLine(bufferRow);
      const logicalLine = this.logicalNumberForRow(bufferRow, line?.isWrapped);
      const button = this.gutterButtons[r];
      button.textContent = logicalLine === undefined ? '' : String(logicalLine);
      if (logicalLine !== undefined) {
        button.dataset['line'] = String(logicalLine);
        button.setAttribute('aria-label', `Line ${logicalLine}`);
      } else {
        delete button.dataset['line'];
        button.removeAttribute('aria-label');
      }
    }
  }

  private ensureLogicalLineMapping(): void {
    const buffer = this.terminal?.buffer.active;
    if (!buffer) return;
    const cols = this.terminal?.cols ?? 0;
    if (buffer.length === this.lastMappedLength && cols === this.lastMappedCols) return;
    this.lastMappedLength = buffer.length;
    this.lastMappedCols = cols;
    const starts: number[] = [];
    for (let i = 0; i < buffer.length; i++) {
      const line = buffer.getLine(i);
      if (!line || !line.isWrapped) starts.push(i);
    }
    this.logicalLineStarts = starts;
  }

  private logicalNumberForRow(bufferRow: number, wrapped: boolean | undefined): number | undefined {
    if (wrapped) return undefined;
    const starts = this.logicalLineStarts;
    let low = 0;
    let high = starts.length;
    while (low < high) {
      const mid = (low + high) >> 1;
      if (starts[mid] <= bufferRow) low = mid + 1;
      else high = mid;
    }
    return low > 0 ? low : undefined;
  }

  private scheduleGutterUpdate(): void {
    if (this.gutterUpdateRaf) return;
    this.gutterUpdateRaf = requestAnimationFrame(() => {
      this.gutterUpdateRaf = 0;
      this.updateLineNumbers();
    });
  }

  ngOnInit(): void {
    // Hidden tabs never fire requestAnimationFrame; init anyway and let the
    // ResizeObserver re-fit once the tab becomes visible and gets layout.
    this.initTerminal();
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.terminal?.dispose();
    this.terminal = undefined;
  }

  /** The WebGL renderer is large, so it is fetched on demand once the terminal is open. */
  private async loadWebglRenderer(): Promise<void> {
    try {
      const { WebglAddon } = await import('@xterm/addon-webgl');
      if (!this.terminal) return;
      const webglAddon = new WebglAddon();
      webglAddon.onContextLoss(() => webglAddon.dispose());
      this.terminal.loadAddon(webglAddon);
    } catch {
      // Fallback to standard renderer if WebGL is unavailable
    }
  }

  private normalizeChunk(text: string): string {
    return text.replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '');
  }

  /** Clears viewport and scrollback; buffered `chunk` input data is unaffected. */
  clear(): void {
    this.terminal?.clear();
    this.terminal?.reset();
  }

  /** Focuses the terminal so keyboard input reaches it (needs `stdin`). */
  focus(): void {
    this.terminal?.focus();
  }

  /** Serialises the rendered buffer including ANSI escape sequences. */
  getText(): string {
    return this.serializeAddon?.serialize() ?? '';
  }

  /** Serialises the rendered buffer and triggers a plain-text download. */
  downloadLog(filename: string): void {
    const text = this.getText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  findNext(query: string): void {
    if (!query) return;
    this.searchAddon?.findNext(query);
  }

  findPrevious(query: string): void {
    if (!query) return;
    this.searchAddon?.findPrevious(query);
  }

  private isCoarsePointer(): boolean {
    return typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  }

  private initTerminal(): void {
    const container = this.terminalDiv()?.nativeElement;
    if (!container) return;

    this.terminal = new Terminal({
      allowProposedApi: true,
      disableStdin: !this.stdin(),
      scrollback: SCROLLBACK_LINES,
      convertEol: true,
      fontFamily: "'JetBrains Mono Variable', 'JetBrains Mono', ui-monospace, monospace",
      fontSize: DEFAULT_FONT_SIZE,
      lineHeight: 1.2,
      theme: XTERM_THEME,
      ...this.options(),
    });

    this.fitAddon = new FitAddon();
    this.terminal.loadAddon(this.fitAddon);

    this.serializeAddon = new SerializeAddon();
    this.terminal.loadAddon(this.serializeAddon);

    this.searchAddon = new SearchAddon();
    this.terminal.loadAddon(this.searchAddon);

    this.terminal.loadAddon(
      new WebLinksAddon((event, uri) => {
        void event;
        const link = document.createElement('a');
        link.href = uri;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
      }),
    );

    this.terminal.open(container);

    // WebGL rendering is heavy on mobile GPU/battery; keep the default renderer there.
    if (!this.isCoarsePointer()) void this.loadWebglRenderer();

    this.terminal.onScroll(() => this.scheduleGutterUpdate());
    this.terminal.onResize((event) => {
      this.lastGutterViewportStart = -1;
      this.updateLineNumbers();
      this.viewportResize.emit({ cols: event.cols, rows: event.rows });
    });
    this.terminal.onData((input) => this.userInput.emit(input));
    this.gutter()?.nativeElement.addEventListener('click', this.onGutterClick);

    // Returning false swallows the key: read-only viewers ignore all input.
    this.terminal.attachCustomKeyEventHandler(() => this.stdin());

    let lastTouchY = 0;
    container.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        if (e.touches.length === 1) {
          lastTouchY = e.touches[0].clientY;
        }
      },
      { passive: true },
    );

    let accumulatedDeltaY = 0;
    container.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        if (e.touches.length === 1 && this.terminal) {
          e.preventDefault();
          const currentY = e.touches[0].clientY;
          const deltaY = lastTouchY - currentY;
          lastTouchY = currentY;

          accumulatedDeltaY += deltaY;
          const lineDelta = Math.trunc(accumulatedDeltaY / PIXELS_PER_SCROLL_LINE);
          if (lineDelta !== 0) {
            this.terminal.scrollLines(lineDelta);
            accumulatedDeltaY %= PIXELS_PER_SCROLL_LINE;
          }
        }
      },
      { passive: false },
    );

    const viewport = container.querySelector('.xterm-viewport') as HTMLElement | null;
    if (viewport) {
      viewport.setAttribute(
        'style',
        `scrollbar-color: ${SCROLLBAR_COLOR} transparent; overflow-y: auto !important; -webkit-overflow-scrolling: touch !important;`,
      );
    }

    this.fitAddon.fit();
    this.measureGutter();
    this.updateLineNumbers();

    this.resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        this.fitAddon?.fit();
        this.measureGutter();
        this.updateLineNumbers();
      });
    });
    this.resizeObserver.observe(container);

    this.flush();
  }
}
