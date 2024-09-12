/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "light-cyan": "hsl(193, 38% 86%)",
      "neon-green": "hsl(150, 100%, 66%)",
      "grayish-blue": "hsl(217, 19%, 38%)",
      "dark-grayish-blue": "hsl(217, 19%, 24%)",
      "dark-blue": "hsl(218, 24%, 16%)",
    },
    extend: {
      fontFamily: {
        Manrope: ["sans-serif"],
      },
    },
  },
  plugins: [],
};
