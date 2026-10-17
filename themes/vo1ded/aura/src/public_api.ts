import { definePreset } from '@openng/optimus-ui-themes';
import Aura from '@openng/optimus-ui-themes/aura';
import { vo1dedTokens } from '@garudalinux/themes/vo1ded/tokens';

/** Vo1ded on top of the Optimus Aura preset. */
export const Vo1dedAura = /* @__PURE__ */ definePreset(Aura, vo1dedTokens);
