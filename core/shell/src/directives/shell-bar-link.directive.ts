import { Directive } from '@angular/core';

@Directive({
  selector: 'a[garudaShellBarLink]',
  host: {
    class: 'p-menubar-item-link garuda-shell__bar-link',
  },
})
export class ShellBarLinkDirective {}
