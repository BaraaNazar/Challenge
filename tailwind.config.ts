/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          `'Inter var', ${defaultTheme.fontFamily.sans.join(', ')}`,
          { fontFeatureSettings: "'cv02', 'cv03', 'cv04', 'cv11'" },
        ],
      },
    },
  },
  plugins: [],
};
