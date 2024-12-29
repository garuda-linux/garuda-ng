import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'garuda-docs-components',
  imports: [CommonModule, Menu, RouterOutlet],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
})
export class ComponentsComponent {
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
}
