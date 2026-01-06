import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import Aura from '@primeuix/themes/aura';
import { FeatureDetailPopupService, provideGarudaNG } from '@garudalinux/core';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { CatppuccinAura } from '@garudalinux/themes/catppuccin';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { DialogService } from 'primeng/dynamicdialog';

export const appConfig: ApplicationConfig = {
  providers: [
    DialogService,
    FeatureDetailPopupService,
    provideZonelessChangeDetection(),
    provideRouter(appRoutes),
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
    provideAnimations(),
    provideHttpClient(withFetch()),
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
