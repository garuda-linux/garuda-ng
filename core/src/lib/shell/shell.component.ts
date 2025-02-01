import {
  Component,
  contentChild,
  ElementRef,
  HostBinding,
  inject,
  input,
  OnDestroy,
  OnInit,
  Renderer2,
  signal,
  viewChild,
} from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { GARUDA_NG_CONFIG } from '../config';
import { Toast } from 'primeng/toast';
import { Button } from 'primeng/button';
import { ShellBarDropdownToggleDirective } from './directives/shell-bar-dropdown-toggle.directive';
import { Menu } from 'primeng/menu';

const MENU_TOGGLE_GLOBAL_STYLE_ID = 'garuda-ng__menu-toggle-style';

@Component({
  selector: 'garuda-shell',
  imports: [Menubar, Toast, Button, Menu],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  host: {
    class: 'garuda-shell',
  },
})
export class ShellComponent implements OnInit, OnDestroy {
  private renderer = inject(Renderer2);

  menuItems = input<MenuItem[]>([]);
  relativePosition = input<boolean>(false);
  alwaysShowDropdownMenu = input<boolean>(false);

  dropdownOpen = signal<boolean>(false);

  dropdownButton = contentChild(ShellBarDropdownToggleDirective);
  dropdownButtonRef = contentChild(ShellBarDropdownToggleDirective, { read: ElementRef });
  autoDropdownButtonRef = viewChild('autoDropdownButton', { read: ElementRef });
  menu = viewChild.required('menu', { read: ElementRef });

  config = inject(GARUDA_NG_CONFIG);

  @HostBinding('style.font-family') font_family = this.config.font;

  closeMenuUnregister?: () => void;

  ngOnInit() {
    // hide prime-ng menu button
    if (document.getElementById(MENU_TOGGLE_GLOBAL_STYLE_ID) === null) {
      const styleElement = document.createElement('style');
      styleElement.id = MENU_TOGGLE_GLOBAL_STYLE_ID;
      // Please forgive me for the selector
      styleElement.textContent = `
      .garuda-shell a.p-menubar-button[role=button][aria-label=Navigation] {
        display: none !important;
      }

      .garuda-shell__dropdown-always-visible {
        display: block !important;
      }

      .garuda-shell__dropdown-toggle {
        @media only screen and (width > 960px) {
          display: none;
        }
        @media only screen and (width <= 960px) {
          display: block;
        }
      }
      `;
      document.head.append(styleElement);
    }

    // close menu when clicked anywhere outside
    this.closeMenuUnregister = this.renderer.listen('window', 'click', (e: Event) => {
      if (
        !this.menu().nativeElement.contains(e.target) &&
        !this.dropdownButtonRef()?.nativeElement.contains(e.target) &&
        !this.autoDropdownButtonRef()?.nativeElement.contains(e.target)
      ) {
        this.closeMenu();
      }
    });
  }

  ngOnDestroy() {
    this.closeMenuUnregister?.();
    this.closeMenuUnregister = undefined;
  }

  toggleDropdown() {
    this.dropdownOpen.set(!this.dropdownOpen());
  }

  closeMenu() {
    this.dropdownOpen.set(false);
  }
}
