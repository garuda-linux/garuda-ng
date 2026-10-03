/* eslint-disable @typescript-eslint/no-empty-function -- stub test doubles are no-ops by design */
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { GarudaLogViewerComponent } from './garuda-log-viewer.component';

const fakes = vi.hoisted(() => {
  class FakeTerminal {
    static instances: FakeTerminal[] = [];

    readonly options: Record<string, unknown> = {};
    readonly writes: { data: string; callback?: () => void }[] = [];
    readonly addons: unknown[] = [];
    readonly constructorOptions: Record<string, unknown>;

    dataHandler?: (data: string) => void;
    resizeHandler?: (event: { cols: number; rows: number }) => void;
    keyHandler?: (event: unknown) => boolean;
    disposed = false;
    focusCalls = 0;
    clearCalls = 0;
    resetCalls = 0;
    scrollToBottomCalls = 0;

    readonly buffer = {
      active: { baseY: 0, cursorY: 0, viewportY: 0, length: 1, getLine: () => ({ isWrapped: false }) },
    };

    cols = 80;
    rows = 24;

    constructor(options?: Record<string, unknown>) {
      this.constructorOptions = options ?? {};
      FakeTerminal.instances.push(this);
    }

    write(data: string, callback?: () => void): void {
      this.writes.push({ data, callback });
      callback?.();
    }

    loadAddon(addon: unknown): void {
      this.addons.push(addon);
    }

    open(): void {}

    clear(): void {
      this.clearCalls += 1;
    }

    reset(): void {
      this.resetCalls += 1;
    }

    focus(): void {
      this.focusCalls += 1;
    }

    scrollToBottom(): void {
      this.scrollToBottomCalls += 1;
    }

    scrollToLine(): void {}

    onData(handler: (data: string) => void): void {
      this.dataHandler = handler;
    }

    onResize(handler: (event: { cols: number; rows: number }) => void): void {
      this.resizeHandler = handler;
    }

    onScroll(): void {}

    attachCustomKeyEventHandler(handler: (event: unknown) => boolean): void {
      this.keyHandler = handler;
    }

    registerMarker(): undefined {
      return undefined;
    }

    registerDecoration(): undefined {
      return undefined;
    }

    dispose(): void {
      this.disposed = true;
    }
  }

  class FakeFitAddon {
    fitCalls = 0;
    fit(): void {
      this.fitCalls += 1;
    }
  }

  class FakeSearchAddon {
    readonly queries: string[] = [];
    findNext(query?: string): void {
      if (query) this.queries.push(`next:${query}`);
    }
    findPrevious(query?: string): void {
      if (query) this.queries.push(`prev:${query}`);
    }
  }

  class FakeSerializeAddon {
    serialize(): string {
      return 'serialized-buffer';
    }
  }

  class FakeWebLinksAddon {}

  class FakeWebglAddon {
    onContextLoss(): void {}
  }

  return { FakeTerminal, FakeFitAddon, FakeSearchAddon, FakeSerializeAddon, FakeWebLinksAddon, FakeWebglAddon };
});

vi.mock('@xterm/xterm', () => ({ Terminal: fakes.FakeTerminal }));
vi.mock('@xterm/addon-fit', () => ({ FitAddon: fakes.FakeFitAddon }));
vi.mock('@xterm/addon-search', () => ({ SearchAddon: fakes.FakeSearchAddon }));
vi.mock('@xterm/addon-serialize', () => ({ SerializeAddon: fakes.FakeSerializeAddon }));
vi.mock('@xterm/addon-web-links', () => ({ WebLinksAddon: fakes.FakeWebLinksAddon }));
vi.mock('@xterm/addon-webgl', () => ({ WebglAddon: fakes.FakeWebglAddon }));

const FLUSH_DELAY_MS = 30;

