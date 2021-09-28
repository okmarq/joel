const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        serif: ["Nunito"],
      },
      colors: {
        primary: {
          100: "#9382e3",
          300: "#432ca9",
          main: "#20164f",
          700: "#130f25",
          900: "#030304",
        },
        secondary: {
          100: "#ffd382",
          300: "#f4ab27",
          main: "#725114",
          700: "#352811",
          900: "#060504",
        },
        tertiary: {
          100: "#fffc82",
          300: "#f4ef27",
          main: "#727014",
          700: "#353411",
          900: "#060604",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
