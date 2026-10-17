import { definePreset } from '@openng/optimus-ui-themes';
import Lara from '@openng/optimus-ui-themes/lara';
import { dr460nizedTokens } from '@garudalinux/themes/dr460nized/tokens';

/** Dr460nized on top of the Optimus Lara preset. */
export const Dr460nizedLara = /* @__PURE__ */ definePreset(Lara, dr460nizedTokens);
