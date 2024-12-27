import { Route } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ShellComponent } from './components/shell/shell.component';

export const appRoutes: Route[] = [
  {
    component: ComponentsComponent,
    path: 'components',
    children: [
      {
        component: ShellComponent,
        path: 'shell',
      },
    ],
  },
];
