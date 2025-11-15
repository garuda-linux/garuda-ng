import { Injectable, Type, inject } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PopupWrapperComponent } from '../../pop-dialog-wrapper/pop-dialog-wrapper';
import { PopupOptions } from '../../models/popup/popup-config.model';

@Injectable({ providedIn: 'root' })
export class PopupService {
  private dialogService = inject(DialogService);
  private ref: DynamicDialogRef<any> | null = null;

  open<TComponent, TData = any>(component: Type<TComponent>, options?: PopupOptions<TData>): DynamicDialogRef<any> {
    //Default setup
    const defaults: Required<PopupOptions<TData>> = {
        showHeader: false,
        width: '70vw',
        modal: true,
        dismissableMask: true,
        closable: true,
        title: '',
        noCloseIcon: false,
        data: {} as TData,
    };
    const finalOptions: Required<PopupOptions<TData>> = {...defaults, ...options};

    console.log(finalOptions.data)

    this.ref = this.dialogService.open(PopupWrapperComponent, {
      data: { innerComponent: component, innerData: finalOptions?.data, title: finalOptions?.title, noCloseIcon: finalOptions?.noCloseIcon, },
      showHeader: finalOptions?.showHeader,
      width: finalOptions?.width,
      modal: finalOptions?.modal,
      dismissableMask: finalOptions?.dismissableMask,
      closable: finalOptions?.closable,
    });

    return this.ref as DynamicDialogRef<any>; // ✅ cast ensures TS is happy
  }

  close(): void {
    this.ref?.close();
    this.ref = null;
  }
}
