import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { DocumentSectionComponentPage } from './document-section.component';

describe('DocumentSectionComponentPage', () => {
  let fixture: ComponentFixture<DocumentSectionComponentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentSectionComponentPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentSectionComponentPage);
    fixture.detectChanges();
  });

  it('renders the live example with all three demo sections', () => {
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';

    for (const heading of ['Introduction', 'Details', 'Conclusion']) {
      expect(text, `${heading} section must be rendered`).toContain(heading);
    }
  });

  it('documents the component inputs and outputs', () => {
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';

    for (const api of ['sectionId', 'heading', 'sectionSelected']) {
      expect(text, `${api} must be documented`).toContain(api);
    }
  });
});
