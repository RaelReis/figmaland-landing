/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**.tsx"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
        screens: {
          xl: "1210px",
        },
      },
      backgroundImage: {
        hero: "url(/src/assets/images/hero-bg.png)",
      },
      colors: {
        primary: "#2091F9",
      },
    },
  },
  plugins: [],
};
