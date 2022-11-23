/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modals/**/*.{js,ts,jsx,tsx}",
    "./icons/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        checkbox: "0px 0px 0px 1px white inset",
      },
      fontSize: {
        "9px": ".5625rem",
        "40px": "2.5rem",
      },
      lineHeight: {
        "11px": ".6875rem",
        "60px": "3.75rem",
      },
      colors: {
        default: "#7364DB",
        secondary: "#26A64A",
        bg_dark: "#1F2128",
        bg_dark_secondary: "#313442",
        bg_white_secondary: "#E8EDF2",
        primary_white: {
          0: "#FFFFFF",
          50: "#F5F5FA",
          100: "#E2E2EA",
          200: "#C6CBD9",
          300: "#9A9AAF",
          400: "#7E7E8F",
          500: "#656575",
          600: "#535362",
          700: "#2E2E3A",
          800: "#262631",
          900: "#16161E",
          1000: "#07070C",
        },
        primary_dark: {
          0: "#000000",
          50: "#0F0F12",
          100: "#1E1E24",
          200: "#2C2C35",
          300: "#64646F",
          400: "#8B8B93",
          500: "#70707C",
          600: "#8A8A98",
          700: "#A9A9B7",
          800: "#D0D0DA",
          900: "#EAEAF4",
          1000: "#F1F1F1",
        },
        pink: "#f338c3",
        blue: "#0993ec",
        "custom-blue": "#2775FF",
        "custom-green": "#50D1B2",
        "custom-violet": "#7747CA",
        "custom-orange": "#EC8C56",
        "custom-yellow": "#ECE663",
        "custom-indigo": "#5415F1",
        "custom-emerald": "#5EEA8D",
        "custom-fuchsia": "#DD50D6",
        "custom-red": "#E23738",
        "custom-sky": "#0BD6F4",
        "custom-pink": "#FB7BB8",
      },
      backgroundImage: {
        "free-trial": "url('/images/backgrounds/trial.png')",
        "join-community": "url('/images/backgrounds/community.png')",
      },
    },
  },
  plugins: [],
};
