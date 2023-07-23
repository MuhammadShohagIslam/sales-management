/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4d4800",
        secondary: "#6d712e",
        accent: "#ebd8be",
        lightGray: "#E6E6E6",
        darkBg: "#1F2937",
        deepDarkBg: "#18202b",
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [require("daisyui"),  require('tailwind-scrollbar')],
};
