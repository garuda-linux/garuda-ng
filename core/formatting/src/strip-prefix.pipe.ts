import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'garudaStripPrefix',
})
export class StripPrefixPipe implements PipeTransform {
  transform(value?: string): string {
    if (!value) return '';
    return value.replace(/(^.*:\/\/|\/$)/g, '');
  }
}
