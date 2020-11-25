import { useState } from "react"
import { handleComponentSwitch } from "../handlers"

export default function Switch({MainComponent, OtherComponent, mainText, otherText, handleClick, lightTheme}){
    const [isMain, setIsMain] = useState(true)
    const styleCheck = lightTheme ? 'bg-white' : 'bg-swip-deep'

    const className=`w-1/2 ${lightTheme ? 'text-swip-deep-500' : 'text-white'} rounded-lg outline-none focus:outline-none font-bold p-4`
    const translation = `transition duration-1000 ease-in-out transform ${isMain ? "" : "translate-x-full"}`
    const switchClassName=`rounded-lg p-4 block w-1/2 ${lightTheme ? 'bg-swip-light' : 'bg-swip-deep-500'} rounded-lg outline-none focus:outline-none absolute top-0 font-bold text-white ${translation}`
    return (
        <div className="w-full max-w-md m-auto h-480">
            <div className={`w-full ${styleCheck} rounded-lg border border-swip-light relative mb-6`}>
                <a>
                    <button name="main" className={className} onClick={handleComponentSwitch(true, setIsMain, handleClick)}>{mainText}</button>
                    <button name="other" className={className} onClick={handleComponentSwitch(false, setIsMain, handleClick)}>{otherText}</button>
                    <button data-testid="home-slider" className={switchClassName}>{isMain ? mainText : otherText}</button>
                </a>
            </div>
            <div className="w-full">
                {isMain ? MainComponent: OtherComponent}
            </div>
        </div>
    )
}