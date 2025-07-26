import { computed, Directive, HostBinding, HostListener, input } from '@angular/core';
import { ShellComponent } from '../shell.component';

@Directive({
  selector: '[garudaShellBarDropdownToggle]',
  host: {
    class: 'garuda-shell__dropdown-toggle',
  },
})
export class ShellBarDropdownToggleDirective {
  // workaround for current problems with input signals on directives
  shellComponent = input<ShellComponent>(undefined as unknown as ShellComponent, {
    alias: 'garudaShellBarDropdownToggle',
  });

  @HostListener('click') onClick() {
    this.shellComponent()?.toggleDropdown();
  }

  @HostBinding('class.garuda-shell__dropdown-always-visible')
  alwaysVisible = computed(() => this.shellComponent()?.alwaysShowDropdownMenu);
}
