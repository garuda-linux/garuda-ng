import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Card } from 'primeng/card';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { FooterLink } from './types';

@Component({
  selector: 'garuda-footer',
  imports: [Card, RouterLink, TranslocoDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  copyrightHolder = input.required();

  footerLinks: FooterLink[] = [{ label: 'footer.home', url: '/' }];
}
