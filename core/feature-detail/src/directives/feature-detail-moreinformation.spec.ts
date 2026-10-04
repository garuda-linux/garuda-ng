import { TestBed } from '@angular/core/testing';
import { FeatureDetailMoreinformation } from './feature-detail-moreinformation';
import { ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

describe('FeatureDetailMoreinformation', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useValue: new ElementRef(document.createElement('div')) },
        { provide: DomSanitizer, useValue: { bypassSecurityTrustHtml: (v: string) => v } },
      ],
    });
    const directive = TestBed.runInInjectionContext(() => new FeatureDetailMoreinformation());
    expect(directive).toBeTruthy();
  });
});
