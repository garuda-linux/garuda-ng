import { describe, expect, it } from 'vitest';
import { mochaAxisChartOptions, mochaLegendLabels, mochaPieChartOptions, mochaScales } from './chart-theme';
import { CATPPUCCIN_FLAVOURS } from './catppuccin-colours';

describe('mocha theme helpers', () => {
  it('uses Catppuccin text and surface colours for the axes', () => {
    const scales = mochaScales();
    expect(scales.x.ticks.color).toBe('#cdd6f4');
    expect(scales.x.grid.color).toBe(scales.y.grid.color);
  });

  it('switches the index axis on request and keeps the legend labels', () => {
    const options = mochaAxisChartOptions<'bar'>({ indexAxis: 'y' });
    expect(options.indexAxis).toBe('y');
    expect(options.plugins?.['legend']?.labels).toEqual(mochaLegendLabels());

    expect(mochaAxisChartOptions<'bar'>().indexAxis).toBeUndefined();
  });

  it('places the pie legend on top', () => {
    const options = mochaPieChartOptions<'doughnut'>();
    expect(options.plugins?.['legend']?.position).toBe('top');
  });

  it('offers thirteen distinct series colours', () => {
    expect(new Set(CATPPUCCIN_FLAVOURS).size).toBe(CATPPUCCIN_FLAVOURS.length);
    expect(CATPPUCCIN_FLAVOURS).toHaveLength(13);
    expect(CATPPUCCIN_FLAVOURS.every((colour) => colour.startsWith('#'))).toBe(true);
  });
});
