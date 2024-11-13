/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./Games/**/*.{js,ts,jsx,tsx}","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        num: ["Nunito", "sans-serif"],
      },
      colors: {
        main: {
          dark: "#1C96C5",
          light: "#EAF9FF",
        },
        secondary: {
          light: "#545454",
          dark: "#000000",
        },
        baddo: "#COCOCO",
        bg: "#FBFBFB",
        input: "#F9F9F9",
      },
    },
  },
  plugins: [],
});

// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });
