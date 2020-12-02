import { useState } from "react"
import DropDown from "../DropDown"

import { handleComponentSwitch } from "../handlers"

export default function Switch({ MainComponent, theme, OtherComponent, mainText, otherText, handleClick, setSelectedPair, options, setPool }){
    const {formSwitch} = theme  
    const [isMain, setIsMain] = useState(true)
    const bgStyle = `bg-${formSwitch.bgPri}`

    const className=`w-1/2 p-2 md:p-4 rounded-lg text-${formSwitch.sliderCaseTxt} h-full outline-none focus:outline-none font-bold`
    const translation = `transition duration-1000 ease-in-out transform ${isMain ? "" : "translate-x-full"}`
    const switchClassName=`rounded-xl md:rounded-09 p-2 md:p-4 block w-1/2 bg-${formSwitch.sliderbg} rounded-lg outline-none focus:outline-none absolute top-0 font-bold text-${formSwitch.sliderTxt} ${translation}`
    return (
      <div className="mx-2 md:mx-auto mt-5 md:mt-10 md:max-w-lg m-auto rounded-xl md:rounded-2xl md:rounded-b-3xl overflow-hidden">
        <div className={`w-full ${bgStyle} rounded-xl md:rounded-2xl overflow-hidden border border-${formSwitch.sliderBorder} relative`}>
            <button name="main" className={className} onClick={handleComponentSwitch(true, setIsMain, handleClick)}>{mainText}</button>
            <button name="other" className={className} onClick={handleComponentSwitch(false, setIsMain, handleClick)}>{otherText}</button>
            <button data-testid="home-slider" className={switchClassName}>{isMain ? mainText : otherText}</button>
        </div>
				<div className={`${bgStyle} md:h-36 px-3 md:px-6 pt-6 pb-3 text-${formSwitch.note} font-sans text-xs`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, corporis. Nobis dolor officiis doloribus adipisci!
				<div className='pt-4 md:pt-8 px-6'>
					<DropDown theme={theme} options={options} name={isMain ? 'address' : 'pool'} changeHandler={isMain ? setSelectedPair : setPool} />
				</div>
				</div>
        <div className="w-full">
          {isMain ? MainComponent: OtherComponent}
        </div>
      </div>
    )
}