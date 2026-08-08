import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  CardComponent,
  CardFeatureListConComponent,
  CardFeatureListDirective,
  CardFeatureListProComponent,
  CardThumbnailDirective,
  CardTitleDirective,
  CardActionDirective,
  FeatureData,
  FeatureDetailPopupService,
  FeatureDetailComponent,
  NewsComponent,
  NewsData,
  NewsModel,
} from '@garudalinux/core';
import { Button } from '@openng/optimus-ui/button';
import { PopupService } from '@garudalinux/core';

@Component({
  selector: 'garuda-docs-product-showcase-base-example',
  imports: [
    CardComponent,
    NgOptimizedImage,
    CardThumbnailDirective,
    CardTitleDirective,
    CardFeatureListDirective,
    CardFeatureListProComponent,
    CardFeatureListConComponent,
    CardActionDirective,
    Button,
    NewsComponent,
  ],
  templateUrl: './product-showcase-base-example.component.html',
  styleUrls: ['./product-showcase-base-example.component.scss'],
  providers: [FeatureDetailPopupService],
})
export class ProductShowcaseBaseExampleComponent {
  selectedFeature: FeatureData = {
    title: 'Garuda KDE Edition',
    description: 'A polished, user-friendly KDE experience.',
    screenshots: [
      'https://picsum.photos/536/354',
      'https://picsum.photos/seed/picsum/536/354',
      'https://picsum.photos/536/354',
      'https://picsum.photos/seed/picsum/536/354',
      'https://picsum.photos/536/354',
      'https://picsum.photos/seed/picsum/536/354',
      'https://picsum.photos/536/354',
      'https://picsum.photos/seed/picsum/536/354',
      'https://picsum.photos/536/354',
      'https://picsum.photos/seed/picsum/536/354',
      'https://picsum.photos/536/354',
      'https://picsum.photos/seed/picsum/536/354',
      'https://picsum.photos/536/354',
      'https://picsum.photos/seed/picsum/536/354',
      'https://picsum.photos/536/354',
      'https://picsum.photos/seed/picsum/536/354',
    ],
    packages: [
      'Firefox',
      'LibreOffice',
      'GIMP',
      'Tools',
      'Games',
      'Collage',
      'Firefox',
      'LibreOffice',
      'GIMP',
      'Tools',
      'Games',
      'Collage',
      'Firefox',
      'LibreOffice',
      'GIMP',
      'Tools',
      'Games',
      'Collage',
    ],
    moreInfo:
      "<b>What is Lorem Ipsum?</b><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/><b>Why do we use it?</b><br/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br/><b>Where does it come from?</b><br/>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    moreInfoText: 'More Information',
  };
  selectedGarudaLinux: FeatureData = {
    title: 'Garuda Linux',
    description: 'A polished, user-friendly KDE experience.',
    screenshots: [
      'https://picsum.photos/536/354',
      'https://picsum.photos/seed/picsum/536/354',
      'https://picsum.photos/536/354',
      'https://picsum.photos/seed/picsum/536/354',
      'https://picsum.photos/536/354',
      'https://picsum.photos/seed/picsum/536/354',
      'https://picsum.photos/536/354',
    ],
    packages: ['Firefox', 'LibreOffice', 'GIMP'],
    moreInfo:
      "<b>What is Lorem Ipsum?</b><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/><b>Why do we use it?</b><br/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br/><b>Where does it come from?</b><br/>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    moreInfoText: 'More Information',
  };

  newsData: NewsData[] = [
    {
      newsId: 1,
      newsTime: 'Nov 3, 2025',
      newsTitle: 'ISO Release: 251103',
      newsLink: '',
    },
    {
      newsId: 2,
      newsTime: 'Nov 2, 2025',
      newsTitle: 'Chaotic-AUR now has a trusted maintainers system',
      newsLink: '',
    },
  ];

  news: NewsModel = {
    newsData: this.newsData,
  };

  actionfeatures: Record<string, FeatureData> = {
    learnMore: this.selectedGarudaLinux,
    download: this.selectedFeature,
    garudaLinux: this.selectedGarudaLinux,
  };
  popupService: any;
  onAction(action: string) {
    console.log('Action clicked:', action);
  }

  private popservice = inject(PopupService);
}
