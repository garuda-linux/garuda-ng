const BYTE_UNITS = ['B', 'KiB', 'MiB', 'GiB', 'TiB'] as const;

const NANOSECONDS_PER_SECOND = 1_000_000_000;

export function formatDuration(totalSeconds: number): string {
  // Sub-second precision is noise in a human-readable duration; round before
  // splitting so the seconds part never carries over into 60.
  const rounded = Math.round(totalSeconds);
  const hours = Math.floor(rounded / 3600);
  const minutes = Math.floor((rounded % 3600) / 60);
  const seconds = rounded % 60;

  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (seconds > 0 || parts.length === 0) parts.push(`${seconds}s`);
  return parts.join(' ');
}

export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes)) return 'n/a';
  let value = Math.abs(bytes);
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < BYTE_UNITS.length - 1) {
    value /= 1024;
    unitIndex++;
  }
  const sign = bytes < 0 ? '-' : '';
  return unitIndex === 0 ? `${sign}${value} ${BYTE_UNITS[unitIndex]}` : `${sign}${value.toFixed(1)} ${BYTE_UNITS[unitIndex]}`;
}

export function formatCpuTime(nanoseconds: number): string {
  if (!Number.isFinite(nanoseconds)) return 'n/a';
  return formatDuration(nanoseconds / NANOSECONDS_PER_SECOND);
}
