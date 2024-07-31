/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "485px" },
      md: { max: "600px" },
      lg: { max: "800px" },
      xl: { max: "1200px" },
      "2xl": { max: "1480px" },
    },
  },
  plugins: [],
};
