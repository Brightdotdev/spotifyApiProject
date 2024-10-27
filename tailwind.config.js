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
      bgTransparent: 'rgba(25, 19, 19, .8)' 
    },
    extend: {
      fontFamily: {
        helveticaMedium: ['helveticaMedium', 'sans-serif'], 
        helveticaThin: ['helveticaThin', 'sans-serif'], 
        helveticaThick: ['helveticaThick', 'sans-serif']
      },
      dropShadow: {
        'normalShadow': '0 0 10px  rgba(255, 111, 97, 0.3)',
        'extrahadow': '0 0 10px   rgba(255, 111, 97, 0.8)'

      },
        backgroundImage: {
        'custom-gradient': 'radial-gradient(circle at 130% 170%,#FF6F61 20% , #191414 50%, #191414 )',
        'smallScreengradient': 'radial-gradient(circle at 130% 150%,#FF6F61 20% , #191414 50%, #191414 )',
        'hederGradient': 'linear-gradient(45deg,rgba(255, 111, 97, 0.2), rgba(255, 111, 97, 0.3))',
        'topArtistsGradient': 'radial-gradient(circle at 130% 170%, #1ED760 20%, #191414 50%, #191414)',
        'topArtistsGradientSmallScreen': 'radial-gradient(circle at 130% 150%, #1ED760 20%, #191414 50%, #191414)'
      
      },
    },
  },
  plugins: [],
}
