/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'WorkSans'", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "custom-mountains": "url('/mountains.jpeg')",
      },
      minHeight: {
        "custom-banner": "500px",
      },
      maxWidth: {
        "custom-letter-spacing": "700px",
      },
      screens: {
        "lg-height": { raw: "(min-height: 700px)" },
      },
    },
  },
  prefix: "tw-",
  plugins: [],
};
