/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ED7839",
        secondary: "#ECECEC",
        textPrimary: "#725C5C",
        textSecondary: "#f8fafc",
        border: "#E7E7E7",
        bgText: "#FDF1EB",
      },

      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
