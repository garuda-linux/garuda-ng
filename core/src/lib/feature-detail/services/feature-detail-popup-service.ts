import { inject, Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FeatureDetailComponent } from '../feature-detail.component';
import { FeatureData } from '../../models/feature-detail.model';

@Injectable({
  providedIn: 'root',
})
export class FeatureDetailPopupService {
  private ref?: DynamicDialogRef | null | undefined;

  private dialogService = inject(DialogService);

  async open(feature: FeatureData) {
    this.ref = this.dialogService.open(FeatureDetailComponent, {
      //   header: feature.title,
      showHeader: false,
      width: '70vw',
      data: { feature },
      styleClass: 'feature-detail-dialog',
      modal: true,
      closable: true,
      dismissableMask: true,
    });
  }

  close() {
    this.ref?.close();
  }
}
