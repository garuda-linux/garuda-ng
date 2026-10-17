import { definePreset } from '@openng/optimus-ui-themes';
import Nora from '@openng/optimus-ui-themes/nora';
import { dr460nizedTokens } from '@garudalinux/themes/dr460nized/tokens';

/** Dr460nized on top of the Optimus Nora preset. */
export const Dr460nizedNora = /* @__PURE__ */ definePreset(Nora, dr460nizedTokens);
