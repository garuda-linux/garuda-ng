import { describe, expect, it } from 'vitest';
import { garudaLineChartOptions, garudaExternalTooltip, hoverCrosshairPlugin, lineGradientFill } from './styled-chart-plugins';

describe('garudaLineChartOptions', () => {
  it('applies the styled defaults', () => {
    const options = garudaLineChartOptions();

    expect(options.interaction).toEqual({ intersect: false, mode: 'index' });
    expect(options.datasets?.line).toMatchObject({ borderWidth: 1.2, tension: 0.3, pointRadius: 4 });
    expect(options.plugins?.['legend']?.display).toBe(false);
    expect(options.plugins?.['tooltip']?.enabled).toBe(false);
    expect(options.scales?.x?.border?.display).toBe(false);
    expect(options.scales?.y?.border?.display).toBe(false);
  });

  it('passes the value prefix to the external tooltip handler', () => {
    const options = garudaLineChartOptions({ tooltipPrefix: '$' });
    const tooltip = options.plugins?.['tooltip'] as { external: (context: unknown) => void };

    expect(typeof tooltip.external).toBe('function');
  });
});

describe('hoverCrosshairPlugin', () => {
  it('registers under a stable id and ignores empty tooltips', () => {
    const plugin = hoverCrosshairPlugin();
    expect(plugin.id).toBe('garudaHoverCrosshair');

    const ctxCalls: string[] = [];
    const ctx = {
      ctx: new Proxy(
        {},
        {
          get: (_target, method) => () => ctxCalls.push(String(method)),
        },
      ),
      tooltip: { getActiveElements: () => [] },
      chartArea: { bottom: 200 },
      scales: { x: { getPixelForValue: () => 42 } },
    };
    plugin.beforeDatasetsDraw?.(ctx as never, {} as never, {} as never);
    expect(ctxCalls).not.toContain('stroke');
  });
});

describe('garudaExternalTooltip', () => {
  it('creates a styled tooltip card and fills it with one row per data point', () => {
    document.body.innerHTML = '';
    const canvas = document.createElement('canvas');
    const host = document.createElement('div');
    host.appendChild(canvas);
    document.body.appendChild(host);

    const tooltipModel = {
      opacity: 1,
      caretX: 20,
      caretY: 10,
      title: ['2026-08-28'],
      bodyFont: { string: '12px sans-serif' },
      dataPoints: [{ dataset: { label: 'mesa', borderColor: '#cba6f7' }, formattedValue: '42' }],
    };

    garudaExternalTooltip('$')({
      chart: { canvas, width: 400, height: 200 } as never,
      tooltip: tooltipModel as never,
    });

    const card = host.querySelector<HTMLElement>('div.garuda-chart-tooltip');
    expect(card).not.toBeNull();
    expect(card?.textContent).toContain('2026-08-28');
    expect(card?.textContent).toContain('mesa');
    expect(card?.textContent).toContain('$42');

    // Re-invocations reuse the card instead of stacking duplicates.
    garudaExternalTooltip('$')({
      chart: { canvas, width: 400, height: 200 } as never,
      tooltip: tooltipModel as never,
    });
    expect(host.querySelectorAll('div.garuda-chart-tooltip')).toHaveLength(1);

    // Hiding the tooltip only fades it out, keeping the element for the next hover.
    garudaExternalTooltip('$')({
      chart: { canvas, width: 400, height: 200 } as never,
      tooltip: { ...tooltipModel, opacity: 0 } as never,
    });
    expect(card?.style.opacity ?? '1').toBe('0');
  });
});

describe('lineGradientFill', () => {
  it('returns undefined when no chart area exists yet', () => {
    const fill = lineGradientFill();
    const context = { chart: { ctx: {}, chartArea: undefined }, dataset: {} } as never;
    expect(fill(context as never)).toBeUndefined();
  });
});
