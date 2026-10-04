import { Directive } from '@angular/core';

@Directive({
  selector: '[garudaShellBarStart]',
  host: {
    class: 'garuda-shell__bar_start',
  },
})
export class ShellBarStartDirective {}
