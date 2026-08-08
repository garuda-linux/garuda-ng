import {
  Component,
  contentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  OnDestroy,
  OnInit,
  Renderer2,
  signal,
  viewChild,
} from '@angular/core';
import { Menubar } from '@openng/optimus-ui/menubar';
import { MenuItem } from '@openng/optimus-ui/api';
import { GARUDA_NG_CONFIG } from '../config';
import { Toast } from '@openng/optimus-ui/toast';
import { Button } from '@openng/optimus-ui/button';
import { ShellBarDropdownToggleDirective } from './directives/shell-bar-dropdown-toggle.directive';
import { Menu } from '@openng/optimus-ui/menu';
import { ScrollTop } from '@openng/optimus-ui/scrolltop';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

const MENU_TOGGLE_GLOBAL_STYLE_ID = 'garuda-ng__menu-toggle-style';

@Component({
  selector: 'garuda-shell',
  imports: [Menubar, Toast, Button, Menu, ScrollTop],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  host: {
    'class': 'garuda-shell',
    '[style.--content-padding.px]': 'contentPadding()',
  },
})
export class ShellComponent implements OnInit, OnDestroy {
  private renderer = inject(Renderer2);
  private router = inject(Router);

  menuItems = input<MenuItem[]>([]);
  relativePosition = input<boolean>(false);
  alwaysShowDropdownMenu = input<boolean>(false);
  contentPadding = input<number>(60);

  dropdownOpen = signal<boolean>(false);
  ismobile = signal(window.innerWidth < 960);

  dropdownButton = contentChild(ShellBarDropdownToggleDirective);
  dropdownButtonRef = contentChild(ShellBarDropdownToggleDirective, {
    read: ElementRef,
  });
  autoDropdownButtonRef = viewChild('autoDropdownButton', { read: ElementRef });
  menu = viewChild.required('menu', { read: ElementRef });

  config = inject(GARUDA_NG_CONFIG);

  @HostBinding('style.font-family') font_family = this.config.font;

  closeMenuUnregister?: () => void;

  private navigationSubscription?: { unsubscribe: () => void };

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

      body {
        margin: 0;
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

    let firstNavigationComplete = false;

    this.navigationSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (firstNavigationComplete) {
          document.body.classList.add('is-transitioning');
        }
      } else if (event instanceof NavigationCancel || event instanceof NavigationError) {
        document.body.classList.remove('is-transitioning');
      } else if (event instanceof NavigationEnd) {
        firstNavigationComplete = true;
      }
    });
  }

  ngOnDestroy() {
    this.closeMenuUnregister?.();
    this.closeMenuUnregister = undefined;
    this.navigationSubscription?.unsubscribe();
    this.navigationSubscription = undefined;
    document.body.classList.remove('is-transitioning');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const mobile = event.target.innerWidth < 960;
    if (!mobile && this.ismobile()) {
      // switched from mobile → desktop
      this.dropdownOpen.set(false); // reset mobile menu
    }
    this.ismobile.set(mobile);
  }

  toggleDropdown() {
    this.dropdownOpen.set(!this.dropdownOpen());
  }

  closeMenu() {
    this.dropdownOpen.set(false);
  }
}
