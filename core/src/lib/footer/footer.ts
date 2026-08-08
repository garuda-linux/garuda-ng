import { Component, HostListener, inject, input, OnInit, signal } from '@angular/core';
import { FooterModel } from '../models';
import { CommonModule } from '@angular/common';
import { PopupService } from '../services/popup/popup.service';

@Component({
  selector: 'garuda-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  footerItems = input<FooterModel[]>([]);
  relativePosition = input<boolean>(false);
  totalItems = signal<number>(0);
  private popupService = inject(PopupService);
  dropdownOpen: any;
  ismobile = signal(window.innerWidth < 960);

  ngOnInit() {
    this.totalItems.set(this.footerItems()?.length ?? 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const mobile = event.target.innerWidth < 960;
    if (!mobile && this.ismobile()) {
      // switched from mobile → desktop
      this.dropdownOpen.set(false); // reset mobile menu
    }
    this.ismobile.set(mobile);
  }

  openPopup(itemId: any) {
    const footerItem: any = this.footerItems()?.filter((_) => _.itemId === itemId)?.[0];
    //console.log(footerItem)
    this.popupService.open(footerItem?.popupConfig?.popupContainer, {
      data: { feature: footerItem?.popupConfig?.popupContent?.data },
      title: footerItem?.popupConfig?.popupContent?.data?.title,
    });
  }
}