describe('GarudaLogViewerComponent', () => {
  const create = (): ReturnType<typeof TestBed.createComponent<GarudaLogViewerComponent>> => {
    const fixture = TestBed.createComponent(GarudaLogViewerComponent);
    fixture.detectChanges();
    return fixture;
  };

  const terminal = (): InstanceType<typeof fakes.FakeTerminal> => {
    const instance = fakes.FakeTerminal.instances.at(-1);
    if (!instance) throw new Error('No terminal was created');
    return instance;
  };

  const flushWrites = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, FLUSH_DELAY_MS));
  };

  const searchAddon = (term: InstanceType<typeof fakes.FakeTerminal>): InstanceType<typeof fakes.FakeSearchAddon> => {
    const addon = term.addons.find((candidate) => candidate instanceof fakes.FakeSearchAddon);
    if (!addon) throw new Error('Search addon missing');
    return addon as InstanceType<typeof fakes.FakeSearchAddon>;
  };

  beforeEach(() => {
    fakes.FakeTerminal.instances = [];
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));
    vi.stubGlobal(
      'ResizeObserver',
      class {
        observe(): void {}
        disconnect(): void {}
        unobserve(): void {}
      },
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('creates a read-only terminal by default', () => {
    create();
    const term = terminal();
    expect(term.constructorOptions['disableStdin']).toBe(true);
    expect(term.keyHandler?.({})).toBe(false);
  });

  it('appends chunk input to the terminal, normalised', async () => {
    const fixture = create();
    fixture.componentRef.setInput('chunk', ['line one\r\n', 'line two  \n']);
    fixture.detectChanges();
    await flushWrites();

    const term = terminal();
    expect(term.writes.map((write) => write.data)).toContain('line one\nline two\n');
    expect(term.scrollToBottomCalls).toBeGreaterThan(0);
  });

  it('resumes writes from the start after clearSignal', async () => {
    const fixture = create();
    fixture.componentRef.setInput('chunk', ['first\n']);
    fixture.detectChanges();
    await flushWrites();
    const term = terminal();
    const writesBefore = term.writes.length;

    fixture.componentRef.setInput('clearSignal', true);
    fixture.detectChanges();
    expect(term.clearCalls).toBe(1);
    expect(term.resetCalls).toBe(1);

    fixture.componentRef.setInput('chunk', ['first\n', 'second\n']);
    fixture.detectChanges();
    await flushWrites();

    expect(term.writes.length).toBeGreaterThan(writesBefore);
    expect(term.writes.at(-1)?.data).toContain('second');
  });

  it('emits keyboard input when stdin is enabled', () => {
    const fixture = TestBed.createComponent(GarudaLogViewerComponent);
    fixture.componentRef.setInput('stdin', true);
    fixture.detectChanges();

    const term = terminal();
    expect(term.constructorOptions['disableStdin']).toBe(false);
    expect(term.keyHandler?.({})).toBe(true);

    const received: string[] = [];
    fixture.componentInstance.userInput.subscribe((input) => received.push(input));
    term.dataHandler?.('ls\n');
    expect(received).toEqual(['ls\n']);
  });

  it('emits the grid size on resize', () => {
    const fixture = create();
    fixture.detectChanges();

    const received: { cols: number; rows: number }[] = [];
    fixture.componentInstance.viewportResize.subscribe((size) => received.push(size));
    terminal().resizeHandler?.({ cols: 120, rows: 40 });
    expect(received).toEqual([{ cols: 120, rows: 40 }]);
  });

  it('applies theme updates live over the default palette', () => {
    const fixture = create();
    fixture.componentRef.setInput('theme', { background: '#101010' });
    fixture.detectChanges();

    const theme = terminal().options['theme'] as { background: string; foreground: string };
    expect(theme.background).toBe('#101010');
    expect(theme.foreground).toBeDefined();
  });

  it('applies extra options at terminal creation', () => {
    const fixture = TestBed.createComponent(GarudaLogViewerComponent);
    fixture.componentRef.setInput('options', { scrollback: 10000, fontSize: 14 });
    fixture.detectChanges();

    const options = terminal().constructorOptions;
    expect(options['scrollback']).toBe(10000);
    expect(options['fontSize']).toBe(14);
    expect(options['convertEol']).toBe(true);
  });

  it('delegates search, text accessors and focus', () => {
    const fixture = create();
    const component = fixture.componentInstance;
    const term = terminal();

    component.findNext('error');
    component.findPrevious('warn');
    component.findNext('');
    expect(searchAddon(term).queries).toEqual(['next:error', 'prev:warn']);

    expect(component.getText()).toBe('serialized-buffer');
    expect(term.focusCalls).toBe(0);
    component.focus();
    expect(term.focusCalls).toBe(1);
    expect(term.clearCalls).toBe(0);
    component.clear();
    expect(term.clearCalls).toBe(1);
    expect(term.resetCalls).toBe(1);
  });

  it('downloads the serialised buffer', () => {
    const fixture = create();
    const createObjectURL = vi.fn(() => 'blob:log');
    const revokeObjectURL = vi.fn();
    vi.stubGlobal('URL', { ...globalThis.URL, createObjectURL, revokeObjectURL });
    const click = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});

    fixture.componentInstance.downloadLog('build.log');

    expect(createObjectURL).toHaveBeenCalledOnce();
    expect(revokeObjectURL).toHaveBeenCalledWith('blob:log');
    expect(click).toHaveBeenCalledOnce();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('emits lineClick from the gutter', () => {
    const fixture = create();
    const received: number[] = [];
    fixture.componentInstance.lineClick.subscribe((line) => received.push(line));

    const gutter = fixture.nativeElement.querySelector('.terminal-gutter');
    const button = document.createElement('button');
    button.className = 'line-num';
    button.dataset['line'] = '3';
    gutter.appendChild(button);
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(received).toEqual([3]);
  });

  it('disposes the terminal on destroy', () => {
    const fixture = create();
    const term = terminal();
    fixture.destroy();
    expect(term.disposed).toBe(true);
  });
});
