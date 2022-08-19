/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'WorkSans'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  prefix: "tw-",
  plugins: [],
};
