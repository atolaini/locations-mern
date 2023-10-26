/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navyBlue: '#1A1A2E',
        charcoal: '#2A2A36',
        midnightPurple: '#6200EA',
        copperOrange: '#A65633',
        slateGray: '#708B9E',
        forestGreen: '#1B998B',
        burgundy: '#990000',
      },
    },
  },
  plugins: [],
};
