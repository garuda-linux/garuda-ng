import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ShellBarEndDirective, ShellComponent } from '@garudalinux/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'garuda-docs-shell-bar-end-example',
  imports: [CommonModule, ShellComponent, NgOptimizedImage, ShellBarEndDirective],
  templateUrl: './shell-bar-end-example.component.html',
  styleUrl: './shell-bar-end-example.component.scss',
})
export class ShellBarEndExampleComponent {
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
