import { Component, signal } from '@angular/core';
import { DocumentSectionComponent } from '@garudalinux/core/document-section';
import { Button } from '@openng/optimus-ui/button';

interface DemoSection {
  id: string;
  heading: string;
  body: string;
}

const SECTIONS: DemoSection[] = [
  {
    id: 'introduction',
    heading: 'Introduction',
    body: 'Every section carries its id as a DOM anchor. URL fragments like /components/document-section#details scroll straight to the section, and the heading stays clear of fixed headers thanks to scroll-margin.',
  },
  {
    id: 'details',
    heading: 'Details',
    body: 'Clicking a heading emits sectionSelected, so the page can update the URL fragment. The buttons above do exactly that.',
  },
  {
    id: 'conclusion',
    heading: 'Conclusion',
    body: 'The projected body gets the shared document typography: justified text, automatic hyphenation and comfortable line height.',
  },
];

/** Live demo: scrollable document with anchored, clickable sections. */
@Component({
  selector: 'garuda-docs-document-section-example',
  imports: [Button, DocumentSectionComponent],
  template: `
    <nav class="example-toc">
      @for (section of sections; track section.id) {
        <p-button [label]="section.heading" (onClick)="scrollTo(section.id)" />
      }
    </nav>
    <div class="example-scroll-box">
      @for (section of sections; track section.id) {
        <garuda-document-section [sectionId]="section.id" [heading]="section.heading" (sectionSelected)="scrollTo($event)">
          <p>{{ section.body }}</p>
        </garuda-document-section>
      }
    </div>
    <p class="example-state">
      Last selected section: <strong>{{ selectedSection() }}</strong>
    </p>
  `,
  styles: `
    .example-toc {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }
    .example-scroll-box {
      border: 1px dashed var(--p-panel-border-color);
      border-radius: 8px;
      height: 14rem;
      overflow-y: auto;
      padding: 1rem;
      scroll-behavior: smooth;
    }
    .example-state {
      margin-top: 0.5rem;
      font-size: 0.875rem;
    }
  `,
})
export class DocumentSectionExampleComponent {
  readonly sections = SECTIONS;
  readonly selectedSection = signal<string>('none');

  scrollTo(id: string): void {
    this.selectedSection.set(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
