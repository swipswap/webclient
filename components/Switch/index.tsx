import { useState } from "react"
import DropDown from "../DropDown"

import { handleComponentSwitch } from "../handlers"

export default function Switch({ MainComponent, theme, OtherComponent, mainText, otherText, handleClick, setSelectedPair, options, setPool }){
    const {formSwitch} = theme  
    const [isMain, setIsMain] = useState(true)
    const bgStyle = `${formSwitch.bgPri}`

    const className=`w-1/2 p-2 md:p-4 rounded-lg ${formSwitch.sliderCaseTxt} h-full outline-none focus:outline-none font-bold`
    const translation = `transition duration-1000 ease-in-out transform ${isMain ? "" : "translate-x-full"}`
    const switchClassName=`rounded-035 md:rounded-lg p-2 md:p-4 block w-1/2 ${formSwitch.sliderbg} rounded-lg outline-none focus:outline-none absolute top-0 font-bold ${formSwitch.sliderTxt} ${translation}`
    return (
      <div className="mx-6 bg-white md:mx-auto mt-5 md:mt-10 md:max-w-lg m-auto shadow-lg rounded-xl md:rounded-2xl md:rounded-b-3xl overflow-hidden">
        <div className={`w-full h-10 md:h-auto ${bgStyle} shadow-md rounded-md md:rounded-xl overflow-hidden border ${formSwitch.sliderBorder} relative`}>
            <button name="main" className={className} onClick={handleComponentSwitch(true, setIsMain, handleClick)}>{mainText}</button>
            <button name="other" className={className} onClick={handleComponentSwitch(false, setIsMain, handleClick)}>{otherText}</button>
            <button data-testid="home-slider" className={switchClassName}>{isMain ? mainText : otherText}</button>
        </div>
				<div className={`${bgStyle} px-4 md:px-6 pt-4 md:pt-6 pb-3 ${formSwitch.note} font-sans text-xs bg-black`}>
          <div className="w-full" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ullamcorper est sollicitudin</div>
          <DropDown theme={theme} options={options} name={isMain ? 'address' : 'pool'} changeHandler={isMain ? setSelectedPair : setPool} />
				</div>
        <div className="w-full">
          {isMain ? MainComponent: OtherComponent}
        </div>
      </div>
    )
}