import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { provideGarudaNG } from '@garudalinux/core';
import Aura from '@primeng/themes/aura';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideHighlightOptions } from 'ngx-highlightjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
      providers: [
        provideGarudaNG(
          {
            font: 'monospace',
          },
          {
            theme: Aura,
          },
        ),
        provideAnimations(),
        provideHttpClient(),
        provideHighlightOptions({
          coreLibraryLoader: () => import('highlight.js/lib/core'),
          languages: {
            typescript: () => import('highlight.js/lib/languages/typescript'),
            xml: () => import('highlight.js/lib/languages/xml'),
            scss: () => import('highlight.js/lib/languages/scss'),
          },
        }),
      ],
    }).compileComponents();
  });
});
