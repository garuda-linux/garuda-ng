import { Directive } from '@angular/core';

@Directive({
  selector: '[garudaCardThumbnail]',
  host: {
    'class': 'garuda-card__card-thumbnail',
    '[style.place-self]': '"center"',
  },
})
export class CardThumbnailDirective {}
