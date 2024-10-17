/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ['"Open Sans"', "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        custblue: "#0a1172",
        driveblue: "#1320d8",
      },
    },
  },
  plugins: [],
};
