import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  Footer,
  FooterModel,
  ShellBarEndDirective,
  ShellBarLinkDirective,
  ShellBarStartDirective,
  ShellComponent,
} from '@garudalinux/core';
import { MenuItem } from '@openng/optimus-ui/api';
import { NgOptimizedImage } from '@angular/common';
import { Button } from '@openng/optimus-ui/button';
import { SidebarToggleService } from '../util/sidebar-toggle/sidebar-toggle.service';
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
      routerLink: 'https://garudalinux.org/privacy-policy',
    },
    {
      itemId: 4,
      itemName: 'Code of Conduct',
      routerLink: 'https://garudalinux.org/code-of-conduct',
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
      routerLink: '/components/card',
    },
    {
      icon: 'pi pi-palette',
      label: 'Theming',
      routerLink: '/theming',
    },
    {
      icon: 'pi pi-home',
      label: 'Start V2',
      routerLink: '/startv2',
    },
  ];
}
