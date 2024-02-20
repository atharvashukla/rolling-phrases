/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        roll: {
          "0%": { transform: "translateY(0)" },
          "12.5%": { transform: "translateY(-1.5rem)" },
          "25%": { transform: "translateY(-3rem)" },
          "37.5%": { transform: "translateY(-4.5rem)" },
          "50%": { transform: "translateY(-6rem)" },
          "62.5%": { transform: "translateY(-7.5rem)" },
          "75%": { transform: "translateY(-9rem)" },
          "87.5%": { transform: "translateY(-10.5rem)" },
          "100%": { transform: "translateY(-12rem)" },
        },
      },
      animation: {
        roll: "roll 16s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
