import { Directive, ElementRef, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Directive({
  selector: '[garudaFeatureDetailMoreinformation]',
  standalone: true,
})
export class FeatureDetailMoreinformation implements OnChanges {
  private el = inject(ElementRef<HTMLElement>);
  private sanitizer = inject(DomSanitizer);

  @Input('garudaFeatureDetailMoreinformation') htmlContent?: string;
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.htmlContent) return;
    if ('htmlContent' in changes && this.htmlContent) {
      // Sanitize HTML as string and assign
      const temp = document.createElement('div');
      temp.innerHTML = this.htmlContent;
      this.el.nativeElement.innerHTML = temp.innerHTML;
    }
  }
}
