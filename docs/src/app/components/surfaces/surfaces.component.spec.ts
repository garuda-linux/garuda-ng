import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { SurfacesComponentPage } from './surfaces.component';

describe('SurfacesComponentPage', () => {
  let component: SurfacesComponentPage;
  let fixture: ComponentFixture<SurfacesComponentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurfacesComponentPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SurfacesComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the live example with glass and PrimeNG surfaces', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('.garuda-surface').length).toBeGreaterThanOrEqual(2);
    expect(element.querySelectorAll('p-card').length).toBeGreaterThanOrEqual(2);
  });

  it('documents the stylesheet import, usage and the custom properties', () => {
    const code = [component.importScss, component.tuningScss, component.usageHtml].join('\n');

    for (const token of ['glass-surfaces.css', '--garuda-surface-border-color', '--garuda-surface-blur', 'garuda-surface']) {
      expect(code, `${token} must be documented`).toContain(token);
    }
  });
});
