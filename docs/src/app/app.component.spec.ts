import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { provideGarudaNG } from '@garudalinux/core';
import Aura from '@openng/optimus-ui-themes/aura';
import { provideHttpClient } from '@angular/common/http';
import { provideHighlightOptions } from 'ngx-highlightjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
      providers: [
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

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
