import { Directive, ElementRef, Input, OnInit, Renderer2, inject, input } from '@angular/core';
import { FeatureCarouselSettings } from '../../models/feature-detail/feature-detail.model';
import { Carousel } from 'primeng/carousel';

@Directive({
  selector: '[garudaFeatureDetailCarousel]',
  standalone: true,
})
export class FeatureDetailCarousel implements OnInit {
  private carousel = inject(Carousel);

  featureScreenshots = input<string[]>([]);
  carouselSettings = input<FeatureCarouselSettings>();

  ngOnInit(): void {
    if (this.carouselSettings()) {
      this.carousel.numVisible = 1;
      this.carousel.numScroll = 1;
      this.carousel.circular = !!this.carouselSettings()?.circularSlide;
      this.carousel.showIndicators = true;
      this.carousel.showNavigators = true;
      this.carousel.autoplayInterval = this.carouselSettings()?.autoPlayCarousel ? (this.carouselSettings()?.autoPlayIntervalDuration ?? 0) : 0;
    }

    this.carousel.value = this.featureScreenshots() || [];
  }
}
