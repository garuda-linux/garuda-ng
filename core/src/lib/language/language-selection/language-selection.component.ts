import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ScrollPanel } from 'primeng/scrollpanel';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Tooltip } from 'primeng/tooltip';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LanguageService } from '../service/language.service';
import { LangPipe } from '../../pipes';

@Component({
  selector: 'garuda-language-selection',
  imports: [LangPipe, ScrollPanel, TranslocoDirective, Tooltip],
  templateUrl: './language-selection.component.html',
  styleUrl: './language-selection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectionComponent implements OnInit, OnDestroy {
  protected readonly languageService = inject(LanguageService);

  private readonly ref = inject(DynamicDialogRef);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly instance = inject(DialogService).getInstance(this.ref);
  private readonly translocoService = inject(TranslocoService);

  ngOnInit(): void {
    this.languageService.activeLanguage.set(this.translocoService.getActiveLang());
    this.languageService.languages.set(this.translocoService.getAvailableLangs() as string[]);
  }

  /**
   * Close the popup with a selected language.
   * @param language The language to set as active.
   */
  close(language: string): void {
    this.ref.close(language);
    this.cdr.markForCheck();
  }

  ngOnDestroy(): void {
    this.instance?.close();
  }
}
