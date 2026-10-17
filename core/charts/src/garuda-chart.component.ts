import { ChangeDetectionStrategy, Component, ElementRef, InputSignal, OnDestroy, effect, input, viewChild } from '@angular/core';

import type { Chart, ChartConfiguration, ChartType, Plugin } from 'chart.js';

import { type ChartConfig } from './chart-theme';

let chartJs: Promise<typeof Chart> | undefined;

/** chart.js is fetched on first render and every controller is registered once, so it never
 * lands in the initial bundle and importing the charts entry point has no side effects. */
function loadChartJs(): Promise<typeof Chart> {
  chartJs ??= import('chart.js').then(
    ({ Chart, registerables }) => {
      Chart.register(...registerables);
      return Chart;
    },
    (error: unknown) => {
      chartJs = undefined;
      throw error;
    },
  );
  return chartJs;
}

/** Renders a chart.js chart with full custom styling control. The chart is
 * re-created whenever the `config` signal changes; extra plugins can be passed
 * via the `plugins` input. Hosts size the canvas through the
 * `--garuda-chart-height` CSS custom property. */
@Component({
  selector: 'garuda-chart',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas #canvas></canvas>`,
  host: {
    class: 'garuda-chart',
  },
  styles: `
    :host {
      display: block;
      position: relative;
      width: 100%;
    }
    canvas {
      height: var(--garuda-chart-height, 20rem);
      width: 100%;
    }
  `,
})
export class GarudaChart<TType extends ChartType = ChartType> implements OnDestroy {
  /** Chart type, e.g. `line`, `bar` or `doughnut`. */
  readonly type = input.required<TType>();
  /** Chart data and options; compose them from `mochaAxisChartOptions`, `mochaPieChartOptions`
   * and the styled chart helpers. */
  readonly config = input.required<ChartConfig<TType>>();
  readonly plugins: InputSignal<Plugin<TType>[]> = input<Plugin<TType>[]>([]);

  private readonly canvas = viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  private chart?: Chart<TType>;
  /** Bumped on every render request and on destroy so stale async renders are dropped. */
  private renderVersion = 0;

  constructor() {
    effect(() => {
      const config = this.config();
      const canvas = this.canvas();
      if (!canvas) return;

      const configuration: ChartConfiguration<TType> = {
        type: this.type(),
        data: config.data,
        options: config.options,
        plugins: this.plugins(),
      };
      void this.render(canvas.nativeElement, configuration);
    });
  }

  ngOnDestroy(): void {
    this.renderVersion++;
    this.chart?.destroy();
    this.chart = undefined;
  }

  private async render(canvas: HTMLCanvasElement, configuration: ChartConfiguration<TType>): Promise<void> {
    const version = ++this.renderVersion;
    const ChartJs = await loadChartJs();
    if (version !== this.renderVersion) return;

    this.chart?.destroy();
    this.chart = new ChartJs<TType>(canvas, configuration);
  }
}
