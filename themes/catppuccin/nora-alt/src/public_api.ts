import { definePreset } from '@openng/optimus-ui-themes';
import Nora from '@openng/optimus-ui-themes/nora';
import { catppuccinAltTokens } from '@garudalinux/themes/catppuccin/tokens-alt';

/** Catppuccin Frappé/Macchiato on top of the Optimus Nora preset. */
export const CatppuccinNoraAlt = /* @__PURE__ */ definePreset(Nora, catppuccinAltTokens);
