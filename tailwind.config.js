/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Vue3 + Vite 用
  ],
  theme: {
    extend: {
      colors: {
        base: "#FFFFFF",
        text: {
          primary: "#333333",
          secondary: "#666666",
        },
        accent: {
          DEFAULT: "#C1835E",
          dark: "#A76B47", // hover 用
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', "sans-serif"],
        title: ['"Montserrat"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
