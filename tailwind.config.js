/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        sailec: ["Sailec", "monospace"],
      },
      colors: {
        "blue-c1": "rgba(var(--grad-blue-c1))",
        "blue-c2": "rgba(var(--grad-blue-c2))",
        "orange-c1": "rgba(var(--grad-orange-c1))",
        "orange-c2": "rgba(var(--grad-orange-c2))",
        "multi-c1": "rgba(var(--grad-multi-c1))",
        "multi-c2": "rgba(var(--grad-multi-c2))",
        "multi-c3": "rgba(var(--grad-multi-c3))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
