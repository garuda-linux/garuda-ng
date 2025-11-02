import { Directive, Input, TemplateRef, ViewContainerRef, inject, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[garudaFeatureDetailPackages]',
  standalone: true,
})
export class FeatureDetailPackages implements OnChanges {
  private templateRef = inject(TemplateRef<any>);
  private viewContainer = inject(ViewContainerRef);

  @Input('garudaFeatureDetailPackages') packages: string[] | null = [];
  ngOnChanges(changes: SimpleChanges): void {
    this.viewContainer.clear();
    if (this.packages && this.packages.length > 0) {
      for (const pkg of this.packages) {
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: pkg });
      }
    }
  }
}
