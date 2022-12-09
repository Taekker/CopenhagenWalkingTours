/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      // Web
      H1: "5rem",
      H2: "4rem",
      H3: "3rem",
      H5: "0.8rem",
      H6: "0.6rem",
      P: "1rem",

      // Mobil
      mH1: "3rem",
      mH2: "2.5rem",
      mH3: "2rem",
      mH4: "1rem",
      mH5: "0.4rem",
      mH6: "0.3rem",
      mP: "0.5rem",
    },
    // Font Family
    fontFamily: {
      Korolev: "'Korolev', serif",
      Roboto: "'Roboto', serif",
    },

    // Font Weight
    fontWeight: {
      thin: 200,
      medium: 500,
      bold: 700,
    },

    // Colors
    colors: {
      black: "#202020",
      pink: "#DA4167",
      white: "#FFFFFF",
      lightgreen: "#E8EDDF",
      darkgreen: "#304B42",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
