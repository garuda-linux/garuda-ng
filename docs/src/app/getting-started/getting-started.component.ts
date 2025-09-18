import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Highlight } from 'ngx-highlightjs';
import { requestExampleSource } from '../../util/request-example';
import { CodeExampleComponent } from '../../util/code-example/code-example.component';

@Component({
  selector: 'garuda-docs-getting-started',
  imports: [CommonModule, NgOptimizedImage, Highlight, CodeExampleComponent],
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss',
})
export class GettingStartedComponent {
  provideGarudaNGSample = requestExampleSource('examples/getting-started/provide-garuda-ng.ts');
}
