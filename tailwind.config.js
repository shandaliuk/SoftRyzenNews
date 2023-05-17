/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: '480px',
      },
      colors: {
        main: '#E2D28C',
        accent: '#C7D1D4',
      },
      boxShadow: {
        strict: '6px 6px 0px 0px',
        strictMini: '3px 3px 0px 0px',
      },
    },
  },
  plugins: [],
};
