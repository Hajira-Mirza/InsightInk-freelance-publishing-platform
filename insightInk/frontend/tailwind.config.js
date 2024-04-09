/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein300: "slidein 1s ease 300ms forwards",
        slidein500: "slidein 1s ease 500ms forwards",
        slidein700: "slidein 1s ease 700ms forwards",
        slidein900: "slidein 1s ease 900ms forwards",
        slidein1100: "slidein 1s ease 1100ms forwards",
        slidein1300: "slidein 1s ease 1300ms forwards",
        slidein1500: "slidein 1s ease 1500ms forwards",
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
      },
    },
    screens: {
      sm: "480px",
      "sm-min": { min: "0px" },
      "sm-max": { max: "480px" },
      md: "768px",
      "md-min": { min: "481px" },
      "md-max": { max: "768px" },
      lg: "1279px",
      "lg-min": { min: "769px" },
      "lg-max": { max: "1024px" },
      xl: "1280px",
      "xl-min": { min: "1025px" },
      "xl-max": { max: "1440px" },
      "2xl": "2560px",
      "2xl-min": { min: "1441px" },
      "2xl-max": { max: "2560px" },
    },
  },
  plugins: [],
};
