import { Directive, HostBinding, HostListener, input } from '@angular/core';
import { ShellComponent } from '../shell.component';

@Directive({
  selector: '[garudaShellBarDropdownToggle]',
  host: {
    class: 'garuda-shell__dropdown-toggle',
  },
})
export class ShellBarDropdownToggleDirective {
  shellComponent = input.required<ShellComponent>({
    alias: 'garudaShellBarDropdownToggle',
  });

  @HostListener('click') onClick() {
    this.shellComponent().toggleDropdown();
  }

  @HostBinding('class.garuda-shell__dropdown-always-visible')
  alwaysVisible = this.shellComponent().alwaysShowDropDownMenu;
}
