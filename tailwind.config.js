/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        mypageButton:
          '0px 1px 4px 0px #FAC8B7 inset, 0px -2px 4px 0px #F27059 inset, 0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset',
      },
      backgroundImage: {
        main: "url('./src/assets/images/background.png')",
      },
    },
  },
  plugins: [],
};
