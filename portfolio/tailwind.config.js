/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FEE7ED", // Дуже світлий рожевий
          DEFAULT: "#E8C5CC", // Ніжний рожевий
          dark: "#CDB2B9", // Теплий рожево-коричневий
        },
        accent: {
          DEFAULT: "#A2656D", // Насичений рожево-бордовий
        },
        neutral: {
          DEFAULT: "#A98B93", // Сіро-коричневий
        },
      },
    },
  },
  plugins: [],
};


