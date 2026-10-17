import { Component, input } from '@angular/core';

@Component({
  selector: 'garuda-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  readonly title = input<string>();
  readonly subtitle = input<string>();
  readonly subtitleHtml = input<string>();
  readonly level = input<'h1' | 'h2' | 'h3'>('h1');
}
