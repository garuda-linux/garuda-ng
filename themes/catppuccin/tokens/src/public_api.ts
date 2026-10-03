import type { Preset } from '@openng/optimus-ui-themes/types';

/** Catppuccin Latte (light) / Mocha (dark) design tokens, usable with any Optimus base preset. */
export const catppuccinTokens = {
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
          50: '#f4f4f5',
          100: '#c9c9cd',
          200: '#9e9ea5',
          300: '#74747d',
          400: '#494956',
          500: '#1e1e2e',
          600: '#1a1a27',
          700: '#151520',
          800: '#111119',
          900: '#0c0c12',
          950: '#08080c',
        },
        primary: {
          color: '#8839ef' /* latte.mauve */,
          contrastColor: '#ccd0da' /* latte.surface0 */,
          hoverColor: '#e64553' /* latte.maroon */,
          activeColor: '#dd7878' /* latte.flamingo */,
        },
        highlight: {
          background: '{content.background}',
          focusBackground: '{content.background}',
          color: '#d20f39' /* latte.red */,
          focusColor: '#e64553' /* latte.maroon */,
        },
        mask: {
          background: '#ccd0da' /* latte.surface0 */ + '99',
          color: '{surface.200}',
        },
        formField: {
          background: '#dce0e8' /* latte.crust */ + '88',
          disabledBackground: '{surface.700}',
          filledBackground: '{surface.800}',
          filledHoverBackground: '{surface.800}',
          filledFocusBackground: '{surface.800}',
          borderColor: '{surface.600}',
          hoverBorderColor: '{surface.500}',
          focusBorderColor: '{primary.color}',
          invalidBorderColor: '#fe640b' /* latte.peach */,
          color: '#4c4f69' /* latte.text */,
          disabledColor: '{surface.400}',
          placeholderColor: '{surface.400}',
          invalidPlaceholderColor: '#e64553' /* latte.maroon */,
          floatLabelColor: '{surface.400}',
          floatLabelFocusColor: '{primary.color}',
          floatLabelActiveColor: '{surface.400}',
          floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
          iconColor: '{surface.400}',
        },
        text: {
          color: '#4c4f69' /* latte.text */,
          hoverColor: '#e64553' /* latte.maroon */,
          mutedColor: '#bcc0cc' /* latte.surface1 */,
          hoverMutedColor: '#ccd0da' /* latte.surface0 */,
        },
        content: {
          background: '#e6e9ef' /* latte.mantle */ + '88',
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
          100: '#c9c9cd',
          200: '#9e9ea5',
          300: '#74747d',
          400: '#494956',
          500: '#1e1e2e',
          600: '#1a1a27',
          700: '#151520',
          800: '#111119',
          900: '#0c0c12',
          950: '#08080c',
        },
        primary: {
          color: '#cba6f7' /* mocha.mauve */,
          contrastColor: '#313244' /* mocha.surface0 */,
          hoverColor: '#eba0ac' /* mocha.maroon */,
          activeColor: '#f2cdcd' /* mocha.flamingo */,
        },
        highlight: {
          background: '{content.background}',
          focusBackground: '{content.background}',
          color: '#f38ba8' /* mocha.red */,
          focusColor: '#eba0ac' /* mocha.maroon */,
        },
        mask: {
          background: '#313244' /* mocha.surface0 */ + '99',
          color: '{surface.200}',
        },
        formField: {
          background: '#11111b' /* mocha.crust */ + '88',
          disabledBackground: '{surface.700}',
          filledBackground: '{surface.800}',
          filledHoverBackground: '{surface.800}',
          filledFocusBackground: '{surface.800}',
          borderColor: '{surface.600}',
          hoverBorderColor: '{surface.500}',
          focusBorderColor: '{primary.color}',
          invalidBorderColor: '#fab387' /* mocha.peach */,
          color: '#cdd6f4' /* mocha.text */,
          disabledColor: '{surface.400}',
          placeholderColor: '{surface.400}',
          invalidPlaceholderColor: '#eba0ac' /* mocha.maroon */,
          floatLabelColor: '{surface.400}',
          floatLabelFocusColor: '{primary.color}',
          floatLabelActiveColor: '{surface.400}',
          floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
          iconColor: '{surface.400}',
        },
        text: {
          color: '#cdd6f4' /* mocha.text */,
          hoverColor: '#eba0ac' /* mocha.maroon */,
          mutedColor: '#45475a' /* mocha.surface1 */,
          hoverMutedColor: '#313244' /* mocha.surface0 */,
        },
        content: {
          background: '#181825' /* mocha.mantle */ + '99',
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
          background: '#e6e9ef' /* latte.mantle */ + '88',
        },
        dark: {
          background: '#181825' /* mocha.mantle */ + '88',
        },
      },
    },
    checkbox: {
      colorScheme: {
        light: {
          border: {
            color: '#8839ef' /* latte.mauve */,
          },
          background: '#dce0e8' /* latte.crust */,
          disabled: {
            background: '#eff1f5' /* latte.base */,
          },
          hover: {
            border: {
              color: '#e64553' /* latte.maroon */,
            },
          },
        },
        dark: {
          border: {
            color: '#cba6f7' /* mocha.mauve */,
          },
          background: '#11111b' /* mocha.crust */,
          disabled: {
            background: '#1e1e2e' /* mocha.base */,
          },
          hover: {
            border: {
              color: '#eba0ac' /* mocha.maroon */,
            },
          },
        },
      },
    },
    drawer: {
      colorScheme: {
        light: {
          background: '#e6e9ef' /* latte.mantle */,
        },
        dark: {
          background: '#181825' /* mocha.mantle */,
        },
      },
    },
    inputtext: {
      colorScheme: {
        light: {
          color: '#4c4f69' /* latte.text */,
          background: '#dce0e8' /* latte.crust */ + '88',
          border: {
            color: '#ccd0da' /* latte.surface0 */,
          },
        },
        dark: {
          color: '#cdd6f4' /* mocha.text */,
          background: '#11111b' /* mocha.crust */ + '88',
          border: {
            color: '#313244' /* mocha.surface0 */,
          },
        },
      },
    },
    button: {
      colorScheme: {
        light: {
          secondary: {
            background: '#dce0e8' /* latte.crust */ + '88',
            border: {
              color: '#ccd0da' /* latte.surface0 */,
            },
            hover: {
              color: '#8839ef' /* latte.mauve */,
              border: {
                color: '#dce0e8' /* latte.crust */,
              },
            },
          },
        },
        dark: {
          secondary: {
            background: '#11111b' /* mocha.crust */ + '88',
            border: {
              color: '#313244' /* mocha.surface0 */,
            },
            color: '#cdd6f4' /* mocha.text */,
            hover: {
              color: '#cba6f7' /* mocha.mauve */,
              border: {
                color: '#11111b' /* mocha.crust */,
              },
            },
          },
        },
      },
    },
    panel: {
      colorScheme: {
        light: {
          background: '#eff1f5' /* latte.base */ + '99',
          border: {
            color: '#dce0e8' /* latte.crust */,
            radius: '0.7rem',
          },
        },
        dark: {
          background: '#1e1e2e' /* mocha.base */ + '99',
          border: {
            color: '#11111b' /* mocha.crust */,
            radius: '0.7rem',
          },
        },
      },
    },
    dialog: {
      colorScheme: {
        light: {
          background: '#eff1f5' /* latte.base */,
          border: {
            color: '#dce0e8' /* latte.crust */,
          },
        },
        dark: {
          background: '#1e1e2e' /* mocha.base */,
          border: {
            color: '#11111b' /* mocha.crust */,
          },
        },
      },
    },
    divider: {
      colorScheme: {
        light: {
          border: {
            color: '#ccd0da' /* latte.surface0 */,
          },
        },
        dark: {
          border: {
            color: '#313244' /* mocha.surface0 */,
          },
        },
      },
    },
    menubar: {
      colorScheme: {
        light: {
          item: {
            color: '#8839ef' /* latte.mauve */,
            active: {
              color: '#e64553' /* latte.maroon */,
            },
            focus: {
              color: '#e64553' /* latte.maroon */,
              background: '#dce0e8' /* latte.crust */,
            },
            icon: {
              color: '#e64553' /* latte.maroon */,
              focus: {
                color: '#8839ef' /* latte.mauve */,
              },
            },
            submenu: {
              icon: {
                color: '#4c4f69' /* latte.text */,
              },
            },
          },
        },
        dark: {
          item: {
            color: '#cba6f7' /* mocha.mauve */,
            active: {
              color: '#eba0ac' /* mocha.maroon */,
            },
            focus: {
              color: '#eba0ac' /* mocha.maroon */,
              background: '#11111b' /* mocha.crust */,
            },
            icon: {
              color: '#eba0ac' /* mocha.maroon */,
              focus: {
                color: '#cba6f7' /* mocha.mauve */,
              },
            },
            submenu: {
              icon: {
                color: '#cdd6f4' /* mocha.text */,
                active: {
                  color: '#eba0ac' /* mocha.maroon */,
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
          background: '#dce0e8' /* latte.crust */,
          arrow: {
            offset: '9.8rem',
          },
        },
        dark: {
          background: '#11111b' /* mocha.crust */,
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
            1: '#e64553' /* latte.maroon */,
            2: '#dd7878' /* latte.flamingo */,
            3: '#40a02b' /* latte.green */,
            4: '#df8e1d' /* latte.yellow */,
          },
        },
        dark: {
          color: {
            1: '#eba0ac' /* mocha.maroon */,
            2: '#f2cdcd' /* mocha.flamingo */,
            3: '#a6e3a1' /* mocha.green */,
            4: '#f9e2af' /* mocha.yellow */,
          },
        },
      },
    },
    select: {
      colorScheme: {
        light: {
          color: '#4c4f69' /* latte.text */,
          disabled: {
            background: '#ccd0da' /* latte.surface0 */,
          },
          overlay: {
            background: '#dce0e8' /* latte.crust */,
          },
          option: {
            focus: {
              background: '#eff1f5' /* latte.base */,
            },
            selected: {
              background: '#ccd0da' /* latte.surface0 */,
            },
          },
        },
        dark: {
          color: '#cdd6f4' /* mocha.text */,
          disabled: {
            background: '#313244' /* mocha.surface0 */,
          },
          overlay: {
            background: '#11111b' /* mocha.crust */,
          },
          option: {
            focus: {
              background: '#1e1e2e' /* mocha.base */,
            },
            selected: {
              background: '#313244' /* mocha.surface0 */,
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
                background: '#ccd0da' /* latte.surface0 */,
              },
            },
          },
          row: {
            hover: {
              background: '#ccd0da' /* latte.surface0 */,
            },
          },
        },
        dark: {
          header: {
            cell: {
              hover: {
                background: '#313244' /* mocha.surface0 */,
              },
            },
          },
          row: {
            hover: {
              background: '#313244' /* mocha.surface0 */,
            },
          },
        },
      },
    },
    tooltip: {
      colorScheme: {
        light: {
          background: '#dce0e8' /* latte.crust */,
        },
        dark: {
          background: '#11111b' /* mocha.crust */,
        },
      },
    },
  },
} as Preset;
