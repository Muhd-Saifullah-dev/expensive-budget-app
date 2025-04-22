/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        expenses: '#7e69ab',
        expenseLight: '#9b87f5',
        expenseDark: '#6259a5',
      }
    },
  },
  plugins: [],
}