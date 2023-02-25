/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize:{
        "normal": "14px"
      },
      boxShadow:{
        "primary": '20px 20px 80px rgba(0, 0, 0, 0.03)'
      }
    },
  },
  plugins: [],
}
