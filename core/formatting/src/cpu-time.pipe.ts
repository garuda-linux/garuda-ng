import { Pipe, PipeTransform } from '@angular/core';

import { formatDuration } from './format';

@Pipe({
  name: 'garudaCpuTime',
})
export class CpuTimePipe implements PipeTransform {
  transform(value: number | string | null | undefined): string {
    if (value === null || value === undefined || value === '') return 'n/a';
    return formatDuration(Number(value) / 1_000_000_000);
  }
}
