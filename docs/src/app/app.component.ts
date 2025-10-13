import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {
  ShellBarEndDirective,
  ShellBarLinkDirective,
  ShellComponent,
  ShellBarStartDirective,
  FooterComponent,
  ThemeHandler,
} from '@garudalinux/core';
import { MenuItem } from 'primeng/api';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { Button } from 'primeng/button';
import { SidebarToggleService } from '../util/sidebar-toggle/sidebar-toggle.service';
import { routeAnimations } from './app.routes';
import { Ripple } from 'primeng/ripple';

@Component({
  imports: [
    RouterModule,
    ShellComponent,
    NgOptimizedImage,
    ShellBarStartDirective,
    ShellBarEndDirective,
    ShellBarLinkDirective,
    Button,
    FooterComponent,
    Ripple,
  ],
  providers: [SidebarToggleService, ThemeHandler],
  selector: 'garuda-docs-root',
  animations: [routeAnimations],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly sidebarToggleService = inject(SidebarToggleService);
  protected readonly themeHandler = inject(ThemeHandler);

  menuItems: MenuItem[] = [
    {
      label: 'Getting Started',
      routerLink: '/',
    },
    {
      label: 'Components',
      routerLink: '/components',
    },
    {
      label: 'Theming',
      routerLink: '/theming',
    },
  ];

  /**
   * Returns the animation state of the next page for page transitions
   * @param outlet Router outlet element
   * @returns The animation state of the target route
   */
  prepareRoute(outlet: RouterOutlet): string {
    return outlet.activatedRouteData['animationState'];
  }
}
