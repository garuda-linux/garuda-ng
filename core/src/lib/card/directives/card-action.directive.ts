import { Directive } from '@angular/core';

@Directive({
  selector: '[garudaCardAction]',
  host: {
    class: 'garuda-card__card-action',
  },
})
export class CardActionDirective {}
