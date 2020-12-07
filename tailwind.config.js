module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'eth-blue': '#4E57AF',
        'swip-light': '#EACEF6',
        'swip-light-100': '#F9F0FC' ,
        'swip-light-300':'#A67AB9',
        'swip-deep': '#37283E',
        'swip-deep-300': '#4C3552',
        'swip-deep-500': '#56246B',
        'swip-primary': '#63277D',
        'swip-secondary1': '#CEA5E0',
        'swip-secondary': '#4C3552',
        'swip-drop-down': '#FFF',
        'swip-input': '#F9F0FC',
        'swip-form-text': '#AAA9A9',
        "sessn-id": "#8e8484",
        "send-test": "#737373",
        "qr-border": "#77C2D4",
        "brownish": "#787878",
        
      },
      backgroundImage: theme => ({
        'hero-light': `url('/swipswap-hero-light.svg')`,
        'hero-bg-img': `url('/swipswap-hero-img.png')`,
        'hero-dark': `url('/swipswap-hero-dark.svg')`,
        'bg-img': `url('/bg-img.png')`,
        'ens-hero-light': `url('https://ipfs.io/ipfs/QmUFE27rNMvwKtB1dVrP4njX7MucjEe2vg9RciM2Heveie/swipswap-hero-light.svg')`,
        'ens-hero-dark': `url('https://ipfs.io/ipfs/QmUFE27rNMvwKtB1dVrP4njX7MucjEe2vg9RciM2Heveie/swipswap-hero-dark.svg')`,
      }),
      height: {
        'hero-big': "85%",
        'hero-small': "65%",
        header: "15%",
        "550": "550px",
        "7": "1.7rem",
      },
      width: {
        'hero-big': '40rem',
        'hero-mid': '35rem',
        'hero-txt': '290px',
        "300": "300px",
        "210": "210px"
      },
      borderRadius: {
        "09": "0.9rem"
      },
      padding: {
        'hero-sml': '80px'
      },
      margin: {
        '11rem': '11rem'
      },
      screens: {
        tablets: "539px"
      },
      inset: {
        "lg": "20%",
        "full": "100%",
      },
      fontSize: {
        "2rem": "2rem"
      },
    },
  },
  variants: {
      // borderWidth: ['responsive', 'hover', 'focus', 'active'],
      // backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}