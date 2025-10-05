import { Component, DOCUMENT, inject } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { themes } from './themes';
import { FormsModule } from '@angular/forms';
import { usePreset } from '@primeuix/themes';
import type { Preset } from '@primeuix/themes/types';

@Component({
  selector: 'garuda-docs-theming',
  imports: [Highlight, FormsModule],
  templateUrl: './theming.component.html',
  styleUrl: './theming.component.scss',
})
export class ThemingComponent {
  protected readonly themes: { label: string; value: Preset }[] = Object.entries(themes).map((preset) => ({
    label: preset[0],
    value: preset[1],
  }));
  protected readonly themeSetup: string = `
  import { CatppuccinAura } from '@garudalinux/themes/catppuccin';

  providers: [
    provideGarudaNG(
      {
        font: 'Inter',
      },
      {
        theme: {
           preset: CatppuccinAura,
        },
      },
    ),
  ]
  `;

  private readonly document = inject(DOCUMENT);

  /**
   * Previews the selected theme by applying the preset.
   * @param value The selected theme preset.
   */
  previewTheme(value: Preset) {
    usePreset(value);
  }
}
