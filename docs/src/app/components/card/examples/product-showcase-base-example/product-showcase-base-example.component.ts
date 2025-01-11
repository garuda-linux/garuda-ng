import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  CardComponent,
  CardFeatureListConComponent,
  CardFeatureListDirective,
  CardFeatureListProComponent,
  CardThumbnailDirective,
  CardTitleDirective,
  CardActionDirective,
} from '@garudalinux/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'garuda-docs-product-showcase-base-example',
  imports: [
    CommonModule,
    CardComponent,
    NgOptimizedImage,
    CardThumbnailDirective,
    CardTitleDirective,
    CardFeatureListDirective,
    CardFeatureListProComponent,
    CardFeatureListConComponent,
    CardActionDirective,
    Button,
  ],
  templateUrl: './product-showcase-base-example.component.html',
  styleUrl: './product-showcase-base-example.component.scss',
})
export class ProductShowcaseBaseExampleComponent {}
