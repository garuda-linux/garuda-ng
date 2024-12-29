import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SidebarToggleService } from '../../util/sidebar-toggle/sidebar-toggle.service';

@Component({
  selector: 'garuda-docs-components',
  imports: [CommonModule, Menu, RouterOutlet],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
})
export class ComponentsComponent implements OnInit, OnDestroy {
  components: MenuItem[] = [
    {
      label: 'Layout',
      items: [
        {
          label: 'Shell',
          routerLink: '/components/shell',
        },
      ],
    },
    {
      label: 'Services',
      items: [
        {
          label: 'Message Toast',
          routerLink: '/components/toast-service',
        },
      ],
    },
  ];

  sidebarToggleService = inject(SidebarToggleService);
  router = inject(Router);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/components') {
          this.sidebarToggleService.toggled.set(true);
        } else {
          this.sidebarToggleService.toggled.set(false);
        }
      }
    });
  }

  ngOnInit() {
    this.sidebarToggleService.hidden.set(false);
  }

  ngOnDestroy() {
    this.sidebarToggleService.hidden.set(true);
  }
}
