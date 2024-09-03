/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "0",
      sm: "500px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        navy: "#263640",
        "light-navy": "#7591A3",
        sky: "#E6F0F4",
        orange: "#FF9900",
        grey: "#929A9F",
        "navy-text": "#263640",
      },
    },
  },
  plugins: [],
};
