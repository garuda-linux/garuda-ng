import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarToggleService {
  hidden = signal<boolean>(true);
  arrowDisplayStyle = computed(() => (this.hidden() ? 'none' : 'block'));

  toggled = signal<boolean>(false);
  icon = computed<string>(() => (this.toggled() ? 'pi-angle-left' : 'pi-angle-right'));
  displayStyle = computed(() => (this.toggled() ? 'block' : 'none'));

  toggle() {
    this.toggled.set(!this.toggled());
  }
}
