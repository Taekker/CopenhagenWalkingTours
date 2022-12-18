/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      // Web
      H1medium: "2.8rem",
      H1large: "4rem",
      H2medium: "1.8rem",
      H2large: "2rem",
      H3: "1.6rem",

      NavMedium: "1.2rem",
      NavLarge: "1.3rem",
      H5: "0.9rem",
      H6: "0.6rem",
      P: "1rem",

      // Mobil
      mH1forside: "1.6rem",
      mH1: "1.93rem",
      mH2: "1.4rem",
      mBTN: "1.3rem",
      mH3: "1.1rem",
      mH4: "0.9rem",
      mH5: "0.7rem", //unødvendig?
      mP: "0.9rem",
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
        4: ".70",
        5: ".80",
        6: ".95",
      },
      // Font Family
      fontFamily: {
        Korolev: "'Korolev', serif",
        Roboto: "'Roboto', serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
