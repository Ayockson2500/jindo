/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "770px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      
      colors: {
        jdBlue: '#053BE3',
        jdBlue2: '#365fdb',
        jdBlue3: '#2156FA',
        jdLight: '#FFFFFF',
        jdLightNavy: '#EEF0FF',
        jdLightNavy2: '#F6F9FA',
        jdNavy: '#010334',
        jdGray: '#D6D6D6',
        jdLightGray: '#EFEFEF',
        jdlightBlue: '#D0D6D7',
        jdPink: '#F64D5F',
        jdRed: '#FF2E47'
        
      },
      fontFamily: {
        GilroyBlack: "GilroyBlack",
        GilroyBold: "GilroyBold",
        GilroyExtraBold: "GilroyExtraBold",
        GilroyHeavy: "GilroyHeavy",
        GilroyHeavyItalic: "GilroyHeavyItalic",
        GilroyLight: "GilroyLight",
        GilroyLightItalic: "GilroyLightItalic",
        GilroyMedium: "GilroyMedium",
        GilroyMediumItalic: "GilroyMediumItalic",
        GilroyRegular: "GilroyRegular",
        GilroyRegularItalic: "GilroyRegularItalic",
        GilroySemiBold: "GilroySemiBold",
        
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      },

      height: {
        Hnav: "76px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}


