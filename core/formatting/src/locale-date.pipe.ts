import { Pipe, PipeTransform } from '@angular/core';

const SHORT_FORMATTER = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: 'short',
  timeStyle: 'short',
});

const MEDIUM_FORMATTER = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: 'medium',
  timeStyle: 'medium',
});

const TIME_FORMATTER = new Intl.DateTimeFormat(navigator.language, {
  timeStyle: 'medium',
});

@Pipe({
  name: 'garudaLocaleDate',
  pure: true,
})
export class LocaleDatePipe implements PipeTransform {
  transform(value: string | number | Date | null | undefined, format: 'short' | 'medium' | 'time' = 'short'): string | null {
    if (value === null || value === undefined) return null;
    const date = value instanceof Date ? value : new Date(value);
    if (!Number.isFinite(date.getTime())) return null;
    if (format === 'time') return TIME_FORMATTER.format(date);
    return (format === 'medium' ? MEDIUM_FORMATTER : SHORT_FORMATTER).format(date);
  }
}
