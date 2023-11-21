/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#C8E6C9",
        green: "#2E7D32",
        black: "rgba(0, 0, 0, 0.87)",
        white: "rgba(255, 255, 255, 0.87)",
        whiteGray: "rgba(255, 255, 255, 0.60)",

        gray: "#2B2D35",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
