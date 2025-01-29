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
        body: ['"Montserrat Alternates"', "sans-serif"],
        second: ['"Grechen Fuemen"', "cursive"], 
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
          first: "#e61a3c", // hsl(358, 80%, 49%)
          firstAlt: "#d61939", // hsl(358, 76%, 45%)
          white: "#fafafa", // hsl(0, 0%, 98%)
          black: "#030303", // hsl(0, 0%, 1%)
          text: "#acabad", // hsl(358, 2%, 66%)
          body: "#030303", // hsl(358, 100%, 1%) (дуже темний)
          container: "#1a191a", // hsl(358, 2%, 10%)
        },

        dark: {
          DEFAULT: "#A2656D", // Насичений рожево-бордовий
        },

        fontSize: {
          biggest: "2.5rem",
          h1: "1.5rem",
          h2: "1.25rem",
          h3: "1rem",
          normal: ".938rem",
          small: ".813rem",
          smaller: ".75rem",
        },

        screens: {
          "2xl": "1168px", 
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


