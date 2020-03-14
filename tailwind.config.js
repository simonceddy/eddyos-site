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
          'VT323',
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
