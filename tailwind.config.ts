import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx,json}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#192a3d',
          dark: '#1e293b',
          header: '#2c3e50',
          blue: '#162d9e',
          accent: '#2563eb',
          softBlue: '#f0f4f9',
          lightPeach: '#ffedd5',
          peachText: '#c2410c',
          cream: '#fafbfc',
          border: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
