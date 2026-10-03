import { CATPPUCCIN_FLAVOURS } from './catppuccin-colours';

export interface GroupOverTimeRow {
  day: string;
  group: string;
  count: string;
}

export interface GroupOverTimeDataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  fill: false;
}

export interface GroupOverTimeChart {
  labels: string[];
  datasets: GroupOverTimeDataset[];
}

const TOP_GROUP_SERIES = 10;

/** Renders `{ day, group, count }` rows as a multi-series line chart, keeping only
 * the `TOP_GROUP_SERIES` groups with the highest total count. Missing (day, group)
 * cells are zero-filled so every series spans the full x-axis. */
export function groupOverTimeChart(rows: GroupOverTimeRow[], formatDay: (day: string) => string): GroupOverTimeChart {
  const dayLabel = new Map<string, string>();
  const groupTotals = new Map<string, number>();
  for (const row of rows) {
    dayLabel.set(row.day, formatDay(row.day));
    groupTotals.set(row.group, (groupTotals.get(row.group) ?? 0) + parseInt(row.count, 10));
  }

  const labels = [...dayLabel.values()];
  const topGroups = [...groupTotals.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, TOP_GROUP_SERIES)
    .map(([group]) => group);

  const cells = new Map<string, number>();
  for (const row of rows) cells.set(`${row.day}\u0000${row.group}`, parseInt(row.count, 10));

  const datasets = topGroups.map((group, index) => {
    const color = CATPPUCCIN_FLAVOURS[index % CATPPUCCIN_FLAVOURS.length];
    return {
      label: group,
      data: [...dayLabel.keys()].map((day) => cells.get(`${day}\u0000${group}`) ?? 0),
      backgroundColor: color,
      borderColor: color,
      fill: false as const,
    };
  });

  return { labels, datasets };
}
