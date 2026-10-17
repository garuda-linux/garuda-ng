import type { Preset } from '@openng/optimus-ui-themes/types';

/** Lazily resolves a theme preset; every call site gets its own small chunk. */
export type GarudaThemeLoader = () => Promise<Preset>;

/**
 * Lazy loaders for every Garuda theme preset. Nothing is bundled until a loader
 * is called, so a theme picker only ever downloads the presets that are chosen:
 *
 * ```ts
 * usePreset(await garudaThemes['catppuccin-aura']());
 * ```
 */
export const garudaThemes = {
  'catppuccin-aura': () => import('@garudalinux/themes/catppuccin/aura').then((m) => m.CatppuccinAura),
  'catppuccin-nora': () => import('@garudalinux/themes/catppuccin/nora').then((m) => m.CatppuccinNora),
  'catppuccin-material': () => import('@garudalinux/themes/catppuccin/material').then((m) => m.CatppuccinMaterial),
  'catppuccin-lara': () => import('@garudalinux/themes/catppuccin/lara').then((m) => m.CatppuccinLara),
  'catppuccin-aura-alt': () => import('@garudalinux/themes/catppuccin/aura-alt').then((m) => m.CatppuccinAuraAlt),
  'catppuccin-nora-alt': () => import('@garudalinux/themes/catppuccin/nora-alt').then((m) => m.CatppuccinNoraAlt),
  'catppuccin-material-alt': () => import('@garudalinux/themes/catppuccin/material-alt').then((m) => m.CatppuccinMaterialAlt),
  'catppuccin-lara-alt': () => import('@garudalinux/themes/catppuccin/lara-alt').then((m) => m.CatppuccinLaraAlt),
  'dr460nized-aura': () => import('@garudalinux/themes/dr460nized/aura').then((m) => m.Dr460nizedAura),
  'dr460nized-nora': () => import('@garudalinux/themes/dr460nized/nora').then((m) => m.Dr460nizedNora),
  'dr460nized-material': () => import('@garudalinux/themes/dr460nized/material').then((m) => m.Dr460nizedMaterial),
  'dr460nized-lara': () => import('@garudalinux/themes/dr460nized/lara').then((m) => m.Dr460nizedLara),
  'vo1ded-aura': () => import('@garudalinux/themes/vo1ded/aura').then((m) => m.Vo1dedAura),
  'vo1ded-nora': () => import('@garudalinux/themes/vo1ded/nora').then((m) => m.Vo1dedNora),
  'vo1ded-material': () => import('@garudalinux/themes/vo1ded/material').then((m) => m.Vo1dedMaterial),
  'vo1ded-lara': () => import('@garudalinux/themes/vo1ded/lara').then((m) => m.Vo1dedLara),
} as const satisfies Record<string, GarudaThemeLoader>;

export type GarudaThemeName = keyof typeof garudaThemes;
