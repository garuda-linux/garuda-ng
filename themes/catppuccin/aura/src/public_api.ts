import { definePreset } from '@openng/optimus-ui-themes';
import Aura from '@openng/optimus-ui-themes/aura';
import { catppuccinTokens } from '@garudalinux/themes/catppuccin/tokens';

/** Catppuccin Latte/Mocha on top of the Optimus Aura preset. */
export const CatppuccinAura = /* @__PURE__ */ definePreset(Aura, catppuccinTokens);
