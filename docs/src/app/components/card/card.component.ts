import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from 'ngx-highlightjs';
import { Tree } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { ProductShowcaseBaseExampleComponent } from './examples/product-showcase-base-example/product-showcase-base-example.component';
import { requestExampleSource } from '../../../util/request-example';
import { CodeExampleComponent } from '../../../util/code-example/code-example.component';

@Component({
  selector: 'garuda-docs-card',
  imports: [CommonModule, Highlight, Tree, ProductShowcaseBaseExampleComponent, CodeExampleComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  importLine = "import { CardComponent } from '@garudalinux/core';";

  productShowcaseBaseCodeHTML = requestExampleSource(
    'examples/card/product-showcase-base-example/product-showcase-base-example.component.html',
  );
  productShowcaseBaseCodeTS = requestExampleSource(
    'examples/card/product-showcase-base-example/product-showcase-base-example.component.ts',
  );
  productShowcaseBaseCodeSCSS = requestExampleSource(
    'examples/card/product-showcase-base-example/product-showcase-base-example.component.scss',
  );

  domLayoutProductShowcase: TreeNode[] = [
    {
      label: 'garuda-card',
      children: [
        {
          label: '[garudaCardThumbnail]',
        },
        {
          label: '[garudaCardTitle]',
        },
        {
          label: 'ul[garudaCardFeatureList]',
          children: [
            {
              label: 'li[garuda-card-feature-list-pro]',
            },
            {
              label: 'li[garuda-card-feature-list-con]',
            },
          ],
        },
        {
          label: '[garudaCardAction]',
        },
        {
          label: '* (content)',
        },
      ],
    },
  ];
}
