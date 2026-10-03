import { definePreset } from '@openng/optimus-ui-themes';
import Material from '@openng/optimus-ui-themes/material';
import { catppuccinAltTokens } from '@garudalinux/themes/catppuccin/tokens-alt';

/** Catppuccin Frappé/Macchiato on top of the Optimus Material preset. */
export const CatppuccinMaterialAlt = /* @__PURE__ */ definePreset(Material, catppuccinAltTokens);
