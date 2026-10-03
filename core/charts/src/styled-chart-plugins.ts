import type { Chart, ChartArea, ChartOptions, Plugin, ScriptableContext, TooltipModel } from 'chart.js';

import { CATPPUCCIN_FLAVOURS } from './catppuccin-colours';

const MOCHA_TEXT = '#cdd6f4'; /* mocha.text */
const MOCHA_SURFACE_0 = '#313244'; /* mocha.surface0 */
const MOCHA_SURFACE_1 = '#45475a'; /* mocha.surface1 */
const MOCHA_MAUVES = '#cba6f7'; /* mocha.mauve */

/** Reads a chart colour from a CSS custom property, falling back to a Catppuccin Mocha colour. */
function chartColour(cssVariable: string, fallback: string): string {
  const value = getComputedStyle(document.documentElement).getPropertyValue(cssVariable).trim();
  return value.length > 0 ? value : fallback;
}

/** Colours for the styled chart helpers; override per app via `--garuda-chart-*` custom properties. */
export interface GarudaChartColours {
  text: string;
  grid: string;
  accent: string;
  surface: string;
}

export function garudaChartColours(): GarudaChartColours {
  return {
    text: chartColour('--garuda-chart-text', MOCHA_TEXT),
    grid: chartColour('--garuda-chart-grid', MOCHA_SURFACE_1),
    accent: chartColour('--garuda-chart-accent', MOCHA_MAUVES),
    surface: chartColour('--garuda-chart-surface', MOCHA_SURFACE_0),
  };
}

/** Dashed vertical line drawn through the hovered x position. */
export function hoverCrosshairPlugin(): Plugin<'line'> {
  return {
    id: 'garudaHoverCrosshair',
    beforeDatasetsDraw(chart) {
      const {
        ctx,
        tooltip,
        chartArea: { bottom },
        scales: { x },
      } = chart;
      const active = tooltip?.getActiveElements() ?? [];
      if (active.length === 0) return;

      const xCoordinate = x.getPixelForValue(active[0]?.element?.x ?? 0);
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = garudaChartColours().accent;
      ctx.setLineDash([4, 4]);
      ctx.moveTo(xCoordinate, 0);
      ctx.lineTo(xCoordinate, bottom + 8);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
  };
}

/** Background colour callback filling a line dataset with a vertical gradient from
 * `lineColour` to transparent, so series melt into the chart background. */
export function lineGradientFill(lineColour?: (context: ScriptableContext<'line'>) => string) {
  return (context: ScriptableContext<'line'>): CanvasGradient | string | undefined => {
    const { ctx, chartArea } = context.chart;
    if (!chartArea) return undefined;

    const colour = lineColour?.(context) ?? context.dataset.borderColor?.toString() ?? CATPPUCCIN_FLAVOURS[0];
    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0, withAlpha(colour, 0.25));
    gradient.addColorStop(1, withAlpha(colour, 0));
    return gradient;
  };
}

