import { Component, input } from '@angular/core';
import { NewsModel } from '../models';

@Component({
  selector: 'garuda-news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  standalone: true,
})
export class NewsComponent {
  news = input<NewsModel>();
}
