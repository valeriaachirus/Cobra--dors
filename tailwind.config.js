/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        '60': '.60',
      }
    },
  },
  plugins: [],
}

