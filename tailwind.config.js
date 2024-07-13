/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#E7D5A7",
        "secondary": "#F4ECD7",
        "base-1": "#061528",
        "base-2": "#0c1d34",
      },
    },
  },
}
