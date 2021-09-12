const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        cursive: ["Lobster"],
        cursiveTwo: ['"Lobster Two"'],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#000066",
        secondary: "#006600",
        tertiary: "#660000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
