/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      boxShadow: {
        'golden-glow': '0 0 20px 0 rgba(207, 181, 59, 0.75)',
      },
    },
  },
  plugins: [],
}

