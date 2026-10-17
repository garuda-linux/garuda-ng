import { Route } from '@angular/router';

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
        loadComponent: () => import('./components/card/card.component').then((m) => m.CardComponent),
        path: 'card',
      },
      {
        loadComponent: () => import('./components/shell/shell.component').then((m) => m.ShellComponent),
        path: 'shell',
      },
      {
        loadComponent: () => import('./components/toast-service/toast-service.component').then((m) => m.ToastServiceComponent),
        path: 'toast-service',
      },
      {
        loadComponent: () => import('./components/document-section/document-section.component').then((m) => m.DocumentSectionComponentPage),
        path: 'document-section',
      },
      {
        loadComponent: () => import('./components/surfaces/surfaces.component').then((m) => m.SurfacesComponentPage),
        path: 'surfaces',
      },
      {
        loadComponent: () => import('./components/charts/charts.component').then((m) => m.ChartsComponent),
        path: 'charts',
      },
      {
        loadComponent: () => import('./components/utilities/utilities.component').then((m) => m.UtilitiesComponent),
        path: 'utilities',
      },
      {
        loadComponent: () => import('./components/log-viewer/logs.component').then((m) => m.LogsComponent),
        path: 'logs',
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
