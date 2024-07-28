import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      fontSize: {
        sm: 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
        base: 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
        lg: 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
        xl: 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
        '2xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
        '3xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
        '4xl': 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)',
        '5xl': 'clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)',
        '6xl': 'clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'auto-fill': (value) => ({
            gridTemplateColumns: `repeat(auto-fill, minmax(min(${value}, 100%), 1fr))`,
          }),
          'auto-fit': (value) => ({
            gridTemplateColumns: `repeat(auto-fit, minmax(min(${value}, 100%), 1fr))`,
          }),
        },
        {
          values: theme('width', {}),
        },
      );
    }),
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: '#fafafa',
            foreground: '#18181b',
            primary: {
              '50': '#eef5ff',
              '100': '#e1ecfe',
              '200': '#c8dcfd',
              '300': '#a7c4fa',
              '400': '#7f9ff5',
              '500': '#6681ee',
              '600': '#4a5de1',
              '700': '#3b49c7',
              '800': '#3340a0',
              '900': '#303b7f',
              DEFAULT: '#6681ee',
              foreground: '#eef5ff',
            },
            focus: '#c8dcfd',
          },
        },
        dark: {
          colors: {
            background: '#18181b',
            foreground: '#f4f4f5',
            primary: {
              '50': '#303b7f',
              '100': '#3340a0',
              '200': '#3b49c7',
              '300': '#4a5de1',
              '400': '#6681ee',
              '500': '#7f9ff5',
              '600': '#a7c4fa',
              '700': '#c8dcfd',
              '800': '#e1ecfe',
              '900': '#eef5ff',
              DEFAULT: '#6681ee',
              foreground: '#eef5ff',
            },
            focus: '#3b49c7',
          },
        },
      },
    }),
  ],
};
export default config;
