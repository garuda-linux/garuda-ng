import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { UtilitiesComponent } from './utilities.component';

describe('UtilitiesComponent', () => {
  let component: UtilitiesComponent;
  let fixture: ComponentFixture<UtilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilitiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('documents every utility in its own section', () => {
    const headings = [...(fixture.nativeElement as HTMLElement).querySelectorAll('h2')].map((h) => h.textContent?.trim());

    expect(headings).toEqual(['Formatting pipes', 'Lazy table pagination', 'Loading tracking', 'API error messages']);
  });

  it('ships code examples that reference the exported API names', () => {
    const code = [component.pipesTs, component.paginationTs, component.loadingTs, component.errorsTs].join('\n');

    for (const exported of [
      'garudaBytes',
      'garudaCpuTime',
      'garudaDuration',
      'garudaLocaleDate',
      'garudaRelativeTime',
      'garudaStripPrefix',
      'createLazyTablePagination',
      'resetPage',
      'loadingInterceptor',
      'LoadingService',
      'backendErrorMessage',
    ]) {
      expect(code, `${exported} must be documented`).toContain(exported);
    }
  });
});
