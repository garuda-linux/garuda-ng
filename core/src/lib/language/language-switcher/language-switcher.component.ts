import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Button } from 'primeng/button';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LanguageSelectionComponent } from '../language-selection';
import { LanguageService } from '../service/language.service';

@Component({
  selector: 'garuda-language-switcher',
  imports: [Button, TranslocoDirective, DynamicDialogModule, DialogModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css',
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
  /**
   * Whether the switcher popup is currently visible.
   */
  visible = signal(false);

  private ref: DynamicDialogRef | null = null;

  private readonly cdr = inject(ChangeDetectorRef);
  private readonly dialogService = inject(DialogService);
  private readonly languageService = inject(LanguageService);
  private readonly route = inject(Router).routerState.root;
  private readonly translocoService = inject(TranslocoService);

  /**
   * Initialize the component and subscribe to the router events to detect language changes
   * via query parameters.
   */
  ngOnInit() {
    if (
      this.route.snapshot.queryParams['lang'] &&
      this.translocoService.getAvailableLangs().includes(this.route.snapshot.queryParams['lang']) &&
      this.route.snapshot.queryParams['lang'] !== this.translocoService.getActiveLang()
    ) {
      this.selectLanguage(this.route.snapshot.queryParams['lang']);
    }

    this.languageService.activeLanguage.set(this.translocoService.getActiveLang());
    this.languageService.languages.set(this.translocoService.getAvailableLangs() as string[]);
    this.cdr.markForCheck();
  }

  /**
   * Select a new language, setting it as the active language.
   * Additionally, update the query parameter if the current URL contains one and the language is not the default.
   * @param language The selected language
   */
  selectLanguage(language: string): void {
    this.translocoService.setActiveLang(language);
    this.languageService.activeLanguage.set(language);
    this.cdr.markForCheck();
  }

  /**
   * Open the language selection dialog, allowing the user to choose a new language.
   * When the dialog is closed, the selected language is set as the active language.
   */
  show(): void {
    this.ref = this.dialogService.open(LanguageSelectionComponent, {
      modal: true,
      dismissableMask: true,
    });
    this.ref?.onClose.subscribe((language: string) => {
      console.error('Language selected:', language);
      if (language) {
        this.selectLanguage(language);
      }
      this.cdr.markForCheck();
    });

    this.cdr.markForCheck();
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
}
