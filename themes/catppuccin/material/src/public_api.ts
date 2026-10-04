import { definePreset } from '@openng/optimus-ui-themes';
import Material from '@openng/optimus-ui-themes/material';
import { catppuccinTokens } from '@garudalinux/themes/catppuccin/tokens';

/** Catppuccin Latte/Mocha on top of the Optimus Material preset. */
export const CatppuccinMaterial = /* @__PURE__ */ definePreset(Material, catppuccinTokens);
