import { Pipe, PipeTransform } from '@angular/core';

import { formatDuration } from './format';

@Pipe({
  name: 'garudaDuration',
})
export class DurationPipe implements PipeTransform {
  transform(duration: number | undefined): string {
    if (!duration) {
      return 'n/a';
    }

    // duration is in minutes
    return formatDuration(Math.round(duration * 60));
  }
}
