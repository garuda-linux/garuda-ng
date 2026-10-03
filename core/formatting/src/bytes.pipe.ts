import { Pipe, PipeTransform } from '@angular/core';

import { formatBytes } from './format';

@Pipe({
  name: 'garudaBytes',
})
export class BytesPipe implements PipeTransform {
  transform(value: number | string | null | undefined): string {
    if (value === null || value === undefined || value === '') return 'n/a';
    return formatBytes(Number(value));
  }
}
