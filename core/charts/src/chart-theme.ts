import type { ChartData, ChartOptions, ChartType } from 'chart.js';

const MOCHA_TEXT = '#cdd6f4'; /* mocha.text */
const MOCHA_SURFACE_0 = '#313244'; /* mocha.surface0 */
const CHART_FONT_FAMILY = "'Inter Variable', 'Helvetica', 'Arial', sans-serif";

export interface ChartConfig<TType extends ChartType = ChartType> {
  data: ChartData<TType>;
  options: ChartOptions<TType>;
}

interface AxisStyling {
  ticks: { color: string };
  grid: { color: string };
}

export function mochaLegendLabels(): { usePointStyle: false; color: string; family: string } {
  return { usePointStyle: false, color: MOCHA_TEXT, family: CHART_FONT_FAMILY };
}

export function mochaScales(): { x: AxisStyling; y: AxisStyling } {
  const axis: AxisStyling = {
    ticks: { color: MOCHA_TEXT },
    grid: { color: MOCHA_SURFACE_0 },
  };
  return { x: axis, y: axis };
}

interface MochaAxisChartOptions {
  indexAxis?: 'x' | 'y';
}

export function mochaAxisChartOptions<TType extends ChartType>(config: MochaAxisChartOptions = {}): ChartOptions<TType> {
  const { indexAxis = 'x' } = config;

  const options = {
    maintainAspectRatio: false,
    aspectRatio: 0.4,
    plugins: {
      legend: { labels: mochaLegendLabels() },
    },
    scales: mochaScales(),
  } as const;
  return (indexAxis === 'y' ? { ...options, indexAxis: 'y' } : options) as unknown as ChartOptions<TType>;
}

export function mochaPieChartOptions<TType extends ChartType>(): ChartOptions<TType> {
  return {
    plugins: {
      legend: { labels: mochaLegendLabels(), position: 'top' },
    },
  } as unknown as ChartOptions<TType>;
}
