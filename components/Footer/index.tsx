import { ToggleMode } from "../Button";
import SocialLinks from "../SocialLinks";

export default function Footer({ lightTheme, setTheme }){
  const bgMode = !lightTheme ? 'bg-swip-deep' : ''
  return(
    <div className={`py-5 tabets:px-40 px-5 ${bgMode}`}>
      <div className='tablets:w-5/6 flex justify-between h-1/6 mx-auto'>
        <div className='flex tablets:w-1/3 tablets:justify-between'>
          <p className={`${lightTheme ? 'text-dark' : 'text-white' } text-sm pt-2 mr-2`}>About</p>
          <p className={`${lightTheme ? 'text-dark' : 'text-white' } text-sm pt-2 mr-2`}>API</p>
          <p className={`${lightTheme ? 'text-dark' : 'text-white' } text-sm pt-2 mr-2`}>Docs</p>
          <ToggleMode lightTheme={lightTheme} setTheme={setTheme}/>
          <p className={`${lightTheme ? 'text-dark' : 'text-white' } text-sm pt-2 mr-2`}>Toggle Light/Dark</p>
        </div>
        <div>
          <SocialLinks lightTheme={lightTheme} />
        </div>
      </div>
    </div>
  )
}