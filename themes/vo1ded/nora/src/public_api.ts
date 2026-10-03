import { definePreset } from '@openng/optimus-ui-themes';
import Nora from '@openng/optimus-ui-themes/nora';
import { vo1dedTokens } from '@garudalinux/themes/vo1ded/tokens';

/** Vo1ded on top of the Optimus Nora preset. */
export const Vo1dedNora = /* @__PURE__ */ definePreset(Nora, vo1dedTokens);
