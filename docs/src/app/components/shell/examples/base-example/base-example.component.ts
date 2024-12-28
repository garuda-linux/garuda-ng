import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from '@garudalinux/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'garuda-docs-shell-base-example',
  imports: [CommonModule, ShellComponent],
  templateUrl: './base-example.component.html',
  styleUrl: './base-example.component.scss',
})
export class BaseExampleComponent {
  items: MenuItem[] = [
    {
      label: 'Item 1',
    },
    {
      label: 'Item 2',
    },
    {
      label: 'Item 3',
    },
  ];
}
