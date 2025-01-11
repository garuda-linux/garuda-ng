import { Component } from '@angular/core';

@Component({
  // attribute selector according to https://angular.dev/guide/components/selectors#when-to-use-an-attribute-selector
  /* eslint @angular-eslint/component-selector: "off" */
  selector: 'li[garuda-card-feature-list-con]',
  template: '<ng-content></ng-content>',
  styles: `
    :host::before {
      content: '✗';
      font-size: 2em;
      margin-right: 0.25em;
    }
  `,
  host: {
    class: 'garuda-card__card-feature-list-pro',
  },
})
export class CardFeatureListConComponent {}
