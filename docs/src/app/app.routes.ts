import { Route } from '@angular/router';
import { ShellComponent } from './components/shell/shell.component';
import { ToastServiceComponent } from './components/toast-service/toast-service.component';
import { CardComponent } from './components/card/card.component';
import {
  animate,
  AnimationGroupMetadata,
  AnimationQueryMetadata,
  AnimationTriggerMetadata,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./getting-started/getting-started.component').then((m) => m.GettingStartedComponent),
    data: { animationState: '1' },
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
    data: { animationState: '2' },
  },
  {
    path: 'theming',
    loadComponent: () => import('./theming/theming.component').then((m) => m.ThemingComponent),
    data: { animationState: '3' },
  },
  {
    path: 'startv2',
    loadComponent: () => import('./startv2-website/startv2.component').then((m) => m.Startv2Component),
  },
];

/**
 * A generic fade animation, for use in the router link animations.
 */
const fade: (AnimationQueryMetadata | AnimationGroupMetadata)[] = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  query(':enter', [style({ opacity: 0 })], { optional: true }),
  group([
    query(':leave', [animate('0.4s ease-out', style({ opacity: 0 }))], { optional: true }),
    query(':enter', [style({ opacity: 0 }), animate('0.4s ease-out', style({ opacity: 1 }))], { optional: true }),
  ]),
];

/**
 * Animation metadata for router link transitions.
 * Fades between pages.
 * @param direction the direction the animation should go into.
 */
const fadeInFromDirection = (direction: string): (AnimationQueryMetadata | AnimationGroupMetadata)[] => [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(
      ':enter',
      [
        style({
          transform: `translateX(${direction === 'backward' ? '-' : ''}15%)`,
          opacity: 0,
        }),
        animate('0.1s ease-out', style({ transform: 'translateX(0%)', opacity: 1 })),
      ],
      { optional: true },
    ),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('0.3s ease-out', style({ opacity: 0 }))], {
      optional: true,
    }),
  ]),
];

/**
 * Produces the strings needed for any forward transitions.
 * @returns A string like "0 => 1, 1 => 2, 0 => 2"
 */
function forwardValues(): string {
  let result = '';
  for (let i = 0; i <= 8; i++) {
    for (let j = i + 1; j <= 9; j++) {
      result += `${i} => ${j}, `;
    }
  }
  return result.slice(0, -2);
}

/**
 * Produces the strings needed for any backward transitions.
 * @returns A string like "2 => 1, 1 => 0, 2 => 0"
 */
function backwardValues(): string {
  let result = '';
  for (let i = 9; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      result += `${i} => ${j}, `;
    }
  }
  return result.slice(0, -2);
}

/**
 * This constant holds any page transition rules, triggered from the router outlet.
 */
export const routeAnimations: AnimationTriggerMetadata = trigger('routerTransition', [
  transition(forwardValues(), fadeInFromDirection('forward')),
  transition(backwardValues(), fadeInFromDirection('backward')),
  transition('* => null, null => *', fade),
]);
