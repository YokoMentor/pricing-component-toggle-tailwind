/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      bg: "hsl(240, 78%, 98%)",
      "toggle-label": "hsl(234, 14%, 74%)",
      "primary-text": "hsl(233, 13%, 49%)",
      white: "#ffffff",
      price: "hsl(232, 13%, 33%)",
      "light-purple": "hsl(236, 72%, 79%)",
      "dark-purple": "hsl(237, 63%, 64%)",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "bg-top": "url('./images/bg-top.svg')",
        "bg-bottom": "url('./images/bg-bttom.svg')",
      },
    },
  },
};
