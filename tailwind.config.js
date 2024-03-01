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
        info: "#5881ff",
        success: "#36d399",
        warning: "#FFDB67",
        error: "#ff8369",
      }
    },
  },

  // daisyUI config
  daisyui: {
    themes: [
      {
        default: {},
      }
    ]
  },

  plugins: [require("daisyui")],
}

