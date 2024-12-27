import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellBarEndDirective, ShellBarLinkDirective, ShellComponent } from '@garudalinux/core';
import { MenuItem } from 'primeng/api';
import { NgOptimizedImage } from '@angular/common';
import { ShellBarStartDirective } from '@garudalinux/core';

@Component({
  imports: [RouterModule, ShellComponent, NgOptimizedImage, ShellBarStartDirective, ShellBarEndDirective, ShellBarLinkDirective],
  selector: 'garuda-docs-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Getting Started',
    },
    {
      label: 'Components',
    },
    {
      label: 'Theming',
    },
  ];
}
