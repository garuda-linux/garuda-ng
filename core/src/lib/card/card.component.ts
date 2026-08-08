import { Component, HostBinding, inject, input, ElementRef, Renderer2, AfterViewInit, OnDestroy, output } from '@angular/core';
import { Card } from '@openng/optimus-ui/card';
import { FeatureData } from '../models/feature-detail/feature-detail.model';
import { PopupService } from '../services/popup/popup.service';
import { FeatureDetailComponent } from '../feature-detail/feature-detail.component';

export type RoleType = 'product-showcase' | 'product-showcase-small';

@Component({
  selector: 'garuda-card',
  standalone: true,
  imports: [Card],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    'class': 'garuda-card',
    '[class.garuda-card__product-showcase]': 'cardRole() === "product-showcase"',
  },
})
export class CardComponent implements AfterViewInit, OnDestroy {
  cardRole = input.required<RoleType>();
  link = input<string | undefined>('');
  feature = input<FeatureData>();
  actionFeatures = input<Record<string, FeatureData>>({});
  actionClicked = output<string>();

  private popupService = inject(PopupService);
  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private removeClickListener?: () => void;

  @HostBinding('class.garuda-card__product-showcase')
  get isProductShowcase(): boolean {
    return this.cardRole() === 'product-showcase';
  }

  @HostBinding('class.garuda-card__product-showcase-small')
  get isProductShowcaseSmall(): boolean {
    return this.cardRole() === 'product-showcase-small';
  }

  ngAfterViewInit(): void {
    this.removeClickListener = this.renderer.listen(this.el.nativeElement, 'click', (event: Event) => {
      const target = event.target as HTMLElement;
      const actionElement = target.closest('[garudaCardAction], [data-action]') as HTMLElement | null;
      const action = actionElement?.dataset?.['action'];

      if (action) {
        event.stopPropagation();
        this.openDetail(action);
      }
    });
  }

  ngOnDestroy(): void {
    this.removeClickListener?.();
  }

  openDetail(action: string): void {
    this.actionClicked.emit(action);

    const featureData = this.actionFeatures()?.[action] || this.feature;
    if (!featureData) return;

    this.popupService.open(FeatureDetailComponent, { data: { feature: featureData }, title: featureData?.title, showHeader: false });
  }

  navigate() {
    if (this.link) {
      window.location.href = this.link() ?? '';
    }
  }
}
