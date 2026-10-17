import { describe, expect, it } from 'vitest';
import { groupOverTimeChart, type GroupOverTimeRow } from './group-over-time-chart';

const rows: GroupOverTimeRow[] = [
  { day: '2026-08-01', group: 'mesa', count: '12' },
  { day: '2026-08-01', group: 'linux', count: '30' },
  { day: '2026-08-02', group: 'mesa', count: '8' },
];

describe('groupOverTimeChart', () => {
  it('builds one dataset per group over the sorted day labels', () => {
    const { labels, datasets } = groupOverTimeChart(rows, (day) => day.slice(5));

    expect(labels).toEqual(['08-01', '08-02']);
    expect(datasets.map((dataset) => dataset.label)).toEqual(['linux', 'mesa']);
  });

  it('sums counts per group for ranking and zero-fills missing cells', () => {
    const { datasets } = groupOverTimeChart(rows, (day) => day);
    const byLabel = new Map(datasets.map((dataset) => [dataset.label, dataset]));

    expect(byLabel.get('mesa')?.data).toEqual([12, 8]);
    // linux has no data on the second day but must still span the full axis.
    expect(byLabel.get('linux')?.data).toEqual([30, 0]);
  });

  it('keeps only the top ten groups', () => {
    const many: GroupOverTimeRow[] = Array.from({ length: 15 }, (_, index) => ({
      day: '2026-08-01',
      group: `pkg-${index}`,
      count: String(index + 1),
    }));

    const { datasets } = groupOverTimeChart(many, (day) => day);
    expect(datasets).toHaveLength(10);
    expect(datasets[0]?.label).toBe('pkg-14');
  });
});
