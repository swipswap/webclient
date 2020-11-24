module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'swip-light': '#EACEF6',
        'swip-deep': '#37283E',
        'swip-deep-500': '#56246B',
        'swip-primary': '#63277D',
        'swip-secondary1': '#CEA5E0',
        'swip-secondary': '#4C3552',
        'swip-drop-down': '#FFF',
        'swip-input': '#F9F0FC',
        "sessn-id": "#8e8484",
        "send-test": "#737373",
        "qr-border": "77C2D4"
      },
      backgroundImage: theme => ({
        'hero-light': `url('/swipswap-hero-light.svg')`,
        'hero-dark': `url('/swipswap-hero-dark.svg')`,
        'ens-hero-light': `url('https://ipfs.io/ipfs/QmUFE27rNMvwKtB1dVrP4njX7MucjEe2vg9RciM2Heveie/swipswap-hero-light.svg')`,
        'ens-hero-dark': `url('https://ipfs.io/ipfs/QmUFE27rNMvwKtB1dVrP4njX7MucjEe2vg9RciM2Heveie/swipswap-hero-dark.svg')`,
      }),
      height: {
        'hero-big': "85%",
        'hero-small': "65%",
        header: "15%",
        "550": "550px"
      },
      width: {
        'hero-big': '40rem',
        'hero-mid': '35rem',
        'hero-txt': '290px',
        "300": "300px"
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
  variants: {},
  plugins: [],
}