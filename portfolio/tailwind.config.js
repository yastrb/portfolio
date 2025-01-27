const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        grechen: ['"Grechen Fuemen"', 'cursive'], 
        montserrat: ['"Montserrat Alternates"', 'sans-serif'], 
      },
      
      animation: {
        aurora: "aurora 60s linear infinite",
      },

      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },

      colors: {
        light: {
          light: "#FEE7ED", // Дуже світлий рожевий
          DEFAULT: "#E8C5CC", // Ніжний рожевий
          dark: "#CDB2B9", // Теплий рожево-коричневий
        },

        dark: {
          DEFAULT: "#A2656D", // Насичений рожево-бордовий
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}


