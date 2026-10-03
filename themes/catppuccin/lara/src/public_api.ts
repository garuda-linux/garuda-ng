import { definePreset } from '@openng/optimus-ui-themes';
import Lara from '@openng/optimus-ui-themes/lara';
import { catppuccinTokens } from '@garudalinux/themes/catppuccin/tokens';

/** Catppuccin Latte/Mocha on top of the Optimus Lara preset. */
export const CatppuccinLara = /* @__PURE__ */ definePreset(Lara, catppuccinTokens);
