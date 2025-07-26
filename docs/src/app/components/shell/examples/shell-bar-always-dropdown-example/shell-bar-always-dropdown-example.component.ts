import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from '@garudalinux/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'garuda-docs-shell-bar-always-dropdown-example',
  imports: [CommonModule, ShellComponent],
  templateUrl: './shell-bar-always-dropdown-example.component.html',
  styleUrl: './shell-bar-always-dropdown-example.component.scss',
})
export class ShellBarAlwaysDropdownExampleComponent {
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
