import { Directive } from '@angular/core';

@Directive({
  selector: '[garudaShellBarEnd]',
  host: {
    class: 'garuda-shell__bar-end',
  },
})
export class ShellBarEndDirective {}
