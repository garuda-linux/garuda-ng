import '@angular/compiler';
import { vi } from 'vitest';
import '@analogjs/vitest-angular/setup-snapshots';
import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { HttpClient } from '@angular/common/http';
import { provideGarudaNG } from '@garudalinux/core';
import { of } from 'rxjs';
import { DialogService } from '@openng/optimus-ui/dynamicdialog';

if (!('ResizeObserver' in globalThis)) {
  class ResizeObserverMock {
    observe() {
      return undefined;
    }
    unobserve() {
      return undefined;
    }
    disconnect() {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    constructor(_callback?: ResizeObserverCallback) {}
  }
  Object.defineProperty(globalThis, 'ResizeObserver', {
    value: ResizeObserverMock,
    writable: true,
  });
}

if (!('matchMedia' in window)) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

setupTestBed({
  providers: [
    provideGarudaNG({}),
    provideAnimations(),
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        xml: () => import('highlight.js/lib/languages/xml'),
        scss: () => import('highlight.js/lib/languages/scss'),
        shell: () => import('highlight.js/lib/languages/shell'),
      },
    }),
    {
      provide: HttpClient,
      useValue: { get: () => of('') },
    },
    { provide: DialogService, useValue: { open: () => undefined } },
  ],
});
