import { Component } from '@angular/core';
import {
  CardComponent,
  SmallCardModel,
  NewsComponent,
  NewsData,
  NewsModel,
  SearchComponent,
  SearchModel,
  JokesComponent,
  JokesModel,
} from '@garudalinux/core';

@Component({
  selector: 'garuda-docs-startv2.component',
  imports: [NewsComponent, CardComponent, SearchComponent, JokesComponent],
  templateUrl: './startv2.component.html',
  styleUrl: './startv2.component.scss',
})
export class Startv2Component {
  searchConfig: SearchModel = {
    searchTitle: 'Search',
    searchEngineUrl: 'https://priv.au/search?q=',
    placeholder: 'Search with SearxNG (priv.au)',
  };

  jokes: JokesModel = {
    jokes: ['Hi, I am Garuda Linux', 'System got hanged', 'You will die now', 'Oh its dead'],
  };

  products: SmallCardModel[] = [
    {
      cardRole: 'product-showcase-small',
      cardTitle: 'SearxNG',
      cardImageUrl: 'https://start.garudalinux.org/assets/pictures/searxng.svg',
      link: '',
    },
    {
      cardRole: 'product-showcase-small',
      cardTitle: 'Vaultwarden',
      cardImageUrl: 'https://start.garudalinux.org/assets/pictures/vaultwarden.svg',
      link: '',
    },
    {
      cardRole: 'product-showcase-small',
      cardTitle: 'Redlib',
      cardImageUrl: 'https://start.garudalinux.org/assets/pictures/redlib.svg',
      link: '',
    },
    {
      cardRole: 'product-showcase-small',
      cardTitle: 'Mastodon',
      cardImageUrl: 'https://start.garudalinux.org/assets/pictures/mastodon.svg',
      link: '',
    },
    {
      cardRole: 'product-showcase-small',
      cardTitle: 'PrivateBin',
      cardImageUrl: '/privatebin.png',
      link: '',
    },
    {
      cardRole: 'product-showcase-small',
      cardTitle: 'Whoogle',
      cardImageUrl: 'https://start.garudalinux.org/assets/pictures/whoogle.svg',
      link: '',
    },
    {
      cardRole: 'product-showcase-small',
      cardTitle: 'LibreY',
      cardImageUrl: '/librey.png',
      link: '',
    },
    {
      cardRole: 'product-showcase-small',
      cardTitle: 'Lingva',
      cardImageUrl: '/lingva.png',
      link: '',
    },
    {
      cardRole: 'product-showcase-small',
      cardTitle: 'Downloads',
      cardImageUrl: 'https://start.garudalinux.org/assets/pictures/iso.webp',
      link: '',
    },
    {
      cardRole: 'product-showcase-small',
      cardTitle: 'Statuspage',
      cardImageUrl: 'https://start.garudalinux.org/assets/pictures/uptime-kuma.svg',
      link: '',
    },
  ];

  socials: SmallCardModel[] = [
    {
      cardRole: 'product-showcase-small',
      cardTitle: 'Forum',
      cardImageUrl: '/forum.png',
      link: '',
    },
    {
      cardRole: 'product-showcase-small',
      cardTitle: 'Telegram',
      cardImageUrl: 'https://start.garudalinux.org/assets/pictures/telegram.svg',
      link: '',
    },
    {
      cardRole: 'product-showcase-small',
      cardTitle: 'Discord',
      cardImageUrl: 'https://start.garudalinux.org/assets/pictures/discord.svg',
      link: '',
    },
    {
      cardRole: 'product-showcase-small',
      cardTitle: 'Blusky',
      cardImageUrl: 'https://start.garudalinux.org/assets/pictures/bluesky.svg',
      link: '',
    },
  ];

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
}
