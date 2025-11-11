import { Component, OnInit, ViewChild, ViewContainerRef, inject, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'garuda-popup-wrapper',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './pop-dialog-wrapper.html',
  styleUrls: ['./pop-dialog-wrapper.css'],
})
export class PopupWrapperComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  public config = inject(DynamicDialogConfig);
  private ref = inject(DynamicDialogRef);

  ngOnInit(): void {
    const innerComponent = this.config.data?.innerComponent as Type<any>;
    const innerData = this.config.data?.innerData;

    if (!innerComponent) return;

    // 🔹 Standalone components: createComponent with Type<T>
    const componentRef = this.container.createComponent(innerComponent, {
      // provide injector if needed
      injector: this.container.injector,
    });

    // 🔹 Assign input values
    if (innerData) {
      Object.entries(innerData).forEach(([key, value]) => {
        (componentRef.instance as any)[key] = value;
      });
    }

    // Optional: detect changes if inputs assigned manually
    componentRef.changeDetectorRef.detectChanges();
  }

  close(): void {
    this.ref.close();
  }
}
