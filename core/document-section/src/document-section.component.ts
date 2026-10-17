import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

/** Anchored section of a long document (docs, policies): a clickable heading and
 * a projected body. The host carries the `sectionId` as DOM id so fragments
 * (`/page#sectionId`) scroll to it; `scroll-margin-top` keeps the heading below
 * fixed headers. Consumers react to `sectionSelected` to update the URL fragment. */
@Component({
  selector: 'garuda-document-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './document-section.component.html',
  styleUrl: './document-section.component.scss',
  host: {
    'class': 'garuda-document-section',
    '[attr.id]': 'sectionId()',
  },
})
export class DocumentSectionComponent {
  readonly sectionId = input.required<string>();
  readonly heading = input.required<string>();
  readonly sectionSelected = output<string>();

  select(): void {
    this.sectionSelected.emit(this.sectionId());
  }
}
