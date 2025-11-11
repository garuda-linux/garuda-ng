import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {
  ShellBarEndDirective,
  ShellBarLinkDirective,
  ShellComponent,
  ShellBarStartDirective,
  FooterModel,
  Footer,
  FeatureDetailComponent,
} from '@garudalinux/core';
import { MenuItem } from 'primeng/api';
import { NgOptimizedImage } from '@angular/common';
import { Button } from 'primeng/button';
import { SidebarToggleService } from '../util/sidebar-toggle/sidebar-toggle.service';
import { routeAnimations } from './app.routes';
import { Imprint } from './components/imprint/imprint';

@Component({
  imports: [
    RouterModule,
    ShellComponent,
    NgOptimizedImage,
    ShellBarStartDirective,
    ShellBarEndDirective,
    ShellBarLinkDirective,
    Button,
    Footer,
  ],
  providers: [SidebarToggleService],
  selector: 'garuda-docs-root',
  animations: [routeAnimations],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly sidebarToggleService = inject(SidebarToggleService);

  footerItems: FooterModel[] = [
    {
      itemId: 1,
      itemName: 'Garuda Linux © 2025',
      routerLink: '',
    },
    {
      itemId: 2,
      itemName: 'Gitlab',
      routerLink: 'https://gitlab.com/garuda-linux',
    },
    {
      itemId: 3,
      itemName: 'Privacy Policy',
      routerLink: '/privacy-policy',
    },
    {
      itemId: 4,
      itemName: 'Code of Conduct',
      routerLink: '/code-of-conduct',
    },
    {
      itemId: 5,
      itemName: 'Imprint',
      popupConfig: {
        popupEnabled: true,
        popupContainer: Imprint,
        popupContent: {
          data: {
            title: 'Imprint',
          },      
        },
      },
    },
  ];

  menuItems: MenuItem[] = [
    {
      icon: 'pi pi-play',
      label: 'Getting Started',
      routerLink: '/',
    },
    {
      icon: 'pi pi-sparkles',
      label: 'Components',
      routerLink: '/components',
    },
    {
      icon: 'pi pi-palette',
      label: 'Theming',
      routerLink: '/theming',
    },
    {
      icon: 'pi pi-home',
      label: 'Start V2',
      routerLink: '/startv2'
    }
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
