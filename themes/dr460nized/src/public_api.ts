import type { Preset } from '@primeuix/themes/types';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Material from '@primeuix/themes/material';
import Nora from '@primeuix/themes/nora';
import Lara from '@primeuix/themes/lara';

const tokensDr460nized: Preset = {
  semantic: {
    transitionDuration: '0.2s',
    focusRing: {
      width: '1px',
      style: 'solid',
      color: '{primary.color}',
      offset: '2px',
      shadow: 'none',
    },
    disabledOpacity: '0.6',
    iconSize: '1rem',
    anchorGutter: '2px',
    primary: {
      '50': '#fcf3fd',
      '100': '#f1c5f4',
      '200': '#e697ec',
      '300': '#db6ae3',
      '400': '#d03cdb',
      '500': '#c50ed2',
      '600': '#a70cb3',
      '700': '#8a0a93',
      '800': '#6c0874',
      '900': '#4f0654',
      '950': '#310435',
    },
    formField: {
      paddingX: '0.75rem',
      paddingY: '0.5rem',
      sm: {
        fontSize: '0.875rem',
        paddingX: '0.625rem',
        paddingY: '0.375rem',
      },
      lg: {
        fontSize: '1.125rem',
        paddingX: '0.875rem',
        paddingY: '0.625rem',
      },
      borderRadius: '{border.radius.md}',
      focusRing: {
        width: '0',
        style: 'none',
        color: 'transparent',
        offset: '0',
        shadow: 'none',
      },
      transitionDuration: '{transition.duration}',
    },
    list: {
      padding: '0.25rem 0.25rem',
      gap: '2px',
      header: {
        padding: '0.5rem 1rem 0.25rem 1rem',
      },
      option: {
        padding: '0.5rem 0.75rem',
        borderRadius: '{border.radius.sm}',
      },
      optionGroup: {
        padding: '0.5rem 0.75rem',
        fontWeight: '600',
      },
    },
    content: {
      borderRadius: '{border.radius.md}',
    },
    mask: {
      transitionDuration: '0.15s',
    },
    navigation: {
      list: {
        padding: '0.25rem 0.25rem',
        gap: '2px',
      },
      item: {
        padding: '0.5rem 0.75rem',
        borderRadius: '{border.radius.sm}',
        gap: '0.5rem',
      },
      submenuLabel: {
        padding: '0.5rem 0.75rem',
        fontWeight: '600',
      },
      submenuIcon: {
        size: '0.875rem',
      },
    },
    overlay: {
      select: {
        borderRadius: '{border.radius.md}',
        shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
      popover: {
        borderRadius: '{border.radius.md}',
        padding: '0.75rem',
        shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
      modal: {
        borderRadius: '{border.radius.xl}',
        padding: '1.25rem',
        shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      navigation: {
        shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
    },
    colorScheme: {
      light: {
        surface: {
          '0': '#ffffff',
          '50': '{slate.50}',
          '100': '{slate.100}',
          '200': '{slate.200}',
          '300': '{slate.300}',
          '400': '{slate.400}',
          '500': '{slate.500}',
          '600': '{slate.600}',
          '700': '{slate.700}',
          '800': '{slate.800}',
          '900': '{slate.900}',
          '950': '{slate.950}',
        },
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',
          focusColor: '{primary.800}',
        },
        mask: {
          background: 'rgba(0,0,0,0.4)',
          color: '{surface.200}',
        },
        formField: {
          background: '{surface.0}',
          disabledBackground: '{surface.200}',
          filledBackground: '{surface.300}',
          filledHoverBackground: '{surface.50}',
          filledFocusBackground: '{surface.50}',
          borderColor: '{surface.500}',
          hoverBorderColor: '{surface.400}',
          focusBorderColor: '{primary.color}',
          invalidBorderColor: '{red.400}',
          color: '{surface.700}',
          disabledColor: '{surface.500}',
          placeholderColor: '{surface.500}',
          invalidPlaceholderColor: '{red.600}',
          floatLabelColor: '{surface.500}',
          floatLabelFocusColor: '{primary.600}',
          floatLabelActiveColor: '{surface.500}',
          floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
          iconColor: '{surface.400}',
          shadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)',
        },
        text: {
          color: '{surface.700}',
          hoverColor: '{surface.800}',
          mutedColor: '{surface.500}',
          hoverMutedColor: '{surface.600}',
        },
        content: {
          background: '{surface.200}',
          hoverBackground: '{surface.100}',
          borderColor: '{surface.200}',
          color: '{text.color}',
          hoverColor: '{text.hover.color}',
        },
        overlay: {
          select: {
            background: '{surface.0}',
            borderColor: '{surface.200}',
            color: '{text.color}',
          },
          popover: {
            background: '{surface.0}',
            borderColor: '{surface.200}',
            color: '{text.color}',
          },
          modal: {
            background: '{surface.0}',
            borderColor: '{surface.200}',
            color: '{text.color}',
          },
        },
        list: {
          option: {
            focusBackground: '{surface.100}',
            selectedBackground: '{highlight.background}',
            selectedFocusBackground: '{highlight.focus.background}',
            color: '{text.color}',
            focusColor: '{text.hover.color}',
            selectedColor: '{highlight.color}',
            selectedFocusColor: '{highlight.focus.color}',
            icon: {
              color: '{surface.400}',
              focusColor: '{surface.500}',
            },
          },
          optionGroup: {
            background: 'transparent',
            color: '{text.muted.color}',
          },
        },
        navigation: {
          item: {
            focusBackground: '{surface.100}',
            activeBackground: '{surface.100}',
            color: '{text.color}',
            focusColor: '{text.hover.color}',
            activeColor: '{text.hover.color}',
            icon: {
              color: '{surface.400}',
              focusColor: '{surface.500}',
              activeColor: '{surface.500}',
            },
          },
          submenuLabel: {
            background: 'transparent',
            color: '{text.muted.color}',
          },
          submenuIcon: {
            color: '{surface.400}',
            focusColor: '{surface.500}',
            activeColor: '{surface.500}',
          },
        },
      },
      dark: {
        surface: {
          '0': '#ffffff',
          '50': '#f3f4f4',
          '100': '#c7c8cb',
          '200': '#9b9ca1',
          '300': '#6f7078',
          '400': '#42454e',
          '500': '#161925',
          '600': '#13151f',
          '700': '#0f121a',
          '800': '#0c0e14',
          '900': '#090a0f',
          '950': '#060609',
        },
        primary: {
          color: '{primary.400}',
          contrastColor: '{surface.900}',
          hoverColor: '{primary.200}',
          activeColor: '{primary.100}',
        },
        highlight: {
          background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
          focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
        mask: {
          background: 'rgba(0,0,0,0.6)',
          color: '{surface.200}',
        },
        formField: {
          background: '{surface.950}',
          disabledBackground: '{surface.700}',
          filledBackground: '{surface.800}',
          filledHoverBackground: '{surface.800}',
          filledFocusBackground: '{surface.800}',
          borderColor: '#353946',
          hoverBorderColor: '{surface.500}',
          focusBorderColor: '{primary.color}',
          invalidBorderColor: '#ff6a00',
          color: '{surface.0}',
          disabledColor: '{surface.400}',
          placeholderColor: '{surface.400}',
          invalidPlaceholderColor: '#ed254e',
          floatLabelColor: '{surface.400}',
          floatLabelFocusColor: '{primary.color}',
          floatLabelActiveColor: '{surface.400}',
          floatLabelInvalidColor: '#ff6a00',
          iconColor: '{surface.400}',
          shadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)',
        },
        text: {
          color: '{surface.0}',
          hoverColor: '{surface.0}',
          mutedColor: '{surface.400}',
          hoverMutedColor: '{surface.300}',
        },
        content: {
          background: '{surface.900}',
          hoverBackground: '{surface.800}',
          borderColor: '{surface.700}',
          color: '{text.color}',
          hoverColor: '{text.hover.color}',
        },
        overlay: {
          select: {
            background: '{surface.900}',
            borderColor: '{surface.700}',
            color: '{text.color}',
          },
          popover: {
            background: '{surface.900}',
            borderColor: '{surface.700}',
            color: '{text.color}',
          },
          modal: {
            background: '{surface.900}',
            borderColor: '{surface.700}',
            color: '{text.color}',
          },
        },
        list: {
          option: {
            focusBackground: '{surface.800}',
            selectedBackground: '{highlight.background}',
            selectedFocusBackground: '{highlight.focus.background}',
            color: '{text.color}',
            focusColor: '{text.hover.color}',
            selectedColor: '{highlight.color}',
            selectedFocusColor: '{highlight.focus.color}',
            icon: {
              color: '{surface.500}',
              focusColor: '{surface.400}',
            },
          },
          optionGroup: {
            background: 'transparent',
            color: '{text.muted.color}',
          },
        },
        navigation: {
          item: {
            focusBackground: '{surface.800}',
            activeBackground: '{surface.800}',
            color: '{text.color}',
            focusColor: '{text.hover.color}',
            activeColor: '{text.hover.color}',
            icon: {
              color: '{surface.500}',
              focusColor: '{surface.400}',
              activeColor: '{surface.400}',
            },
          },
          submenuLabel: {
            background: 'transparent',
            color: '{text.muted.color}',
          },
          submenuIcon: {
            color: '{surface.500}',
            focusColor: '{surface.400}',
            activeColor: '{surface.400}',
          },
        },
      },
    },
  },
};

export const Dr460nizedAura = definePreset(Aura, tokensDr460nized);
export const Dr460nizedNora = definePreset(Nora, tokensDr460nized);
export const Dr460nizedLara = definePreset(Lara, tokensDr460nized);
export const Dr460nizedMaterial = definePreset(Material, tokensDr460nized);
