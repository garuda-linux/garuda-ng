import { Component, input } from '@angular/core';
import { NewsModel } from '../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'garuda-news',
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  standalone: true,
})
export class NewsComponent {
  news = input<NewsModel>();
}
