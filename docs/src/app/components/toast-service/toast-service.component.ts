import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from 'ngx-highlightjs';
import { BaseExampleComponent } from './examples/base-example/base-example.component';
import { requestExampleSource } from '../../../util/request-example';
import { CodeExampleComponent } from '../../../util/code-example/code-example.component';
import { Message } from 'primeng/message';
import { RouterLink } from '@angular/router';
import { ToastSeverityExampleComponent } from './examples/toast-severity-example/toast-severity-example.component';
import { ToastPositioningExampleComponent } from './examples/toast-positioning-example/toast-positioning-example.component';

@Component({
  selector: 'garuda-docs-toast-service',
  imports: [
    CommonModule,
    Highlight,
    BaseExampleComponent,
    CodeExampleComponent,
    Message,
    RouterLink,
    ToastSeverityExampleComponent,
    ToastPositioningExampleComponent,
  ],
  templateUrl: './toast-service.component.html',
  styleUrl: './toast-service.component.scss',
})
export class ToastServiceComponent {
  importLine = "import { MessageToastService } from '@garudalinux/core';";
  baseCodeHTML = requestExampleSource('examples/toast-service/base-example/base-example.component.html');
  baseCodeTS = requestExampleSource('examples/toast-service/base-example/base-example.component.ts');
  severityCodeHTML = requestExampleSource('examples/toast-service/toast-severity-example/toast-severity-example.component.html');
  severityCodeTS = requestExampleSource('examples/toast-service/toast-severity-example/toast-severity-example.component.ts');
  positioningCodeHTML = requestExampleSource('examples/toast-service/toast-positioning-example/toast-positioning-example.component.html');
  positioningCodeTS = requestExampleSource('examples/toast-service/toast-positioning-example/toast-positioning-example.component.ts');
}
