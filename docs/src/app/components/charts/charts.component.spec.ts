import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { ChartsComponent } from './charts.component';

describe('ChartsComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('documents every exported chart topic in its own section', () => {
    const headings = [...(fixture.nativeElement as HTMLElement).querySelectorAll('h2')].map((h) => h.textContent?.trim());

    expect(headings).toEqual(['GarudaChart', 'Styled line charts', 'Theme helpers', 'Grouped time series', 'Customisation']);
  });

  it('ships code examples that reference the exported API names', () => {
    const code = [component.importLine, component.chartTs, component.themeTs, component.groupTs, component.customisationCss].join('\n');

    for (const exported of [
      'GarudaChart',
      'garudaLineChartOptions',
      'hoverCrosshairPlugin',
      'lineGradientFill',
      'mochaAxisChartOptions',
      'mochaPieChartOptions',
      'groupOverTimeChart',
      'CATPPUCCIN_FLAVOURS',
      '--garuda-chart-height',
    ]) {
      expect(code, `${exported} must be documented`).toContain(exported);
    }
  });
});
