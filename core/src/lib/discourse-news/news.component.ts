import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, linkedSignal } from '@angular/core';
import { EmojiPipe } from '../pipes';
import { BlogData } from './interfaces';
import { Timeline } from 'primeng/timeline';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { ScrollPanel } from 'primeng/scrollpanel';
import { provideMarkdown } from 'ngx-markdown';
import { Chip } from 'primeng/chip';
import { Avatar } from 'primeng/avatar';
import { TranslocoDirective } from '@jsverse/transloco';
import { openLinkInNewTab } from '../../util/urlHelpers';
import { Tag } from 'primeng/tag';
import { SafeHtmlPipe } from 'primeng/menu';
import { Skeleton } from 'primeng/skeleton';
import { AbstractDiscourseService } from './a-discourse.service';

@Component({
  selector: 'garuda-news',
  standalone: true,
  imports: [CommonModule, Timeline, Card, EmojiPipe, Button, ScrollPanel, Chip, Avatar, TranslocoDirective, Tag, SafeHtmlPipe, Skeleton],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  providers: [EmojiPipe, provideMarkdown()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {
  private readonly discourseService = inject(AbstractDiscourseService);
  protected readonly blogData = this.discourseService.getDiscourseNews();
  protected readonly selectedTopic = linkedSignal<BlogData | null>(() => (this.blogData.hasValue() ? this.blogData.value()[0] : null));

  protected readonly openLinkInNewTab = openLinkInNewTab;

  typedTopic(topic: unknown): BlogData {
    return <BlogData>topic;
  }
}
