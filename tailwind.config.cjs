/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  theme: {
    extend: {
      colors: {
        primary: '#0052FF',
        dark: '#0A0B0D',
        light: '#FCFCFC',
        grey: '#2C313A'
      },
      fontFamily: {
        mullish: ['mullish', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-children'),
  ],
}