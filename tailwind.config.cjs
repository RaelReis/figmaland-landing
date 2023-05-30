/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**.tsx"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "3rem",
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
        base: {
          title: "#252B42",
          text: "#374754",
          input: "#F4F4F4",
        },
      },
      boxShadow: {
        video: "0 0 65px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
