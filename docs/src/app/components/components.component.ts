import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Menu } from '@openng/optimus-ui/menu';
import { MenuItem } from '@openng/optimus-ui/api';
import { RouterOutlet } from '@angular/router';
import { SidebarToggleService } from '../../util/sidebar-toggle/sidebar-toggle.service';

@Component({
  selector: 'garuda-docs-components',
  imports: [Menu, RouterOutlet],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsComponent implements OnInit, OnDestroy {
  components: MenuItem[] = [
    {
      label: 'Panel',
      items: [
        {
          label: 'Card',
          routerLink: '/components/card',
        },
      ],
    },
    {
      label: 'Layout',
      items: [
        {
          label: 'Shell',
          routerLink: '/components/shell',
        },
        {
          label: 'Document Section',
          routerLink: '/components/document-section',
        },
        {
          label: 'Glass Surfaces',
          routerLink: '/components/surfaces',
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
    {
      label: 'Components',
      items: [
        {
          label: 'Charts',
          routerLink: '/components/charts',
        },
        {
          label: 'Logs',
          routerLink: '/components/logs',
        },
        {
          label: 'Utilities',
          routerLink: '/components/utilities',
        },
      ],
    },
  ];

  sidebarToggleService = inject(SidebarToggleService);

  ngOnInit() {
    this.sidebarToggleService.hidden.set(false);
  }

  ngOnDestroy() {
    this.sidebarToggleService.hidden.set(true);
  }
}
