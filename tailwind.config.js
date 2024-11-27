/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      8: '#FF542F',
      2: '#BF8273',
      3: '#FAC8B7',
      4: '#E0D5CD',
      5: '#E3E3E1',
      9: '#FF8E7A',
      7: '#23717D',
    },
    extend: {
      boxShadow: {
        button: `
          0px 1px 4px 0px #FAC8B7 inset,
          0px -2px 4px 0px #F27059 inset,
          0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset
        `,
        2: '0px 1px 4px 0px rgba(25, 33, 61, 0.08)',
      },
      default: {
        main: "url('./src/assets/images/background.png')",
      },
    },
  },
  plugins: [],
};
