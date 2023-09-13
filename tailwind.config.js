/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'stone-50': '#D9D9D9',
    },
    extend: {
      borderRadius: {
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
}

