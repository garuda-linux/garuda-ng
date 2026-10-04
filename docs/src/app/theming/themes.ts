import { type GarudaThemeLoader, garudaThemes } from '@garudalinux/themes';

/** Display labels for the theme previews; each preset is only downloaded once it is previewed. */
export const themes: AppThemes = {
  'Catppuccin Mocha/Latte Aura': garudaThemes['catppuccin-aura'],
  'Catppuccin Mocha/Latte Nora': garudaThemes['catppuccin-nora'],
  'Catppuccin Mocha/Latte Material': garudaThemes['catppuccin-material'],
  'Catppuccin Mocha/Latte Lara': garudaThemes['catppuccin-lara'],
  'Catppuccin Macchiato/Frappe Aura': garudaThemes['catppuccin-aura-alt'],
  'Catppuccin Macchiato/Frappe Nora': garudaThemes['catppuccin-nora-alt'],
  'Catppuccin Macchiato/Frappe Material': garudaThemes['catppuccin-material-alt'],
  'Catppuccin Macchiato/Frappe Lara': garudaThemes['catppuccin-lara-alt'],
  'Dr460nized Aura': garudaThemes['dr460nized-aura'],
  'Dr460nized Nora': garudaThemes['dr460nized-nora'],
  'Dr460nized Material': garudaThemes['dr460nized-material'],
  'Dr460nized Lara': garudaThemes['dr460nized-lara'],
  'Vo1ded Aura': garudaThemes['vo1ded-aura'],
  'Vo1ded Nora': garudaThemes['vo1ded-nora'],
  'Vo1ded Material': garudaThemes['vo1ded-material'],
  'Vo1ded Lara': garudaThemes['vo1ded-lara'],
};

export type AppThemes = Record<string, GarudaThemeLoader>;
