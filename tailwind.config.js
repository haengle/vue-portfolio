/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ['Quicksand', 'sans-serif'],
        "display": ['Abril Fatface', 'serif']
      },
      colors: {
        "blackblue": "#0b132b",
        "darkblue": "#1c2541",
        "midblue": "#3a506b",
        "teal": "#5bc0be",
        "aqua": "#6fffe9",
      }
    },
  },
  plugins: [],
}
