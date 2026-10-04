import { describe, expect, it } from 'vitest';
import { BytesPipe } from './bytes.pipe';
import { CpuTimePipe } from './cpu-time.pipe';
import { DurationPipe } from './duration.pipe';
import { LocaleDatePipe } from './locale-date.pipe';
import { RelativeTimePipe } from './relative-time.pipe';
import { StripPrefixPipe } from './strip-prefix.pipe';

describe('BytesPipe', () => {
  const pipe = new BytesPipe();

  it('formats numeric input and accepts numeric strings', () => {
    expect(pipe.transform(4096)).toBe('4.0 KiB');
    expect(pipe.transform('1024')).toBe('1.0 KiB');
  });

  it('reports n/a for empty and nullish input', () => {
    expect(pipe.transform(null)).toBe('n/a');
    expect(pipe.transform(undefined)).toBe('n/a');
    expect(pipe.transform('')).toBe('n/a');
  });
});

describe('CpuTimePipe', () => {
  const pipe = new CpuTimePipe();

  it('formats nanosecond values', () => {
    expect(pipe.transform(60_000_000_000)).toBe('1m');
  });

  it('reports n/a for empty and nullish input', () => {
    expect(pipe.transform(null)).toBe('n/a');
    expect(pipe.transform('')).toBe('n/a');
  });
});

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('treats input as minutes', () => {
    expect(pipe.transform(2)).toBe('2m');
  });

  it('reports n/a for zero and undefined', () => {
    expect(pipe.transform(0)).toBe('n/a');
    expect(pipe.transform(undefined)).toBe('n/a');
  });
});

describe('LocaleDatePipe', () => {
  const pipe = new LocaleDatePipe();

  it('formats a fixed date and reports null for nullish or invalid input', () => {
    const formatted = pipe.transform('2026-08-28T10:00:00Z');
    expect(formatted).toBeTruthy();
    expect(pipe.transform(null)).toBeNull();
    expect(pipe.transform('not-a-date')).toBeNull();
  });
});

describe('RelativeTimePipe', () => {
  const pipe = new RelativeTimePipe();

  it('renders a relative phrase and empty strings for nullish or invalid input', () => {
    expect(pipe.transform(new Date(Date.now() - 60_000))).toMatch(/ago|minute/i);
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform('nope')).toBe('');
  });
});

describe('StripPrefixPipe', () => {
  const pipe = new StripPrefixPipe();

  it('strips the URL scheme and trailing slash', () => {
    expect(pipe.transform('https://aur.chaotic.cx/')).toBe('aur.chaotic.cx');
  });

  it('returns an empty string for falsy input', () => {
    expect(pipe.transform(undefined)).toBe('');
    expect(pipe.transform('')).toBe('');
  });
});
