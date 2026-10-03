import { definePreset } from '@openng/optimus-ui-themes';
import Lara from '@openng/optimus-ui-themes/lara';
import { vo1dedTokens } from '@garudalinux/themes/vo1ded/tokens';

/** Vo1ded on top of the Optimus Lara preset. */
export const Vo1dedLara = /* @__PURE__ */ definePreset(Lara, vo1dedTokens);
