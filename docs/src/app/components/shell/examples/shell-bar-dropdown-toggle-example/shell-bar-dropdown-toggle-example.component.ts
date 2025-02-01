import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellBarDropdownToggleDirective, ShellBarStartDirective, ShellComponent } from '@garudalinux/core';
import { MenuItem } from 'primeng/api';
import { Button } from 'primeng/button';

@Component({
  selector: 'garuda-docs-shell-bar-dropdown-toggle-example',
  imports: [CommonModule, ShellComponent, Button, ShellBarStartDirective, ShellBarDropdownToggleDirective],
  templateUrl: './shell-bar-dropdown-toggle-example.component.html',
  styleUrl: './shell-bar-dropdown-toggle-example.component.scss',
})
export class ShellBarDropdownToggleExampleComponent {
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
