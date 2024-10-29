/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#A8DADC', // Soft pastel blue
        secondary: '#F1FAEE', // Soft pastel green
        accent: '#457B9D', // Darker shade for accents
        background: '#F7F9FB', // Very light background
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
