const themes : {[key: string]: Theme} = {
    lightTheme: {
      currentTheme: "lightTheme",
      bgCol: "light-bg",
      headerBtn: {
        bg: "bg-white",
        txt: "text-swip-primary",
        hbg: "hover:bg-swip-light",
        htxt: "hover:text-swip-primary"
      },
      footer: {
        bg: "bg-white",
        txt: ""
      },
      swapForm: {
        bgPri: "white",
        bgSec: "swip-deep"
      },
      formSwitch: {
        bgPri: "bg-white",
        sliderBorder: "border-swip-light",
        sliderCasebg: "",
        sliderCaseTxt: "text-swip-deep-500",
        sliderbg: "bg-pinkish",
        sliderTxt: "text-white",
        note: "text-swip-form-text",
      },
      swap: {
        balTxt: "text-black",
        bgPri: "bg-white",
        bgSec: "bg-swip-light-100",
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
