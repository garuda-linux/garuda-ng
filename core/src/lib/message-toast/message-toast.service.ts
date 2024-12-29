import { inject, Injectable } from '@angular/core';
import { MessageService, ToastMessageOptions } from 'primeng/api';

export type MessageToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'center';

export type ToastMessageAdditionalOptions = Omit<ToastMessageOptions, 'severity' | 'summary' | 'detail' | 'key'>;

@Injectable({
  providedIn: 'root',
})
export class MessageToastService {
  private readonly pMessageService = inject(MessageService);

  public info(
    title: string,
    details: string,
    position: MessageToastPosition = 'top-right',
    additionalOptions: ToastMessageAdditionalOptions = {},
  ) {
    this.showToast('info', title, details, position, additionalOptions);
  }

  public success(
    title: string,
    details: string,
    position: MessageToastPosition = 'top-right',
    additionalOptions: ToastMessageAdditionalOptions = {},
  ) {
    this.showToast('success', title, details, position, additionalOptions);
  }

  public warn(
    title: string,
    details: string,
    position: MessageToastPosition = 'top-right',
    additionalOptions: ToastMessageAdditionalOptions = {},
  ) {
    this.showToast('warn', title, details, position, additionalOptions);
  }

  public error(
    title: string,
    details: string,
    position: MessageToastPosition = 'top-right',
    additionalOptions: ToastMessageAdditionalOptions = {},
  ) {
    this.showToast('error', title, details, position, additionalOptions);
  }

  public contrast(
    title: string,
    details: string,
    position: MessageToastPosition = 'top-right',
    additionalOptions: ToastMessageAdditionalOptions = {},
  ) {
    this.showToast('contrast', title, details, position, additionalOptions);
  }

  public secondary(
    title: string,
    details: string,
    position: MessageToastPosition = 'top-right',
    additionalOptions: ToastMessageAdditionalOptions = {},
  ) {
    this.showToast('secondary', title, details, position, additionalOptions);
  }

  private showToast(
    severity: string,
    title: string,
    details: string,
    position: MessageToastPosition,
    additionalOptions: ToastMessageAdditionalOptions = {},
  ) {
    this.pMessageService.add({
      severity: severity,
      summary: title,
      detail: details,
      key: position,
      ...additionalOptions,
    });
  }
}
