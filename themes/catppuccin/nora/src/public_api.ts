import { definePreset } from '@openng/optimus-ui-themes';
import Nora from '@openng/optimus-ui-themes/nora';
import { catppuccinTokens } from '@garudalinux/themes/catppuccin/tokens';

/** Catppuccin Latte/Mocha on top of the Optimus Nora preset. */
export const CatppuccinNora = /* @__PURE__ */ definePreset(Nora, catppuccinTokens);
