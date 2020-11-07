import { useState } from "react"
import { handleComponentSwitch } from "../handlers"

export default function Switch({MainComponent, OtherComponent, mainText, otherText, handleClick}){
    const [isMain, setIsMain] = useState(true)
    const className="w-1/2 h-full text-blue-800 rounded-lg outline-none focus:outline-none"
    const translation = `transition duration-1000 ease-in-out transform ${isMain ? "" : "translate-x-full"}`
    const switchClassName=`h-full block w-1/2 bg-blue-800 rounded-lg outline-none focus:outline-none absolute top-0 text-white ${translation}`
    return (
        <div className="w-full max-w-md m-auto h-480">
            <div className="w-full h-10 bg-white rounded-lg border border-blue-800 relative mb-6">
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