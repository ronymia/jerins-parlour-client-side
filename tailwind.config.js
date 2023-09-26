/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins', sans-serif"],
      },
      colors: {
        primary: "#F63E7B",
        gray: "#707070",
      }
    },
  },
  plugins: [],
}

