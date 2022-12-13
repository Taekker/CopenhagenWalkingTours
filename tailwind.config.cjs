/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      // Web
      H1: "5rem",
      H2: "4rem",
      BTN: "3.5rem",
      H3: "3rem",
      H5: "0.8rem",
      H6: "0.6rem",
      P: "1rem",

      // Mobil
      mH1: "1.6rem",
      mH2: "1.4rem",
      mBTN: "1.3rem",
      mH3: "2rem",
      mH4: "0.8rem",
      mH5: "0.7rem", //unødvendig?
      mP: "0.9rem",
    },
    // Font Family
    fontFamily: {
      Korolev: "'Korolev', serif",
      Roboto: "'Roboto', serif",
    },

    // Font Weight
    fontWeight: {
      thin: 300,
      medium: 400,
      bold: 500,
      bolder: 600,
    },
    // Colors
    colors: {
      black: "#202020",
      pink: "#DA4167",
      white: "#FFFFFF",
      lightgreen: "#E8EDDF",
      darkgreen: "#304B42",
      gray: "#6C727F",
    },

    extend: {
      brightness: {
        1: ".35",
        2: ".45",
        3: ".55",
        4: ".65",
        5: ".85",
        6: ".95",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
