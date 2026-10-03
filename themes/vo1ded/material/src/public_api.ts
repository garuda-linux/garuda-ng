import { definePreset } from '@openng/optimus-ui-themes';
import Material from '@openng/optimus-ui-themes/material';
import { vo1dedTokens } from '@garudalinux/themes/vo1ded/tokens';

/** Vo1ded on top of the Optimus Material preset. */
export const Vo1dedMaterial = /* @__PURE__ */ definePreset(Material, vo1dedTokens);
