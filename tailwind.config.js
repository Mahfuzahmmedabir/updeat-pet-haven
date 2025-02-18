// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'pet-haven1': "url('/src/assets/chris-tweten-ff5zmpoTLgs-unsplash.jpg')",
        'pet-haven2': "url('/src/assets/lodewijk-hertog-7j4i2p-lVMc-unsplash.jpg')" ,
        'pet-haven3': "url('/src/assets/jametlene-reskp-VDrErQEF9e4-unsplash.jpg')" ,
        'pet-haven4': "url('/src/assets/nathan-anderson-qZJajnlnPSw-unsplash.jpg')",
      },
    },
  },
  plugins: [],
});
