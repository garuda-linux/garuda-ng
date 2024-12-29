import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders, Provider } from '@angular/core';
import { PrimeNGConfigType, providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';

const DEFAULT_GARUDA_NG_CONFIG: GarudaNGConfig = {
  font: 'monospace',
};

export const GARUDA_NG_CONFIG = new InjectionToken<GarudaNGConfig>('GARUDA_NG_CONFIG');

export type GarudaNGConfig = {
  font?: string;
};

export function provideGarudaNG(config?: GarudaNGConfig, ...primeNGFeatures: PrimeNGConfigType[]): EnvironmentProviders {
  const primeNGProviders = providePrimeNG(...primeNGFeatures);

  const garudaProvider: Provider = {
    provide: GARUDA_NG_CONFIG,
    useValue: config ? { ...DEFAULT_GARUDA_NG_CONFIG, ...config } : DEFAULT_GARUDA_NG_CONFIG,
    multi: false,
  };

  return makeEnvironmentProviders([primeNGProviders, garudaProvider, MessageService]);
}
