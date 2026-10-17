import { Directive } from '@angular/core';

@Directive({
  selector: '[garudaCardAction]',
  host: {
    'class': 'garuda-card__card-action',
    '[style.place-self]': '"center"',
  },
})
export class CardActionDirective {}
