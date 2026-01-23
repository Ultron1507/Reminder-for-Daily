/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E94B7A",
        softBg: "#FFF5F7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}
