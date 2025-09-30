import { ApplicationConfig } from '@angular/core';
import Aura from '@primeuix/themes/aura';
import { provideGarudaNG } from '@garudalinux/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideGarudaNG(
      /* GarudaNG configuration */
      {
        font: 'monospace',
      },
      /* PrimeNG configuration */
      {
        theme: {
          preset: Aura,
        },
      },
    ),
  ],
};
