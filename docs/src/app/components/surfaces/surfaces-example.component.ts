import { Component } from '@angular/core';
import { Card } from '@openng/optimus-ui/card';

@Component({
  selector: 'garuda-docs-surfaces-example',
  imports: [Card],
  template: `
    <div class="example-grid">
      <div class="garuda-surface example-box">.garuda-surface</div>
      <p-card class="example-box">p-card</p-card>
      <p-card class="example-box">p-card</p-card>
      <div class="garuda-surface example-box">.garuda-surface</div>
    </div>
  `,
  styles: `
    .example-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
      gap: 1rem;
    }
    .example-box {
      display: grid;
      place-items: center;
      height: 8rem;
    }
  `,
})
export class SurfacesExampleComponent {}
