const themes : {[key: string]: Theme} = {
    lightTheme: {
      currentTheme: "lightTheme",
      bgCol: "light-bg",
      headerBtn: {
        bg: "white",
        txt: "swip-primary",
        hbg: "swip-light",
        htxt: "swip-primary"
      },
      footer: {
        bg: "white",
        txt: ""
      },
      swapForm: {
        bgPri: "white",
        bgSec: "swip-deep"
      },
      formSwitch: {
        bgPri: "white",
        sliderBorder: "swip-light",
        sliderCasebg: "",
        sliderCaseTxt: "swip-deep-500",
        sliderbg: "pinkish",
        sliderTxt: "white",
        note: "swip-form-text",
      },
      swap: {
        balTxt: "black",
        bgPri: "white",
        bgSec: "swip-light-100",
      },
      pool: {}
    },
    darkTheme: {
      currentTheme: "darkTheme",
      bgCol: "bg-swip-deep-300",
      headerBtn: {
        txt: "white",
        hbg: "swip-light",
        bg: "swip-light",
        htxt: "white"
      },
      footer: {
        bg: "swip-deep",
        txt: ""
      },
      swapForm: {
        bgPri: "swip-deep",
        bgSec: "swip-deep"
      },
      formSwitch: {
        bgPri: "swip-deep",
        sliderCaseTxt: "white",
        sliderbg: "swip-deep-500",
        sliderTxt: "white",
        note: "swip-form-text",
      },
      swap: {
        balTxt: "white",
        bgPri: "swip-deep",
        bgSec: "swip-deep-300",
      },
      pool: {}
    },
  }
export default themes