import { useState } from "react"
import DropDown from "../DropDown"

import { handleComponentSwitch } from "../handlers"

export default function Switch({ MainComponent, OtherComponent, mainText, otherText, handleClick, lightTheme, setSelectedPair, options, setPool }){
		const [isMain, setIsMain] = useState(true)
    const bgStyle = lightTheme ? 'bg-white' : 'bg-swip-deep'

    const className=`w-1/2 ${lightTheme ? 'text-swip-deep-500' : 'text-white'} rounded-lg h-full outline-none focus:outline-none font-bold p-4`
    const translation = `transition duration-1000 ease-in-out transform ${isMain ? "" : "translate-x-full"}`
    const switchClassName=`rounded-lg p-4 block w-1/2 ${lightTheme ? 'bg-swip-light' : 'bg-swip-deep-500'} rounded-lg outline-none focus:outline-none absolute top-0 font-bold text-white ${translation}`
    return (
      <>
        <div className={`w-full ${bgStyle} rounded-lg border border-swip-light relative`}>
          <a>
            <button name="main" className={className} onClick={handleComponentSwitch(true, setIsMain, handleClick)}>{mainText}</button>
            <button name="other" className={className} onClick={handleComponentSwitch(false, setIsMain, handleClick)}>{otherText}</button>
            <button data-testid="home-slider" className={switchClassName}>{isMain ? mainText : otherText}</button>
          </a>
        </div>
				<div className={`${bgStyle} h-36 px-6 pt-6 pb-3 text-swip-form-text font-sans text-xs`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, corporis. Nobis dolor officiis doloribus adipisci!
				<div className='pt-12 px-6'>
					<DropDown lightTheme={lightTheme} options={options} name={isMain ? 'address' : 'pool'} changeHandler={isMain ? setSelectedPair : setPool} />
				</div>
				</div>
        <div className="w-full">
          {isMain ? MainComponent: OtherComponent}
        </div>
      </>
    )
}