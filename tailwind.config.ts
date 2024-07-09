import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#9C8D8D',
        'primary-2': '#B09F9F',
        'primary-text': '#4F4F4F',
        'white-1': '#FFFFFF',
        'white-2': '#FAFAFA'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
};
export default config;
