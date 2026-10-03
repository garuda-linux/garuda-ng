import { TestBed } from '@angular/core/testing';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureDetailPackages } from './feature-detail-packages';

describe('FeatureDetailPackages', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TemplateRef, useValue: {} },
        { provide: ViewContainerRef, useValue: { clear: () => undefined, createEmbeddedView: () => undefined } },
      ],
    });
    const directive = TestBed.runInInjectionContext(() => new FeatureDetailPackages());
    expect(directive).toBeTruthy();
  });
});
