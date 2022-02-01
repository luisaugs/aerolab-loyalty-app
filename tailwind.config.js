module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { 
        'tbt': '1010px',
        // => @media (min-width: 1010px) { ... }
        'dsk': '1900px',
        // => @media (min-width: 1900px) { ... }
      },
      animation: {
        animaOpacity: 'animaOpacity .5s',
        bounceOp: 'bounce-op .3s'
      },
      dropShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.05)',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'top': '0 -5px 8px 10px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        'D-TITLE-L1': ['200px', {
          letterSpacing: '0',
          lineHeight: '80%',
        }],
        'D-TITLE-L2': ['48px', {
          letterSpacing: '0',
          lineHeight: '80%',
        }],
        'D-TITLE-L3': ['32px', {
          letterSpacing: '0',
          lineHeight: '100%',
        }],
        'D-TEXT-L1-Default': ['18px', {
          letterSpacing: '0',
          lineHeight: '150%',
        }],
        'D-TEXT-L1-All': ['18px', {
          letterSpacing: '24%',
          lineHeight: '150%',
        }],
        'D-TEXT-L2-Default': ['14px', {
          letterSpacing: '0%',
          lineHeight: '150%',
        }],
        'D-TEXT-L2-All': ['14px', {
          letterSpacing: '5%',
          lineHeight: '150%',
        }],
        'M-TITLES-L1': ['96px', {
          letterSpacing: '0%',
          lineHeight: '80%',
        }],
        'M-TITLES-L2': ['32px', {
          letterSpacing: '0%',
          lineHeight: '80%',
        }],
        'M-TITLES-L3': ['24px', {
          letterSpacing: '0%',
          lineHeight: '100%',
        }],
        'M-TEXT-L1-Default': ['18px', {
          letterSpacing: '0%',
          lineHeight: '150%',
        }],
        'M-TEXT-L1-All': ['18px', {
          letterSpacing: '24%',
          lineHeight: '150%',
        }],
        'M-TEXT-L1-Light': ['18px', {
          letterSpacing: '0%',
          lineHeight: '150%',
        }],
        'M-TEXT-L2-Default': ['14px', {
          letterSpacing: '0%',
          lineHeight: '150%',
        }],
        'M-TEXT-L2-All': ['14px', {
          letterSpacing: '5%',
          lineHeight: '150%',
        }],
      },
      colors: {
        'Neutral900': '#252f3d',
        'Neutral600': '#7c899c',
        'Neutral500': '#8fa3bf',
        'Neutral300': '#dae4f2',
        'Neutral200': '#e6edf7',
        'Neutral100': '#f5f9ff',
        'Neutral0': '#ffffff',
        'Brand-Default-Primary': '#176feb',
        'Brand-Default-Secondary': '#ff80ff',
        'Brand-Default-Primary-Hover': '#1667d9',
        'Brand-Default-Secondary-Hover': '#f279f2',
        'Brand-Light': '#e5f0ff',
        'Brand-Light-2': '#cce1ff',
        'Green-Default': '#29cc74',
        'Green-Light': '#ccffe3',
        'Red-Default': '#e07f4f',
        'Red-Light': '#ffdfd9',
        'Special-Illustration-BG-Dark': '#7296eb',
        'Special-Illustration-BG-Light': '#eac0e9',
        'Special-Section-BG-Dark': '#176feb80',
        'Special-Section-BG-Light': '#ff80ff80',
        'Aerolab-Dark': '#ff6600',
        'Aerolab-Light': '#ff8800',
      }
    },
  },
  plugins: [],
}
