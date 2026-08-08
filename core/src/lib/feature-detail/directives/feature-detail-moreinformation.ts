import { Directive, ElementRef, OnChanges, SimpleChanges, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Directive({
  selector: '[garudaFeatureDetailMoreinformation]',
  standalone: true,
})
export class FeatureDetailMoreinformation implements OnChanges {
  private el = inject(ElementRef<HTMLElement>);
  private sanitizer = inject(DomSanitizer);

  htmlContent = input<string | undefined>(undefined, {
    alias: 'garudaFeatureDetailMoreinformation',
  });
  ngOnChanges(changes: SimpleChanges): void {
    const content = this.htmlContent();
    if (!content) {
      this.el.nativeElement.innerHTML = '';
      return;
    }
    const safeHtml: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(content);
    this.el.nativeElement.innerHTML = this.sanitizer.sanitize(1, safeHtml) ?? '';
  }
}
