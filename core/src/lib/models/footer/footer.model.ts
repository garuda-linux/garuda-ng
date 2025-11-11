import { PopupConfig } from "../popup/popup-config.model";

export interface FooterModel {
    itemId: number,
    itemName: string,
    routerLink?: string,
    popupConfig?: PopupConfig
};