import { Directive, input, TemplateRef, ViewContainerRef, inject, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[garudaFeatureDetailPackages]',
  standalone: true,
})
export class FeatureDetailPackages implements OnChanges {
  private templateRef = inject(TemplateRef<any>);
  private viewContainer = inject(ViewContainerRef);

  packages = input<string[] | null>([], {
    alias: 'garudaFeatureDetailPackages',
  });

  ngOnChanges(changes: SimpleChanges): void {
    this.viewContainer.clear();
    const packages = this.packages() ?? [];
    if (packages && packages?.length > 0) {
      for (const pkg of packages) {
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: pkg });
      }
    }
  }
}
