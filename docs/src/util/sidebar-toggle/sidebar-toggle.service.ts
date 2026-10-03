import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarToggleService {
  readonly hidden = signal<boolean>(true);
  readonly arrowDisplayStyle = computed(() => (this.hidden() ? 'none' : 'block'));

  readonly toggled = signal<boolean>(false);
  readonly icon = computed<string>(() => (this.toggled() ? 'pi-angle-left' : 'pi-angle-right'));
  readonly displayStyle = computed(() => (this.toggled() ? 'block' : 'none'));

  toggle() {
    this.toggled.set(!this.toggled());
  }
}
