import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellBarEndDirective, ShellBarLinkDirective, ShellComponent } from '@garudalinux/core';
import { MenuItem } from 'primeng/api';
import { NgOptimizedImage } from '@angular/common';
import { ShellBarStartDirective } from '@garudalinux/core';
import { Button } from 'primeng/button';
import { SidebarToggleService } from '../util/sidebar-toggle/sidebar-toggle.service';

@Component({
  imports: [RouterModule, ShellComponent, NgOptimizedImage, ShellBarStartDirective, ShellBarEndDirective, ShellBarLinkDirective, Button],
  providers: [SidebarToggleService],
  selector: 'garuda-docs-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly sidebarToggleService = inject(SidebarToggleService);

  menuItems: MenuItem[] = [
    {
      label: 'Getting Started',
    },
    {
      label: 'Components',
      routerLink: '/components',
    },
    {
      label: 'Theming',
    },
  ];
}
