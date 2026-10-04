import { Component, input } from '@angular/core';
import { NewsModel } from '@garudalinux/core/models';

@Component({
  selector: 'garuda-news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  standalone: true,
})
export class NewsComponent {
  readonly news = input<NewsModel>();
}
