/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFDD5',
        'off-white': '#FAF9F6',
        'muted-yellow': '#FDF5E6',
        'muted-peach': '#F5DE34',
        charcoal: '#36454F',
        chocolate: '#7B3F00',
      },
    },
  },
  variants: {},
  plugins: [],
}
