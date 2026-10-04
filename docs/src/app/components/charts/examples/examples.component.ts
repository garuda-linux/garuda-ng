import { Component, computed } from '@angular/core';
import {
  CATPPUCCIN_FLAVOURS,
  ChartConfig,
  GarudaChart,
  garudaLineChartOptions,
  GroupOverTimeRow,
  groupOverTimeChart,
  hoverCrosshairPlugin,
  lineGradientFill,
  mochaAxisChartOptions,
} from '@garudalinux/core/charts';

const DOWNLOAD_ROWS: GroupOverTimeRow[] = [
  { day: '2026-08-22', group: 'indonesia', count: '3120' },
  { day: '2026-08-23', group: 'indonesia', count: '3410' },
  { day: '2026-08-24', group: 'indonesia', count: '2980' },
  { day: '2026-08-25', group: 'indonesia', count: '3620' },
  { day: '2026-08-26', group: 'indonesia', count: '3310' },
  { day: '2026-08-22', group: 'germany', count: '2410' },
  { day: '2026-08-23', group: 'germany', count: '2280' },
  { day: '2026-08-24', group: 'germany', count: '2650' },
  { day: '2026-08-25', group: 'germany', count: '2540' },
  { day: '2026-08-26', group: 'germany', count: '2730' },
  { day: '2026-08-22', group: 'brazil', count: '1520' },
  { day: '2026-08-23', group: 'brazil', count: '1610' },
  { day: '2026-08-24', group: 'brazil', count: '1380' },
  { day: '2026-08-25', group: 'brazil', count: '1740' },
  { day: '2026-08-26', group: 'brazil', count: '1690' },
];

const formatDay = (day: string): string => new Date(day).toLocaleDateString(undefined, { weekday: 'short' });

/** Live demo for the docs: styled multi-series downloads chart. */
@Component({
  selector: 'garuda-docs-downloads-chart-example',
  imports: [GarudaChart],
  template: `<garuda-chart type="line" [config]="config()" [plugins]="plugins" />`,
  styles: `
    :host {
      --garuda-chart-height: 22rem;
      display: block;
    }
  `,
})
export class DownloadsChartExampleComponent {
  readonly config = computed<ChartConfig<'line'>>(() => {
    const { labels, datasets } = groupOverTimeChart(DOWNLOAD_ROWS, formatDay);
    return {
      data: {
        labels,
        datasets: datasets.map((dataset) => ({
          ...dataset,
          fill: true,
          backgroundColor: lineGradientFill(),
        })),
      },
      options: garudaLineChartOptions(),
    };
  });

  readonly plugins = [hoverCrosshairPlugin()];
}

const BUILDS_PER_DAY: { day: string; builds: number }[] = [
  { day: 'Mon', builds: 210 },
  { day: 'Tue', builds: 264 },
  { day: 'Wed', builds: 189 },
  { day: 'Thu', builds: 302 },
  { day: 'Fri', builds: 275 },
  { day: 'Sat', builds: 141 },
  { day: 'Sun', builds: 122 },
];

/** Live demo for the docs: bar chart built from the mocha theme helpers. */
@Component({
  selector: 'garuda-docs-builds-per-day-example',
  imports: [GarudaChart],
  template: `<garuda-chart type="bar" [config]="config()" />`,
  styles: `
    :host {
      --garuda-chart-height: 16rem;
      display: block;
    }
  `,
})
export class BuildsPerDayExampleComponent {
  readonly config = computed<ChartConfig<'bar'>>(() => ({
    data: {
      labels: BUILDS_PER_DAY.map((entry) => entry.day),
      datasets: [
        {
          label: 'Builds',
          data: BUILDS_PER_DAY.map((entry) => entry.builds),
          backgroundColor: CATPPUCCIN_FLAVOURS[0],
        },
      ],
    },
    options: mochaAxisChartOptions<'bar'>(),
  }));
}
