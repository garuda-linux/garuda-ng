import { Component } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

import { CodeExampleComponent } from '../../../util/code-example/code-example.component';
import { SurfacesExampleComponent } from './surfaces-example.component';

@Component({
  selector: 'garuda-docs-surfaces',
  imports: [Highlight, CodeExampleComponent, SurfacesExampleComponent],
  templateUrl: './surfaces.component.html',
  styleUrl: './surfaces.component.scss',
})
export class SurfacesComponentPage {
  importScss = `@import '@garudalinux/themes/styles/glass-surfaces.css';`;

  tuningScss = `:root {
  --garuda-surface-border-color: var(--p-panel-border-color);
  --garuda-surface-border-radius: 12px;
  --garuda-surface-blur: 2px;
}`;

  usageHtml = `<div class="garuda-surface">
  Any content behind this box gets blurred through the glass border.
</div>`;
}
