module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nub-purple": "#5267DF",
        "nub-red": "#FA2929",
        "nub-blue": "#242A45",
        "nub-grey": "#9194A2",
        "nub-white": "#f7f7f7",
        "nub-black": "#000000",
        "nub-black-bg": "#070707"
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px" 
      }
    }
  },
  plugins: [],
}