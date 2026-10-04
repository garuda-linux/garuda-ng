import { Directive } from '@angular/core';

@Directive({
  selector: '[garudaCardTitle]',
  host: {
    'class': 'garuda-card__card-title',
    '[style.place-self]': '"center"',
  },
})
export class CardTitleDirective {}
