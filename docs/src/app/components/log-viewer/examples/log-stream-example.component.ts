import { Component, OnDestroy, signal } from '@angular/core';
import { Button } from '@openng/optimus-ui/button';

import { GarudaLogViewerComponent } from '@garudalinux/core/log-viewer';

const EMIT_INTERVAL_MS = 300;
const GREEN = '\u001b[32m';
const BLUE = '\u001b[34m';
const YELLOW = '\u001b[33m';
const RESET = '\u001b[0m';

const STARTUP_LINES = [
  `${BLUE}[garuda-docs]${RESET} example log stream started`,
  `${YELLOW}[warn]${RESET} this demo appends coloured lines every 300 ms`,
  `${GREEN}[ok]${RESET} press Stop to pause, Clear to reset the terminal`,
];

/** Live demo for the docs: streams coloured log lines into the viewer. */
@Component({
  selector: 'garuda-docs-log-stream-example',
  imports: [GarudaLogViewerComponent, Button],
  template: `
    <div class="controls">
      <p-button [label]="streaming() ? 'Stop' : 'Start'" severity="primary" (onClick)="toggle()" />
      <p-button label="Clear" severity="secondary" (onClick)="clear()" />
    </div>
    <garuda-log-viewer class="viewer" [chunk]="chunk()" [clearSignal]="clearSignal()" />
  `,
  styles: `
    :host {
      display: block;
    }

    .controls {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .viewer {
      height: 22rem;
    }
  `,
})
export class LogStreamExampleComponent implements OnDestroy {
  readonly chunk = signal<string[]>(STARTUP_LINES.map((line) => `${line}\r\n`));
  readonly clearSignal = signal(false);
  readonly streaming = signal(false);

  private timer: number | undefined;
  private line = 0;

  constructor() {
    this.streaming.set(true);
    this.timer = window.setInterval(() => this.emitLine(), EMIT_INTERVAL_MS);
  }

  toggle(): void {
    if (this.streaming()) {
      this.stop();
      return;
    }
    this.streaming.set(true);
    this.timer = window.setInterval(() => this.emitLine(), EMIT_INTERVAL_MS);
  }

  clear(): void {
    this.stop();
    this.clearSignal.set(true);
    window.setTimeout(() => {
      this.clearSignal.set(false);
      this.chunk.set(STARTUP_LINES.map((line) => `${line}\r\n`));
      this.toggle();
    });
  }

  ngOnDestroy(): void {
    this.stop();
  }

  private stop(): void {
    if (this.timer !== undefined) window.clearInterval(this.timer);
    this.timer = undefined;
    this.streaming.set(false);
  }

  private emitLine(): void {
    this.line += 1;
    const colour = this.line % 3 === 0 ? GREEN : this.line % 3 === 1 ? BLUE : YELLOW;
    const line = `${colour}[${String(this.line).padStart(4, '0')}]${RESET} example log line ${this.line} with ANSI colours`;
    this.chunk.update((chunks) => [...chunks, `${line}\r\n`]);
  }
}
