import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseExampleComponent } from './examples/base-example/base-example.component';
import { requestExampleSource } from '../../../util/request-example';
import { Highlight } from 'ngx-highlightjs';
import { ShellBarStartExampleComponent } from './examples/shell-bar-start-example/shell-bar-start-example.component';
import { ShellBarEndExampleComponent } from './examples/shell-bar-end-example/shell-bar-end-example.component';
import { CodeExampleComponent } from '../../../util/code-example/code-example.component';
import { ShellBarDropdownToggleExampleComponent } from './examples/shell-bar-dropdown-toggle-example/shell-bar-dropdown-toggle-example.component';
import { ShellBarAlwaysDropdownExampleComponent } from './examples/shell-bar-always-dropdown-example/shell-bar-always-dropdown-example.component';

@Component({
  selector: 'garuda-docs-shell',
  imports: [
    CommonModule,
    BaseExampleComponent,
    Highlight,
    ShellBarStartExampleComponent,
    ShellBarEndExampleComponent,
    CodeExampleComponent,
    ShellBarDropdownToggleExampleComponent,
    ShellBarAlwaysDropdownExampleComponent,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  importLine = "import { ShellComponent } from '@garudalinux/core';";
  baseCodeHTML = requestExampleSource('examples/shell/base-example/base-example.component.html');
  baseCodeTS = requestExampleSource('examples/shell/base-example/base-example.component.ts');
  shellBarStartCodeHTML = requestExampleSource('examples/shell/shell-bar-start-example/shell-bar-start-example.component.html');
  shellBarStartCodeTS = requestExampleSource('examples/shell/shell-bar-start-example/shell-bar-start-example.component.ts');
  shellBarEndCodeHTML = requestExampleSource('examples/shell/shell-bar-end-example/shell-bar-end-example.component.html');
  shellBarEndCodeTS = requestExampleSource('examples/shell/shell-bar-end-example/shell-bar-end-example.component.ts');
  shellBarAlwaysDropdownCodeHTML = requestExampleSource(
    'examples/shell/shell-bar-always-dropdown-example/shell-bar-always-dropdown-example.component.html',
  );
  shellBarAlwaysDropdownCodeTS = requestExampleSource(
    'examples/shell/shell-bar-always-dropdown-example/shell-bar-always-dropdown-example.component.ts',
  );
  shellBarDropdownToggleCodeHTML = requestExampleSource(
    'examples/shell/shell-bar-dropdown-toggle-example/shell-bar-dropdown-toggle-example.component.html',
  );
  shellBarDropdownToggleCodeTS = requestExampleSource(
    'examples/shell/shell-bar-dropdown-toggle-example/shell-bar-dropdown-toggle-example.component.ts',
  );
}
