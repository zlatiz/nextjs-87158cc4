import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        muted: '#6b7280',
        surface: '#ffffff',
        accent: '#9f1239'
      },
      fontFamily: {
        sans: ['Manrope', 'Sora', 'DM Sans', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};

export default config;
