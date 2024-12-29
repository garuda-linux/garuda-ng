import { Route } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ShellComponent } from './components/shell/shell.component';
import { ToastServiceComponent } from './components/toast-service/toast-service.component';

export const appRoutes: Route[] = [
  {
    component: ComponentsComponent,
    path: 'components',
    children: [
      {
        component: ShellComponent,
        path: 'shell',
      },
      {
        component: ToastServiceComponent,
        path: 'toast-service',
      },
    ],
  },
];
