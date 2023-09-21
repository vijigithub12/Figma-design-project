/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#8F20E5',
        'custom-pink': '#ED24CD',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
