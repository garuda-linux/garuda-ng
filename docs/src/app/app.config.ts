import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import Aura from '@primeng/themes/aura'
import { provideGarudaNG } from '../../../core/src/lib/config/garuda-ng';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideGarudaNG({
      font: 'Arial'
    }, {
      theme: {
        preset: Aura
      }
    }),
  ],
};
