import { Pipe, PipeTransform } from '@angular/core';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

let formatter: TimeAgo | undefined;

/** Created on first use so importing the formatting entry point has no side effects. */
function getFormatter(): TimeAgo {
  if (!formatter) {
    TimeAgo.addLocale(en);
    formatter = new TimeAgo('en');
  }
  return formatter;
}

export function formatRelativeTime(value: string | Date | number | null | undefined): string {
  if (value == null) return '';
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return getFormatter().format(date);
}

@Pipe({ name: 'garudaRelativeTime' })
export class RelativeTimePipe implements PipeTransform {
  transform(value: string | Date | number | null | undefined): string {
    return formatRelativeTime(value);
  }
}
