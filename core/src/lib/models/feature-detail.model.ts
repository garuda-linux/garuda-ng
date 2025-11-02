export interface FeatureData {
  title: string;
  description: string;
  screenshots: string[];
  packages?: string[];
  moreInfo?: string;
  moreInfoText?: string;
}

export interface FeatureCarouselSettings {
  autoPlayCarousel?: boolean;
  autoPlayIntervalDuration?: number;
  circularSlide?: boolean;
}
