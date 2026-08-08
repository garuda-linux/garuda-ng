import { TestBed } from '@angular/core/testing';
import { FeatureDetailCarousel } from './feature-detail-carousel';
import { Carousel } from '@openng/optimus-ui/carousel';

describe('FeatureDetailCarousel', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: Carousel, useValue: {} }],
    });
    const directive = TestBed.runInInjectionContext(() => new FeatureDetailCarousel());
    expect(directive).toBeTruthy();
  });
});
