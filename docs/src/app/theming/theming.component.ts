import { Component, DOCUMENT, inject } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { type AppThemes, themes } from './themes';
import { FormsModule } from '@angular/forms';
import { usePreset } from '@openng/optimus-ui-themes';
import { CodeExampleComponent } from '../../util/code-example/code-example.component';

@Component({
  selector: 'garuda-docs-theming',
  imports: [Highlight, FormsModule, CodeExampleComponent],
  templateUrl: './theming.component.html',
  styleUrl: './theming.component.scss',
})
export class ThemingComponent {
  protected readonly themes: { label: string; value: AppThemes[string] }[] = Object.entries(themes).map((preset) => ({
    label: preset[0],
    value: preset[1],
  }));
  protected readonly themeSetup: string = `
  import { provideGarudaNG } from '@garudalinux/core/config';
  import { CatppuccinAura } from '@garudalinux/themes/catppuccin/aura';

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

  protected readonly lazyThemeSetup: string = `
  import { garudaThemes } from '@garudalinux/themes';
  import { usePreset } from '@openng/optimus-ui-themes';

  // Only the chosen preset is downloaded, in its own small chunk.
  usePreset(await garudaThemes['dr460nized-aura']());
  `;

  private readonly document = inject(DOCUMENT);

  /**
   * Previews the selected theme by lazily loading and applying its preset.
   * @param loadPreset Loader of the selected theme preset.
   */
  async previewTheme(loadPreset: AppThemes[string]) {
    usePreset(await loadPreset());
  }
}
