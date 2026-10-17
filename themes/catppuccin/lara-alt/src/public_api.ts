import { definePreset } from '@openng/optimus-ui-themes';
import Lara from '@openng/optimus-ui-themes/lara';
import { catppuccinAltTokens } from '@garudalinux/themes/catppuccin/tokens-alt';

/** Catppuccin Frappé/Macchiato on top of the Optimus Lara preset. */
export const CatppuccinLaraAlt = /* @__PURE__ */ definePreset(Lara, catppuccinAltTokens);
