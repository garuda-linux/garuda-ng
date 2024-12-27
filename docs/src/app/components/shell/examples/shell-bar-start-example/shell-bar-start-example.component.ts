import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ShellBarStartDirective, ShellComponent } from '@garudalinux/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'garuda-docs-shell-bar-start-example',
  imports: [CommonModule, ShellComponent, NgOptimizedImage, ShellBarStartDirective],
  templateUrl: './shell-bar-start-example.component.html',
  styleUrl: './shell-bar-start-example.component.scss',
})
export class ShellBarStartExampleComponent {
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
