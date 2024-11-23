/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jersey20: ['Jersey 20', 'sans-serif'], // Define o nome da fonte
        Jost: ['Jost', 'sans-serif'],
      },
      colors: {
        fundo: '#212b41',
      },
    },
  },
  plugins: [],
}