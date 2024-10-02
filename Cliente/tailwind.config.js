/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Asegúrate de incluir tus rutas
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}