import { definePreset } from '@openng/optimus-ui-themes';
import Aura from '@openng/optimus-ui-themes/aura';
import { catppuccinAltTokens } from '@garudalinux/themes/catppuccin/tokens-alt';

/** Catppuccin Frappé/Macchiato on top of the Optimus Aura preset. */
export const CatppuccinAuraAlt = /* @__PURE__ */ definePreset(Aura, catppuccinAltTokens);
