import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { MessageToastService } from '@garudalinux/core';

@Component({
  selector: 'garuda-docs-toast-severity-example',
  imports: [CommonModule, Button],
  providers: [MessageToastService],
  templateUrl: './toast-severity-example.component.html',
  styleUrl: './toast-severity-example.component.scss',
})
export class ToastSeverityExampleComponent {
  private readonly messageToastService = inject(MessageToastService);

  showInfo() {
    this.messageToastService.info('Info', 'This is an information');
  }

  showSuccess() {
    this.messageToastService.success('Success', 'Something was successful.');
  }

  showWarn() {
    this.messageToastService.warn('Warning', 'Watch out!');
  }

  showError() {
    this.messageToastService.error('Error', 'An error occurred!');
  }

  showContrast() {
    this.messageToastService.contrast('Contrast', 'An information with contrast.');
  }

  showSecondary() {
    this.messageToastService.secondary('Secondary', 'An information in secondary color.');
  }
}
