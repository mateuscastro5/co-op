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
      gridTemplateRows: {
        layout: 'auto 1fr auto', // Cabeçalho, conteúdo e rodapé
      },
      gridTemplateColumns: {
        layout: '2fr 5fr', // Sidebar 1/4, conteúdo 3/4
      },
    },
  },
  plugins: [],
}