import { Directive, OnInit, inject, input } from '@angular/core';
import { FeatureCarouselSettings } from '@garudalinux/core/models';
import { Carousel } from '@openng/optimus-ui/carousel';

@Directive({
  selector: '[garudaFeatureDetailCarousel]',
  standalone: true,
})
export class FeatureDetailCarousel implements OnInit {
  private carousel = inject(Carousel);

  readonly featureScreenshots = input<string[]>([]);
  readonly carouselSettings = input<FeatureCarouselSettings>();

  ngOnInit(): void {
    if (this.carouselSettings()) {
      this.carousel.numVisible = 1;
      this.carousel.numScroll = 1;
      this.carousel.circular = !!this.carouselSettings()?.circularSlide;
      this.carousel.showIndicators = true;
      this.carousel.showNavigators = true;
      this.carousel.autoplayInterval = this.carouselSettings()?.autoPlayCarousel
        ? (this.carouselSettings()?.autoPlayIntervalDuration ?? 0)
        : 0;
    }

    this.carousel.value = this.featureScreenshots() || [];
  }
}
