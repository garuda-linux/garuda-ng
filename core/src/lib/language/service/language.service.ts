import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  /**
   * The currently selected language of the application, which is also set in Transloco.
   */
  activeLanguage = signal<string>('');

  /**
   * Array of available languages. We expect those to be set as an array of strings during Transloco
   * initialisation.
   */
  languages = signal<string[]>([]);
}
