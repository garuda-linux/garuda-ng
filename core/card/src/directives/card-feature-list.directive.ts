import { Directive } from '@angular/core';

@Directive({
  selector: 'ul[garudaCardFeatureList]',
  host: {
    class: 'garuda-card__card-feature-list',
    style: `
      list-style-type: none;
      padding-left: 1em;
    `,
  },
})
export class CardFeatureListDirective {}
