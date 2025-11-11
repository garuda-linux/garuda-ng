import { Component, ElementRef, inject, Input, NO_ERRORS_SCHEMA, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FeatureData, FeatureCarouselSettings } from '../models/feature-detail/feature-detail.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FeatureDetailCarousel } from './directives/feature-detail-carousel';
import { FeatureDetailPackages } from './directives/feature-detail-packages';
import { FeatureDetailMoreinformation } from './directives/feature-detail-moreinformation';

@Component({
  selector: 'garuda-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.css'],
  standalone: true,
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    CarouselModule,
    CardModule,
    ListboxModule,
    FormsModule,
    ButtonModule,
    AccordionModule,
    FeatureDetailCarousel,
    FeatureDetailPackages,
    FeatureDetailMoreinformation,
  ],
})
export class FeatureDetailComponent implements OnInit {
  @Input() carouselSettings?: FeatureCarouselSettings = {
    autoPlayCarousel: true,
    autoPlayIntervalDuration: 5000,
    circularSlide: true,
  };
  @Input() feature?: FeatureData = {
    screenshots: [],
    packages: [],
    moreInfo: '',
    title: '',
    description: '',
    moreInfoText: '',
  };

  selectedPackage = signal('');
  activePanel = signal('');
  private el = inject(ElementRef);
  public ref = inject(DynamicDialogRef);
  public config = inject<DynamicDialogConfig<{ feature: FeatureData }>>(DynamicDialogConfig);
  private sanitizer = inject(DomSanitizer);

  ngOnInit() {
    this.feature = this.config.data?.feature ?? this.feature;
    const firstPackage = this.feature?.packages?.[0];
    if (firstPackage) {
      this.selectedPackage.set(firstPackage);
    }

    if (this.carouselSettings?.autoPlayCarousel) {
      this.carouselSettings.circularSlide = true;
    }

    //this.activePanel.set('0');
  }

  close() {
    this.ref.close();
  }

  expandcollapse(isOpen: boolean) {
    this.activePanel.set(isOpen ? '0' : '');
  }
}
