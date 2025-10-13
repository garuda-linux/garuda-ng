import { DOCUMENT, inject, signal } from '@angular/core';

export class ThemeHandler {
  darkMode = signal<boolean>(true);
  document = inject(DOCUMENT);

  constructor() {
    this.checkDarkMode();
  }

  /**
   * Toggle dark mode, updating the local storage and the document accordingly.
   */
  public toggleDarkMode(): void {
    this.darkMode.update((darkMode) => !darkMode);

    this.document.documentElement.classList.toggle('p-dark', this.darkMode());

    this.document.documentElement.style.scrollbarColor =
      getComputedStyle(this.document.documentElement).getPropertyValue('--p-text-muted-color') +
      ' ' +
      getComputedStyle(this.document.documentElement).getPropertyValue('--p-navigation-item-icon-color');
    this.document.documentElement.style.backgroundColor = getComputedStyle(this.document.documentElement).getPropertyValue(
      '--p-menu-background',
    );

    localStorage.setItem('darkMode', this.darkMode().toString());
  }

  /**
   * Check if dark mode is enabled and set it accordingly.
   * @private
   */
  private checkDarkMode(): void {
    if (
      localStorage.getItem('darkMode') === 'true' ||
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      if (!this.darkMode()) {
        this.toggleDarkMode();
      }
    } else {
      if (this.darkMode()) {
        this.toggleDarkMode();
      }
    }
  }
}
