/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border|shadow)-(cyan|purple|pink|green|blue|orange|yellow|emerald|red|gray)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /shadow-\[.+\]/,
    }
  ],
}