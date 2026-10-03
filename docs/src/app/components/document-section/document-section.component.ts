import { Component } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

import { CodeExampleComponent } from '../../../util/code-example/code-example.component';
import { DocumentSectionExampleComponent } from './document-section-example.component';

@Component({
  selector: 'garuda-docs-document-section',
  imports: [Highlight, CodeExampleComponent, DocumentSectionExampleComponent],
  templateUrl: './document-section.component.html',
  styleUrl: './document-section.component.scss',
})
export class DocumentSectionComponentPage {
  importLine = "import { DocumentSectionComponent } from '@garudalinux/core';";

  html = `<garuda-document-section
  sectionId="introduction"
  heading="Introduction"
  (sectionSelected)="scrollTo($event)"
>
  <p>Section body.</p>
</garuda-document-section>`;

  ts = `import { Component } from '@angular/core';
import { DocumentSectionComponent } from '@garudalinux/core/document-section';
import { Router } from '@angular/router';

@Component({
  imports: [DocumentSectionComponent],
  templateUrl: './policy.component.html',
})
export class PolicyComponent {
  constructor(private readonly router: Router) {}

  scrollTo(id: string): void {
    void this.router.navigate([], { fragment: id });
  }
}`;
}
