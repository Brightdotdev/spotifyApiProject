/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      spotifyGreen: "#1ED760",
      spotifyWhiteText: "#ffffff", 
      spotifyBlack: "#121212",
      bgColor: "#191414",
      secondaryText: "#B3B3B3",
      coralColor: "#FF6F61",
      coralTransparent: 'rgba(255, 111, 97, 0.5)',
      bgTransparent: 'rgba(25, 19, 19, .3)' 
    },
    extend: {
      fontFamily: {
        helveticaMedium: ['helveticaMedium', 'sans-serif'], 
        helveticaThin: ['helveticaThin', 'sans-serif'], 
        helveticaThick: ['helveticaThick', 'sans-serif']
      },
      dropShadow: {
        'normalShadow': '0 0 10px rgba(30, 215, 96, 0.8)',
        'extrahadow': '0 0 10px  rgba(30, 215, 96, 1)'

      }
    },
  },
  plugins: [],
}
