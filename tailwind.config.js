const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Montserrat',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          'Roboto Mono',
          ...defaultTheme.fontFamily.mono
        ]
      }
    }
  },
  variants: [
    'hover', 'responsive', 'active',
  ],
  plugins: [],
};
