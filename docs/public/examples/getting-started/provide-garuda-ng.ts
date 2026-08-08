import { ApplicationConfig } from '@angular/core';
import Aura from '@openng/optimus-ui-themes/aura';
import { provideGarudaNG } from '@garudalinux/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideGarudaNG(
      /* GarudaNG configuration */
      {
        font: 'monospace',
      },
      /* Optimus UI configuration */
      {
        theme: {
          preset: Aura,
        },
      },
    ),
  ],
};
