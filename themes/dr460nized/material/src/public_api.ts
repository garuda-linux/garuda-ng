import { definePreset } from '@openng/optimus-ui-themes';
import Material from '@openng/optimus-ui-themes/material';
import { dr460nizedTokens } from '@garudalinux/themes/dr460nized/tokens';

/** Dr460nized on top of the Optimus Material preset. */
export const Dr460nizedMaterial = /* @__PURE__ */ definePreset(Material, dr460nizedTokens);
