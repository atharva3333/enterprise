/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'yellow': '#c4ff24',
      'white': '#ffffff',
      'black': '#000000',
      'purple': '#7A0BFF'
    },
    extend: {},
  },
  plugins: [],
}
