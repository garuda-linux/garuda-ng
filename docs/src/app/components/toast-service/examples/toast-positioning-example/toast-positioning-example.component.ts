import { Component, inject } from '@angular/core';
import { Button } from '@openng/optimus-ui/button';
import { MessageToastPosition, MessageToastService } from '@garudalinux/core';

@Component({
  selector: 'garuda-docs-toast-positioning-example',
  imports: [Button],
  templateUrl: './toast-positioning-example.component.html',
  styleUrl: './toast-positioning-example.component.scss',
})
export class ToastPositioningExampleComponent {
  private readonly messageToastService = inject(MessageToastService);

  show(position: MessageToastPosition) {
    this.messageToastService.info('Hello', `I am a toast with position ${position}.`, position);
  }
}
