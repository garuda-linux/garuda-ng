import { definePreset } from '@openng/optimus-ui-themes';
import Aura from '@openng/optimus-ui-themes/aura';
import { dr460nizedTokens } from '@garudalinux/themes/dr460nized/tokens';

/** Dr460nized on top of the Optimus Aura preset. */
export const Dr460nizedAura = /* @__PURE__ */ definePreset(Aura, dr460nizedTokens);
