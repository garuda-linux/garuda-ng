import { Component, AfterViewInit, Type, inject, viewChild, ViewContainerRef } from '@angular/core';

import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'garuda-popup-wrapper',
  standalone: true,
  imports: [CardModule],
  templateUrl: './pop-dialog-wrapper.html',
  styleUrls: ['./pop-dialog-wrapper.css'],
})
export class PopupWrapperComponent implements AfterViewInit {
  container = viewChild('container', { read: ViewContainerRef });

  public config = inject(DynamicDialogConfig);
  private ref = inject(DynamicDialogRef);

  ngAfterViewInit(): void {
    const containerRef = this.container();
    if (!containerRef) {
      console.error('Container ViewChild not found!');
      return;
    }

    const innerComponent = this.config.data?.innerComponent as Type<any>;
    const innerData = this.config.data?.innerData;

    if (!innerComponent) return;

    const componentRef = containerRef.createComponent(innerComponent, {
      injector: containerRef.injector,
    });

    if (innerData) {
      Object.entries(innerData).forEach(([key, value]) => {
        const instance: any = componentRef.instance;
        const target = instance[key];
        if (target && typeof target === 'function' && 'set' in target) {
          target.set(value);
        } else {
          instance[key] = value;
        }
      });
    }

    componentRef.changeDetectorRef.detectChanges();
  }

  close(): void {
    this.ref.close();
  }
}
