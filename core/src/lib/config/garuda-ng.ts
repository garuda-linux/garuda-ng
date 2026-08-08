import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders, Provider } from '@angular/core';
import { OptimusConfigType, provideOptimus } from '@openng/optimus-ui/config';
import { MessageService } from '@openng/optimus-ui/api';

const DEFAULT_GARUDA_NG_CONFIG: GarudaNGConfig = {
  font: 'monospace',
};

export const GARUDA_NG_CONFIG = new InjectionToken<GarudaNGConfig>('GARUDA_NG_CONFIG');

export type GarudaNGConfig = {
  font?: string;
};

export function provideGarudaNG(config?: GarudaNGConfig, ...primeNGFeatures: OptimusConfigType[]): EnvironmentProviders {
  const primeNGProviders = provideOptimus(...primeNGFeatures);

  const garudaProvider: Provider = {
    provide: GARUDA_NG_CONFIG,
    useValue: config ? { ...DEFAULT_GARUDA_NG_CONFIG, ...config } : DEFAULT_GARUDA_NG_CONFIG,
    multi: false,
  };

  return makeEnvironmentProviders([primeNGProviders, garudaProvider, MessageService]);
}
