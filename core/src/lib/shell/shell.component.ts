import { Component, HostBinding, inject, input } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { GARUDA_NG_CONFIG } from '../config/garuda-ng';

@Component({
  selector: 'garuda-shell',
  imports: [Menubar],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  menuItems = input<MenuItem[]>([]);

  config = inject(GARUDA_NG_CONFIG);

  @HostBinding('style.font-family') font_family = this.config.font;
}
