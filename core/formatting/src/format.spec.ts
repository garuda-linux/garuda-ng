import { describe, expect, it } from 'vitest';
import { formatBytes, formatCpuTime, formatDuration } from './format';

describe('formatDuration', () => {
  it('formats hours, minutes and seconds, omitting empty parts', () => {
    expect(formatDuration(3725)).toBe('1h 2m 5s');
    expect(formatDuration(125)).toBe('2m 5s');
    expect(formatDuration(42)).toBe('42s');
  });

  it('renders 0s for zero and rounds sub-second precision', () => {
    expect(formatDuration(0)).toBe('0s');
    expect(formatDuration(59.6)).toBe('1m');
  });
});

describe('formatBytes', () => {
  it('picks the largest fitting unit and keeps one decimal', () => {
    expect(formatBytes(42)).toBe('42 B');
    expect(formatBytes(2048)).toBe('2.0 KiB');
    expect(formatBytes(5 * 1024 * 1024)).toBe('5.0 MiB');
  });

  it('caps at the largest unit and keeps the sign', () => {
    expect(formatBytes(3 * 1024 ** 4)).toBe('3.0 TiB');
    expect(formatBytes(-1536)).toBe('-1.5 KiB');
  });

  it('reports n/a for non-finite input', () => {
    expect(formatBytes(Number.NaN)).toBe('n/a');
  });
});

describe('formatCpuTime', () => {
  it('converts nanoseconds to a human-readable duration', () => {
    expect(formatCpuTime(80_000_000_000)).toBe('1m 20s');
    expect(formatCpuTime(500_000_000)).toBe('1s');
  });

  it('reports n/a for non-finite input', () => {
    expect(formatCpuTime(Number.POSITIVE_INFINITY)).toBe('n/a');
  });
});
