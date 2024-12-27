import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import Aura from '@primeng/themes/aura';
import { provideGarudaNG } from '@garudalinux/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideGarudaNG(
      {
        font: 'monospace',
      },
      {
        theme: {
          preset: Aura,
        },
      },
    ),
  ],
};
