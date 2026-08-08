import { ApplicationConfig, inject, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, Router, withViewTransitions } from '@angular/router';
import { appRoutes } from './app.routes';
import { FeatureDetailPopupService, provideGarudaNG } from '@garudalinux/core';
import { CatppuccinAura } from '@garudalinux/themes/catppuccin';
import { provideHttpClient } from '@angular/common/http';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { DialogService } from '@openng/optimus-ui/dynamicdialog';

export const appConfig: ApplicationConfig = {
  providers: [
    DialogService,
    FeatureDetailPopupService,
    provideZonelessChangeDetection(),
    provideRouter(
      appRoutes,
      withViewTransitions({
        skipInitialTransition: true,
        onViewTransitionCreated: ({ transition, from, to }) => {
          const router = inject(Router);
          try {
            const nav = router.currentNavigation();
            const info = nav?.extras?.info as any;

            const fromSegments = from.url.map((s) => s.path);
            const toSegments = to.url.map((s) => s.path);
            if (fromSegments.length > 1 && toSegments.length > 1 && fromSegments[0] === toSegments[0]) {
              transition.skipTransition();
            }

            if (info?.disableViewTransition) {
              const style = document.createElement('style');
              style.id = 'skip-transition';
              style.textContent = '* { view-transition-name: none !important; }';
              document.head.appendChild(style);

              transition.finished.finally(() => {
                const el = document.getElementById('skip-transition');
                if (el) el.remove();
                document.body.classList.remove('is-transitioning');
              });
            } else {
              transition.finished.finally(() => {
                document.body.classList.remove('is-transitioning');
              });
            }
          } catch {
            // Ignore parse errors, let transition proceed
          }
        },
      }),
    ),
    provideGarudaNG(
      {
        font: 'Inter',
      },
      {
        theme: {
          options: {
            darkModeSelector: '.p-dark',
          },
          preset: CatppuccinAura,
        },
      },
    ),
    provideHttpClient(),
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        xml: () => import('highlight.js/lib/languages/xml'),
        scss: () => import('highlight.js/lib/languages/scss'),
        shell: () => import('highlight.js/lib/languages/shell'),
      },
    }),
  ],
};
