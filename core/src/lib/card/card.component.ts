import { Component, computed, HostBinding, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'primeng/card';

export type RoleType = 'product-showcase';

@Component({
  selector: 'garuda-card',
  imports: [CommonModule, Card],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  host: {
    class: 'garuda-card',
  },
})
export class CardComponent {
  cardRole = input.required<RoleType>();

  @HostBinding('class.garuda-card__product-showcase')
  private productShowcaseClass = computed(() => this.cardRole() === 'product-showcase');
}
