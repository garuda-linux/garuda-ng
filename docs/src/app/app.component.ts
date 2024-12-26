import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from '@garuda/core';
import { MenuItem } from 'primeng/api';

@Component({
  imports: [RouterModule, ShellComponent],
  selector: 'garuda-docs-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {
      label: 'test1',
    },
    {
      label: 'test2',
    }
  ];
}
