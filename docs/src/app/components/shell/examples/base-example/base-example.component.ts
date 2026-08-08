import { Component } from '@angular/core';

import { ShellComponent } from '@garudalinux/core';
import { MenuItem } from '@openng/optimus-ui/api';

@Component({
  selector: 'garuda-docs-shell-base-example',
  imports: [ShellComponent],
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
