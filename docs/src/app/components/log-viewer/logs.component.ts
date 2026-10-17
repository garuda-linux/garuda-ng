import { Component } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

import { CodeExampleComponent } from '../../../util/code-example/code-example.component';
import { LogStreamExampleComponent } from './examples/log-stream-example.component';

@Component({
  selector: 'garuda-docs-logs',
  imports: [Highlight, CodeExampleComponent, LogStreamExampleComponent],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.scss',
})
export class LogsComponent {
  importLine = "import { GarudaLogViewerComponent, ResilientSseStream } from '@garudalinux/core';";

  viewerTs = `import { Component, signal } from '@angular/core';
import { GarudaLogViewerComponent } from '@garudalinux/core/log-viewer';

@Component({
  selector: 'garuda-docs-log-viewer',
  imports: [GarudaLogViewerComponent],
  template: '<garuda-log-viewer [chunk]="chunk()" [scrollToLine]="3" (lineClick)="onLineClick($event)" />',
  styles: ':host { display: flex; height: 24rem; }',
})
export class LogViewerComponent {
  // Accumulated text chunks; new entries are appended to the terminal.
  readonly chunk = signal<string[]>(['first line\\n', 'second line\\n', 'third line\\n']);

  onLineClick(line: number): void {
    console.log('clicked line', line);
  }
}`;

  viewerHtml = `<garuda-log-viewer [chunk]="chunk()" [scrollToLine]="3" (lineClick)="onLineClick($event)" />`;

  interactiveTs = `import { Component, signal } from '@angular/core';
import { GarudaLogViewerComponent } from '@garudalinux/core/log-viewer';

@Component({
  selector: 'garuda-docs-interactive-terminal',
  imports: [GarudaLogViewerComponent],
  template:
    '<garuda-log-viewer [chunk]="chunk()" [stdin]="true" (userInput)="onUserInput($event)" (viewportResize)="onViewportResize($event)" />',
  styles: ':host { display: flex; height: 24rem; }',
})
export class InteractiveTerminalComponent {
  readonly chunk = signal<string[]>([]);

  // Forward keystrokes to a shell/PTY and write its replies into chunk().
  onUserInput(data: string): void {
    this.shell.write(data);
  }

  // Keep the remote grid in sync with the rendered size.
  onViewportResize(size: { cols: number; rows: number }): void {
    this.shell.resize(size.cols, size.rows);
  }
}`;

  methodsTs = `@ViewChild(GarudaLogViewerComponent) viewer!: GarudaLogViewerComponent;

// Buffer search, e.g. wired to a toolbar input.
this.viewer.findNext(query);
this.viewer.findPrevious(query);

// Serialises the rendered buffer, ANSI escapes included.
const text = this.viewer.getText();

// Serialises the rendered buffer and downloads it as plain text.
this.viewer.downloadLog('build.log');

this.viewer.focus();
this.viewer.clear();`;

  themeTs = `import { Component, signal } from '@angular/core';
import { GarudaLogViewerComponent } from '@garudalinux/core/log-viewer';

@Component({
  selector: 'garuda-docs-themed-log-viewer',
  imports: [GarudaLogViewerComponent],
  template: '<garuda-log-viewer [chunk]="chunk()" [theme]="theme()" [options]="options" />',
  styles: ':host { display: flex; height: 24rem; }',
})
export class ThemedLogViewerComponent {
  readonly chunk = signal<string[]>(['hello world\\n']);

  // Partial ITheme layered over the Catppuccin Mocha default; applied live.
  readonly theme = signal({ background: '#1e1e2e', foreground: '#cdd6f4' });

  // Extra xterm options, e.g. scrollback or font. Read once at creation.
  readonly options = { scrollback: 10000, fontSize: 14 };
}`;

  streamTs = `import { ResilientSseStream } from '@garudalinux/core';

// Retrying EventSource wrapper for live log streams: bounded backoff
// reconnects, and re-opens when a backgrounded tab becomes visible again.
private stream = new ResilientSseStream({
  url: () => \`https://example.com/logs/stream?offset=\${this.offset}\`,
  onMessage: (data) => this.chunk.update((chunks) => [...chunks, data]),
  onOpen: () => this.connected.set(true),
  onErrorExhausted: () => this.connected.set(false),
});

// Start streaming; call close() once a terminal frame arrived.
this.stream.open();`;

  customisationCss = `/* Tune the viewer per app through CSS custom properties
   (Catppuccin Mocha colours are used as fallbacks). */
:root {
  --garuda-log-border: var(--ctp-mocha-surface1);
  --garuda-log-text: var(--ctp-mocha-text);
  --garuda-log-accent: var(--ctp-mocha-mauve);
}`;
}
