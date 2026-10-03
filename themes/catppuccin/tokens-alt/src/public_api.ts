import type { Preset } from '@openng/optimus-ui-themes/types';

/** Catppuccin Frappé (light) / Macchiato (dark) design tokens, usable with any Optimus base preset. */
export const catppuccinAltTokens = {
  semantic: {
    focusRing: {
      color: '{primary.color}',
    },
    primary: {
      50: '#fcfbff',
      100: '#f3eafd',
      200: '#e9d9fc',
      300: '#dfc8fa',
      400: '#d5b7f9',
      500: '#cba6f7',
      600: '#ad8dd2',
      700: '#8e74ad',
      800: '#705b88',
      900: '#514263',
      950: '#332a3e',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f5f5f6',
          100: '#d0ced3',
          200: '#aaa8af',
          300: '#85818c',
          400: '#5f5b69',
          500: '#3a3446',
          600: '#312c3c',
          700: '#292431',
          800: '#201d27',
          900: '#17151c',
          950: '#0f0d12',
        },
        primary: {
          color: '#ca9ee6' /* frappe.mauve */,
          contrastColor: '#414559' /* frappe.surface0 */,
          hoverColor: '#ea999c' /* frappe.maroon */,
          activeColor: '#eebebe' /* frappe.flamingo */,
        },
        highlight: {
          background: '{content.background}',
          focusBackground: '{content.background}',
          color: '#e78284' /* frappe.red */,
          focusColor: '#ea999c' /* frappe.maroon */,
        },
        mask: {
          background: '#414559' /* frappe.surface0 */ + '99',
          color: '{surface.200}',
        },
        formField: {
          background: '#232634' /* frappe.crust */ + '88',
          disabledBackground: '{surface.700}',
          filledBackground: '{surface.800}',
          filledHoverBackground: '{surface.800}',
          filledFocusBackground: '{surface.800}',
          borderColor: '{surface.600}',
          hoverBorderColor: '{surface.500}',
          focusBorderColor: '{primary.color}',
          invalidBorderColor: '#ef9f76' /* frappe.peach */,
          color: '#c6d0f5' /* frappe.text */,
          disabledColor: '{surface.400}',
          placeholderColor: '{surface.400}',
          invalidPlaceholderColor: '#ea999c' /* frappe.maroon */,
          floatLabelColor: '{surface.400}',
          floatLabelFocusColor: '{primary.color}',
          floatLabelActiveColor: '{surface.400}',
          floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
          iconColor: '{surface.400}',
        },
        text: {
          color: '#c6d0f5' /* frappe.text */,
          hoverColor: '#ea999c' /* frappe.maroon */,
          mutedColor: '#51576d' /* frappe.surface1 */,
          hoverMutedColor: '#414559' /* frappe.surface0 */,
        },
        content: {
          background: '#414559' /* frappe.surface0 */ + '99',
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
      dark: {
        surface: {
          0: '#ffffff',
          50: '#f4f4f5',
          100: '#cacbcd',
          200: '#a1a2a6',
          300: '#77797f',
          400: '#4e5057',
          500: '#242730',
          600: '#1f2129',
          700: '#191b22',
          800: '#14151a',
          900: '#0e1013',
          950: '#090a0c',
        },
        primary: {
          color: '#c6a0f6' /* macchiato.mauve */,
          contrastColor: '#363a4f' /* macchiato.surface0 */,
          hoverColor: '#ee99a0' /* macchiato.maroon */,
          activeColor: '#f0c6c6' /* macchiato.flamingo */,
        },
        highlight: {
          background: '{content.background}',
          focusBackground: '{content.background}',
          color: '#ed8796' /* macchiato.red */,
          focusColor: '#ee99a0' /* macchiato.maroon */,
        },
        mask: {
          background: '#363a4f' /* macchiato.surface0 */ + '99',
          color: '{surface.200}',
        },
        formField: {
          background: '#181926' /* macchiato.crust */ + '88',
          disabledBackground: '{surface.700}',
          filledBackground: '{surface.800}',
          filledHoverBackground: '{surface.800}',
          filledFocusBackground: '{surface.800}',
          borderColor: '{surface.600}',
          hoverBorderColor: '{surface.500}',
          focusBorderColor: '{primary.color}',
          invalidBorderColor: '#f5a97f' /* macchiato.peach */,
          color: '#cad3f5' /* macchiato.text */,
          disabledColor: '{surface.400}',
          placeholderColor: '{surface.400}',
          invalidPlaceholderColor: '#ee99a0' /* macchiato.maroon */,
          floatLabelColor: '{surface.400}',
          floatLabelFocusColor: '{primary.color}',
          floatLabelActiveColor: '{surface.400}',
          floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
          iconColor: '{surface.400}',
        },
        text: {
          color: '#cad3f5' /* macchiato.text */,
          hoverColor: '#ee99a0' /* macchiato.maroon */,
          mutedColor: '#494d64' /* macchiato.surface1 */,
          hoverMutedColor: '#363a4f' /* macchiato.surface0 */,
        },
        content: {
          background: '#363a4f' /* macchiato.surface0 */ + '99',
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
  components: {
    card: {
      colorScheme: {
        light: {
          background: '#292c3c' /* frappe.mantle */ + '88',
        },
        dark: {
          background: '#1e2030' /* macchiato.mantle */ + '88',
        },
      },
    },
    checkbox: {
      colorScheme: {
        light: {
          border: {
            color: '#ca9ee6' /* frappe.mauve */,
          },
          background: '#232634' /* frappe.crust */,
          disabled: {
            background: '#303446' /* frappe.base */,
          },
          hover: {
            border: {
              color: '#ea999c' /* frappe.maroon */,
            },
          },
        },
        dark: {
          border: {
            color: '#c6a0f6' /* macchiato.mauve */,
          },
          background: '#181926' /* macchiato.crust */,
          disabled: {
            background: '#24273a' /* macchiato.base */,
          },
          hover: {
            border: {
              color: '#ee99a0' /* macchiato.maroon */,
            },
          },
        },
      },
    },
    drawer: {
      colorScheme: {
        light: {
          background: '#292c3c' /* frappe.mantle */,
        },
        dark: {
          background: '#1e2030' /* macchiato.mantle */,
        },
      },
    },
    inputtext: {
      colorScheme: {
        light: {
          color: '#c6d0f5' /* frappe.text */,
          background: '#232634' /* frappe.crust */ + '88',
          border: {
            color: '#414559' /* frappe.surface0 */,
          },
        },
        dark: {
          color: '#cad3f5' /* macchiato.text */,
          background: '#181926' /* macchiato.crust */ + '88',
          border: {
            color: '#363a4f' /* macchiato.surface0 */,
          },
        },
      },
    },
    button: {
      colorScheme: {
        light: {
          secondary: {
            background: '#232634' /* frappe.crust */ + '88',
            border: {
              color: '#414559' /* frappe.surface0 */,
            },
            hover: {
              color: '#ca9ee6' /* frappe.mauve */,
              border: {
                color: '#232634' /* frappe.crust */,
              },
            },
          },
        },
        dark: {
          secondary: {
            background: '#181926' /* macchiato.crust */ + '88',
            border: {
              color: '#363a4f' /* macchiato.surface0 */,
            },
            color: '#cad3f5' /* macchiato.text */,
            hover: {
              color: '#c6a0f6' /* macchiato.mauve */,
              border: {
                color: '#181926' /* macchiato.crust */,
              },
            },
          },
        },
      },
    },
    panel: {
      colorScheme: {
        light: {
          background: '#303446' /* frappe.base */ + '99',
          border: {
            color: '#232634' /* frappe.crust */,
            radius: '0.7rem',
          },
        },
        dark: {
          background: '#24273a' /* macchiato.base */ + '99',
          border: {
            color: '#181926' /* macchiato.crust */,
            radius: '0.7rem',
          },
        },
      },
    },
    dialog: {
      colorScheme: {
        light: {
          background: '#303446' /* frappe.base */,
          border: {
            color: '#232634' /* frappe.crust */,
          },
        },
        dark: {
          background: '#24273a' /* macchiato.base */,
          border: {
            color: '#181926' /* macchiato.crust */,
          },
        },
      },
    },
    divider: {
      colorScheme: {
        light: {
          border: {
            color: '#414559' /* frappe.surface0 */,
          },
        },
        dark: {
          border: {
            color: '#363a4f' /* macchiato.surface0 */,
          },
        },
      },
    },
    menubar: {
      colorScheme: {
        light: {
          background: '#232634' /* frappe.crust */,
          color: '#ca9ee6' /* frappe.mauve */,
          item: {
            color: '#ca9ee6' /* frappe.mauve */,
            active: {
              color: '#ea999c' /* frappe.maroon */,
            },
            focus: {
              color: '#ea999c' /* frappe.maroon */,
              background: '#232634' /* frappe.crust */,
            },
            icon: {
              color: '#ea999c' /* frappe.maroon */,
              focus: {
                color: '#ca9ee6' /* frappe.mauve */,
              },
            },
            submenu: {
              icon: {
                color: '#c6d0f5' /* frappe.text */,
              },
            },
          },
        },
        dark: {
          item: {
            color: '#c6a0f6' /* macchiato.mauve */,
            active: {
              color: '#ee99a0' /* macchiato.maroon */,
            },
            focus: {
              color: '#ee99a0' /* macchiato.maroon */,
              background: '#181926' /* macchiato.crust */,
            },
            icon: {
              color: '#ee99a0' /* macchiato.maroon */,
              focus: {
                color: '#c6a0f6' /* macchiato.mauve */,
              },
            },
            submenu: {
              icon: {
                color: '#cad3f5' /* macchiato.text */,
                active: {
                  color: '#ee99a0' /* macchiato.maroon */,
                },
              },
            },
          },
        },
      },
    },
    popover: {
      colorscheme: {
        light: {
          background: '#232634' /* frappe.crust */,
          arrow: {
            offset: '9.8rem',
          },
        },
        dark: {
          background: '#181926' /* macchiato.crust */,
          arrow: {
            offset: '9.8rem',
          },
        },
      },
    },
    progressspinner: {
      colorScheme: {
        light: {
          color: {
            1: '#ea999c' /* frappe.maroon */,
            2: '#eebebe' /* frappe.flamingo */,
            3: '#a6d189' /* frappe.green */,
            4: '#e5c890' /* frappe.yellow */,
          },
        },
        dark: {
          color: {
            1: '#ee99a0' /* macchiato.maroon */,
            2: '#f0c6c6' /* macchiato.flamingo */,
            3: '#a6da95' /* macchiato.green */,
            4: '#eed49f' /* macchiato.yellow */,
          },
        },
      },
    },
    select: {
      colorScheme: {
        light: {
          color: '#c6d0f5' /* frappe.text */,
          disabled: {
            background: '#414559' /* frappe.surface0 */,
          },
          overlay: {
            background: '#232634' /* frappe.crust */,
          },
          option: {
            focus: {
              background: '#303446' /* frappe.base */,
            },
            selected: {
              background: '#414559' /* frappe.surface0 */,
            },
          },
        },
        dark: {
          color: '#cad3f5' /* macchiato.text */,
          disabled: {
            background: '#363a4f' /* macchiato.surface0 */,
          },
          overlay: {
            background: '#181926' /* macchiato.crust */,
          },
          option: {
            focus: {
              background: '#24273a' /* macchiato.base */,
            },
            selected: {
              background: '#363a4f' /* macchiato.surface0 */,
            },
          },
        },
      },
    },
    datatable: {
      colorScheme: {
        light: {
          header: {
            cell: {
              hover: {
                background: '#414559' /* frappe.surface0 */,
              },
            },
          },
          row: {
            hover: {
              background: '#414559' /* frappe.surface0 */,
            },
          },
        },
        dark: {
          header: {
            cell: {
              hover: {
                background: '#363a4f' /* macchiato.surface0 */,
              },
            },
          },
          row: {
            hover: {
              background: '#363a4f' /* macchiato.surface0 */,
            },
          },
        },
      },
    },
    tooltip: {
      colorScheme: {
        light: {
          background: '#232634' /* frappe.crust */,
        },
        dark: {
          background: '#181926' /* macchiato.crust */,
        },
      },
    },
  },
} as Preset;
