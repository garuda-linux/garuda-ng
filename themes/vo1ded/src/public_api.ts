import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Nora from '@primeuix/themes/nora';
import Material from '@primeuix/themes/material';
import Lara from '@primeuix/themes/lara';

const vo1dedTokens = {
  semantic: {
    primary: {
      50: '#f8f6fd',
      100: '#ded2f6',
      200: '#c4afef',
      300: '#aa8ce7',
      400: '#9068e0',
      500: '#7645d9',
      600: '#643bb8',
      700: '#533098',
      800: '#412677',
      900: '#2f1c57',
      950: '#1e1136',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#fbfafe',
          100: '#ebe6fb',
          200: '#dad2f8',
          300: '#cabef5',
          400: '#baaaf2',
          500: '#aa96ef',
          600: '#9180cb',
          700: '#7769a7',
          800: '#5e5383',
          900: '#443c60',
          950: '#2b263c',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '#f8f6fd',
          100: '#ded2f6',
          200: '#c4afef',
          300: '#aa8ce7',
          400: '#9068e0',
          500: '#7645d9',
          600: '#643bb8',
          700: '#533098',
          800: '#412677',
          900: '#2f1c57',
          950: '#1e1136',
        },
      },
    },
  },
};

export const Vo1dedAura = definePreset(Aura, vo1dedTokens);
export const Vo1dedNora = definePreset(Nora, vo1dedTokens);
export const Vo1dedMaterial = definePreset(Material, vo1dedTokens);
export const Vo1dedLara = definePreset(Lara, vo1dedTokens);
