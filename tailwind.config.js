/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkGradient: {
          light: "#f8a8d4", // Soft pink
          DEFAULT: "#e91e63", // Vibrant pink
          dark: "#880e4f", // Deep pink
        },
      },
    },
  },
  plugins: [],
};
