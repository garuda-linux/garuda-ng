import { Component, ElementRef, inject, input, model, NO_ERRORS_SCHEMA, OnInit, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ListboxModule } from '@openng/optimus-ui/listbox';
import { CarouselModule } from '@openng/optimus-ui/carousel';
import { CardModule } from '@openng/optimus-ui/card';
import { ButtonModule } from '@openng/optimus-ui/button';
import { AccordionModule } from '@openng/optimus-ui/accordion';
import { DynamicDialogConfig, DynamicDialogRef } from '@openng/optimus-ui/dynamicdialog';
import { FeatureData, FeatureCarouselSettings } from '../models/feature-detail/feature-detail.model';
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
  carouselSettings = input<FeatureCarouselSettings>({
    autoPlayCarousel: true,
    autoPlayIntervalDuration: 5000,
    circularSlide: true,
  });
  feature = model<FeatureData>({
    screenshots: [],
    packages: [],
    moreInfo: '',
    title: '',
    description: '',
    moreInfoText: '',
  });

  selectedPackage = signal('');
  activePanel = signal('');
  private el = inject(ElementRef);
  public ref = inject(DynamicDialogRef);
  public config = inject<DynamicDialogConfig<{ feature: FeatureData }>>(DynamicDialogConfig);

  ngOnInit() {
    this.feature.set(this.config.data?.feature ?? this.feature());
    //console.log(this.feature)
    const firstPackage = this.feature()?.packages?.[0];
    if (firstPackage) {
      this.selectedPackage.set(firstPackage);
    }

    if (this.carouselSettings()?.autoPlayCarousel) {
      this.carouselSettings().circularSlide = true;
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
