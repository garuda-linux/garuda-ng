import { Route } from '@angular/router';
import { ShellComponent } from './components/shell/shell.component';
import { ToastServiceComponent } from './components/toast-service/toast-service.component';
import { CardComponent } from './components/card/card.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./getting-started/getting-started.component').then((m) => m.GettingStartedComponent),
  },
  {
    path: 'components',
    loadComponent: () => import('./components/components.component').then((m) => m.ComponentsComponent),
    children: [
      {
        component: CardComponent,
        path: 'card',
      },
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
  {
    path: 'theming',
    loadComponent: () => import('./theming/theming.component').then((m) => m.ThemingComponent),
  },
  {
    path: 'startv2',
    loadComponent: () => import('./startv2-website/startv2.component').then((m) => m.Startv2Component),
  },
];
