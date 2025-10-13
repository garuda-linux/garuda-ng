import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, input, OnInit, signal } from '@angular/core';
import { AppService } from '../app.service';
import { EmojiPipe } from '../emoji-pipe/emoji.pipe';
import { BlogData } from './interfaces';
import { Timeline } from 'primeng/timeline';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { ScrollPanel } from 'primeng/scrollpanel';
import { provideMarkdown } from 'ngx-markdown';
import { Chip } from 'primeng/chip';
import { Avatar } from 'primeng/avatar';
import { TranslocoDirective } from '@jsverse/transloco';
import { openLinkInNewTab } from '../functions';
import { Tag } from 'primeng/tag';
import { SafeHtmlPipe } from 'primeng/menu';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, Timeline, Card, EmojiPipe, Button, ScrollPanel, Chip, Avatar, TranslocoDirective, Tag, SafeHtmlPipe, Skeleton],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  providers: [EmojiPipe, provideMarkdown()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  loading = signal<boolean>(true);
  activeTopic = signal<BlogData>({} as BlogData);

  blog = input<boolean>(false);

  appService = inject(AppService);
  http = inject(HttpClient);

  protected readonly openLinkInNewTab = openLinkInNewTab;
  private readonly cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    void this.getFeed();
  }

  async getFeed() {
    if (!this.appService.blogDataReady()) {
      this.appService.getDiscourseNews();
    }

    while (!this.appService.blogDataReady()) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    if (!this.blog()) {
      this.activeTopic.set(this.appService.blogData()[0]);
    }
    this.loading.set(false);

    this.cdr.markForCheck();
  }

  typedTopic(topic: unknown): BlogData {
    return <BlogData>topic;
  }
}