function withAlpha(hex: string, alpha: number): string {
  const raw = hex.replace('#', '');
  if (raw.length !== 6) return hex;
  const red = parseInt(raw.slice(0, 2), 16);
  const green = parseInt(raw.slice(2, 4), 16);
  const blue = parseInt(raw.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

interface TooltipModelWithChartArea {
  chart: { canvas: HTMLCanvasElement; width: number; height: number; area?: ChartArea };
  caretX: number;
  caretY: number;
  opacity: number;
  title: string[];
  bodyFont: { string: string };
  dataPoints: { dataset: { label: string; borderColor: string }; formattedValue: string }[];
}

/** Renders the chart.js tooltip as a custom floating card instead of the default
 * black box: header row, per-series rows with colour dots, values prefixed with
 * `valuePrefix`. Styling is inline so the library carries no CSS dependency. */
export function garudaExternalTooltip(valuePrefix = '') {
  return (context: { chart: Chart; tooltip: TooltipModel<'line'> }): void => {
    const { chart, tooltip } = context;
    const model = tooltip as unknown as TooltipModelWithChartArea;
    const host = chart.canvas.parentNode as HTMLElement | null;
    if (!host) return;

    let tooltipElement = host.querySelector<HTMLElement>('div.garuda-chart-tooltip');
    if (!tooltipElement) {
      tooltipElement = document.createElement('div');
      tooltipElement.classList.add('garuda-chart-tooltip');
      host.appendChild(tooltipElement);
    }

    const colours = garudaChartColours();
    if (model.opacity === 0) {
      tooltipElement.style.opacity = '0';
      return;
    }

    tooltipElement.innerHTML = '';
    tooltipElement.style.cssText = `
      position: absolute; pointer-events: none; opacity: 1; transition: opacity 0.05s;
      background: ${colours.surface}; color: ${colours.text};
      border: 1px solid ${colours.grid}; border-radius: 8px; overflow: hidden;
      box-shadow: 0 16px 32px -12px rgba(0, 0, 0, 0.35);
      font: ${model.bodyFont.string}; padding: 0; min-width: 10rem;
    `;

    const header = document.createElement('div');
    header.style.cssText = `padding: 0.625rem 0.75rem; border-bottom: 1px solid ${colours.grid}; text-align: left; font-size: 0.75rem;`;
    header.textContent = model.title[0] ?? '';
    tooltipElement.appendChild(header);

    const body = document.createElement('div');
    body.style.cssText = 'display: flex; flex-direction: column; gap: 0.5rem; padding: 0.5rem 0.75rem;';
    for (const point of model.dataPoints) {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; gap: 0.5rem; width: 100%;';

      const dot = document.createElement('span');
      dot.style.cssText = `width: 0.625rem; height: 0.625rem; border-radius: 9999px; background: ${point.dataset.borderColor};`;
      const label = document.createElement('span');
      label.style.cssText = 'flex: 1; text-align: left;';
      label.textContent = point.dataset.label;
      const value = document.createElement('span');
      value.style.cssText = 'text-align: right;';
      value.textContent = `${valuePrefix}${point.formattedValue}`;
      row.append(dot, label, value);
      body.appendChild(row);
    }
    tooltipElement.appendChild(body);

    const { offsetLeft, offsetTop } = chart.canvas as HTMLCanvasElement & { offsetLeft: number; offsetTop: number };
    const tooltipWidth = tooltipElement.offsetWidth;
    const tooltipHeight = tooltipElement.offsetHeight;
    const anchorX = model.caretX;
    const anchorY = model.caretY;

    let x = offsetLeft + anchorX + 20;
    if (x + tooltipWidth > chart.width) x = offsetLeft + anchorX - tooltipWidth - 20;
    let y = offsetTop + anchorY - tooltipHeight / 2;
    if (y < 0) y = 0;
    else if (y + tooltipHeight > chart.height) y = chart.height - tooltipHeight;

    tooltipElement.style.left = `${x}px`;
    tooltipElement.style.top = `${y}px`;
  };
}

/** Line-chart options carrying the full Garuda styling: index-mode hover, the custom
 * card tooltip (value prefix configurable), hidden legends by default, smooth lines
 * with invisible points, and borderless axes coloured via `--garuda-chart-*`. Merge
 * overrides on top for per-chart tweaks. Combine with `hoverCrosshairPlugin()` in the
 * `plugins` input of `GarudaChart` for the dashed hover line. */
export function garudaLineChartOptions(config: { tooltipPrefix?: string } = {}): ChartOptions<'line'> {
  const colours = garudaChartColours();
  return {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { intersect: false, mode: 'index' },
    layout: { padding: 0 },
    datasets: {
      line: {
        borderWidth: 1.2,
        tension: 0.3,
        pointStyle: 'circle',
        pointRadius: 4,
        pointBorderColor: 'rgba(0, 0, 0, 0)',
        pointBackgroundColor: 'rgba(0, 0, 0, 0)',
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: garudaExternalTooltip(config.tooltipPrefix ?? ''),
      },
    },
    scales: {
      x: {
        ticks: { color: colours.text, maxRotation: 0, autoSkip: false },
        grid: { display: true, color: colours.grid },
        border: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: colours.text,
          maxRotation: 0,
          autoSkip: false,
          callback: (value) => (typeof value === 'number' && value >= 1000 ? `${value / 1000}K` : `${value}`),
        },
        grid: { display: true, color: colours.grid },
        border: { display: false },
      },
    },
  };
}
