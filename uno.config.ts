import { defineConfig, presetIcons, presetMini, presetTypography, presetWebFonts, presetWind3 } from 'unocss';

export default defineConfig({
  presets: [
    presetMini(),
    presetWind3(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography({
      cssExtend: {
        a: {
          transition: 'color ease 0.15s',
        },
        'a:hover': {
          color: 'rgb(114 175 160)',
        },
      },
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Atkinson Hyperligible',
        mono: ['Cutive Mono'],
      },
    }),
  ],

  shortcuts: {
    'grid-container': 'grid w-full md:grid-cols-12 md:gap-4 gap-2',
    'col-1-1': 'col-span-12',
    'col-1-2': 'col-span-12 md:col-span-6',
    'col-1-3': 'col-span-12 md:col-span-4',
    'col-2-3': 'col-span-12 md:col-span-8',
    'col-1-4': 'col-span-12 md:col-span-3',
    'col-3-4': 'col-span-12 md:col-span-9',
    'col-1-6': 'col-span-12 md:col-span-2',
    'col-5-6': 'col-span-12 md:col-span-10',
    'col-1-12': 'col-span-12 md:col-span-1',
    'col-5-12': 'col-span-12 md:col-span-5',
    'col-7-12': 'col-span-12 md:col-span-7',
    'padded-container': 'container mx-auto px-2',
    'page-container': 'container mx-auto px-2 flex flex-col justify-center items-center',
  },

  theme: {
    colors: {
      muteoki: {
        black: 'rgb(9 9 10)',
        950: 'rgb(28 27 26)',
        900: 'rgb(40 39 38)',
        850: 'rgb(52 51 49)',
        800: 'rgb(64 62 60)',
        700: 'rgb(87 86 83)',
        600: 'rgb(111 110 105)',
        500: 'rgb(135 133 128)',
        400: 'rgb(155 153 148)',
        300: 'rgb(183 181 172)',
        200: 'rgb(206 205 195)',
        150: 'rgb(218 216 206)',
        100: 'rgb(230 240 229)',
        50: 'rgb(242 244 237)',
        paper: 'rgb(248 244 237)',
        white: 'rgb(248 244 237)',
        red: {
          DEFAULT: 'rgb(151 72 79)',
          light: 'rgb(209 100 105)',
        },
        orange: {
          DEFAULT: 'rgb(0 0 0)',
          light: 'rgb(0 0 0)',
        },
        yellow: {
          DEFAULT: 'rgb(161 122 44)',
          light: 'rgb(219 181 96)',
        },
        green: {
          DEFAULT: 'rgb(115 121 44)',
          light: 'rgb(166 174 90)',
        },
        cyan: {
          DEFAULT: 'rgb(64 116 103)',
          light: 'rgb(114 175 160)',
        },
        blue: {
          DEFAULT: 'rgb(76 114 136)',
          light: 'rgb(119 175 202)',
        },
        purple: {
          DEFAULT: 'rgb(0 0 0)',
          light: 'rgb(0 0 0)',
        },
        magenta: {
          DEFAULT: 'rgb(161 106 141)',
          light: 'rgb(193 147 176)',
        },
      },
    },
  },
});
