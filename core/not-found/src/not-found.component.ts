import { Component } from '@angular/core';

import { TitleComponent } from '@garudalinux/core/title';

@Component({
  selector: 'garuda-not-found',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <div class="flex h-dvh items-start justify-center">
      <garuda-title title="404" subtitle="You found a black hole! 👾" />
    </div>
  `,
})
export class NotFoundComponent {}
