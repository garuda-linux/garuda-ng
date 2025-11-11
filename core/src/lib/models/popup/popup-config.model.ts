import { Type } from "@angular/core";

export interface PopupOptions<T = any> {
  /** Whether to show the header or not */
  showHeader?: boolean;

  /** Width of the popup */
  width?: string;

  /** Should the popup be modal */
  modal?: boolean;

  /** Can be dismissed by clicking outside */
  dismissableMask?: boolean;

  /** Show the close button */
  closable?: boolean;

  /** Optional title for the header */
  title?: string;

  noCloseIcon?: boolean;

  /** Optional data to pass to inner component */
  data?: T;
}

export interface PopupConfig<TComponent = any, TData = any> {
    popupEnabled: boolean;
    popupContainer: Type<TComponent>;
    popupContent: PopupOptions<TData>;
}
