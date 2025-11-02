import {
  Component,
  computed,
  EventEmitter,
  HostBinding,
  inject,
  Input,
  input,
  Output,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'primeng/card';
import { FeatureData } from '../models/feature-detail.model';
import { FeatureDetailPopupService } from '../feature-detail/services/feature-detail-popup-service';

export type RoleType = 'product-showcase';

@Component({
  selector: 'garuda-card',
  imports: [CommonModule, Card],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  host: {
    class: 'garuda-card',
  },
})
export class CardComponent implements AfterViewInit, OnDestroy {
  cardRole = input.required<RoleType>();
  @Input() feature?: FeatureData;
  @Input() actionFeatures?: Record<string, FeatureData> = {};
  @Output() actionClicked: EventEmitter<string> = new EventEmitter<string>();

  private featureDetailPopupService = inject(FeatureDetailPopupService);
  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private removeClickListener?: () => void;

  @HostBinding('class.garuda-card__product-showcase')
  private productShowcaseClass = computed(() => this.cardRole() === 'product-showcase');

  ngAfterViewInit(): void {
    //data-action
    this.removeClickListener = this.renderer.listen(
      this.el.nativeElement,
      'click',
      (event: Event) => {
        const target = event.target as HTMLElement;
        const actionElement = target.closest('[garudaCardAction], [data-action]') as HTMLElement | null;
        const action = actionElement?.dataset?.['action'];
        if (action) {
          event.stopPropagation();
          this.openDetail(action);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.removeClickListener?.();
  }

  openDetail(action: string): void {
    this.actionClicked.emit(action);
    const featureData = this.actionFeatures?.[action] || this.feature;
    if (featureData) {
      this.featureDetailPopupService.open(featureData);
    }
  }
}
