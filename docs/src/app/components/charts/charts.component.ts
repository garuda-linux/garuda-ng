import { Component } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

import { CodeExampleComponent } from '../../../util/code-example/code-example.component';
import { BuildsPerDayExampleComponent, DownloadsChartExampleComponent } from './examples/examples.component';

@Component({
  selector: 'garuda-docs-charts',
  imports: [Highlight, CodeExampleComponent, DownloadsChartExampleComponent, BuildsPerDayExampleComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent {
  importLine = "import { GarudaChart, garudaLineChartOptions, hoverCrosshairPlugin } from '@garudalinux/core';";

  chartTs = `import { Component, computed } from '@angular/core';
import { ChartConfig } from '@garudalinux/core/charts';
import { garudaLineChartOptions, hoverCrosshairPlugin, lineGradientFill } from '@garudalinux/core/charts';

@Component({
  selector: 'garuda-docs-downloads-chart',
  imports: [GarudaChart],
  template: '<garuda-chart type="line" [config]="config()" [plugins]="plugins" />',
  styles: ':host { --garuda-chart-height: 24rem; display: block; }',
})
export class DownloadsChartComponent {
  readonly config = computed<ChartConfig<'line'>>(() => ({
    data: {
      labels: ['Mon', 'Tue', 'Wed'],
      datasets: [
        {
          label: 'Downloads',
          data: [120, 340, 260],
          borderColor: '#cba6f7',
          backgroundColor: lineGradientFill(),
          fill: true,
        },
      ],
    },
    options: garudaLineChartOptions(),
  }));

  readonly plugins = [hoverCrosshairPlugin()];
}`;

  chartHtml = `<garuda-chart [config]="config()" [plugins]="plugins" />`;

  themeTs = `import {
  mochaAxisChartOptions,
  mochaPieChartOptions,
  mochaLegendLabels,
  mochaScales,
  CATPPUCCIN_FLAVOURS,
} from '@garudalinux/core';

// Neutral axis chart (bar, line, ...)
const axisOptions = mochaAxisChartOptions<'bar'>();
const horizontalOptions = mochaAxisChartOptions<'bar'>({ indexAxis: 'y' });

// Pie / doughnut charts with a top legend
const pieOptions = mochaPieChartOptions<'doughnut'>();

// One distinct colour per series
const seriesColours = CATPPUCCIN_FLAVOURS;`;

  groupTs = `import { groupOverTimeChart, GroupOverTimeRow } from '@garudalinux/core';

const rows: GroupOverTimeRow[] = [
  { day: '2026-08-01', group: 'mesa', count: '12' },
  { day: '2026-08-01', group: 'linux', count: '30' },
  { day: '2026-08-02', group: 'mesa', count: '18' },
];

// Renders the top 10 groups as multi-series line datasets; missing days are zero-filled.
const { labels, datasets } = groupOverTimeChart(rows, (day) => day.slice(5));`;

  customisationCss = `/* Tune the styled charts per app through CSS custom properties
   (Catppuccin Mocha colours are used as fallbacks). */
:root {
  --garuda-chart-text: var(--ctp-mocha-text);
  --garuda-chart-grid: var(--ctp-mocha-surface0);
  --garuda-chart-accent: var(--ctp-mocha-mauve);
  --garuda-chart-surface: var(--ctp-mocha-surface0);
  --garuda-chart-height: 24rem;
}`;
}
