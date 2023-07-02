/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        homeBg: "url('./src/assets/homeBg.jpg')",
        aboutBg: "url('./src/assets/aboutMe.jpg')",
        serviceBg: "url('./src/assets/serviceBg.jpg')",
        educationBg: "url('./src/assets/educationBg.jpg')",
        contactBg: "url('./src/assets/contactBg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
