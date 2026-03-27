import { Component, inject } from '@angular/core';

import { Button } from 'primeng/button';
import { MessageToastService } from '@garudalinux/core';

@Component({
  selector: 'garuda-docs-toast-base-example',
  imports: [Button],
  providers: [MessageToastService],
  templateUrl: './base-example.component.html',
  styleUrl: './base-example.component.scss',
})
export class BaseExampleComponent {
  private readonly messageToastService = inject(MessageToastService);

  showToast() {
    this.messageToastService.info('Hello', 'I am a message toast!');
  }
}
