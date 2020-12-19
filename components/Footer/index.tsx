import { ToggleMode } from "../Button";
import SocialLinks from "../SocialLinks";

export default function Footer({ theme, setTheme }){
  return(
    <div className={`bottom-0 w-full flex items-center justify-between px-6 md:px-20 h-12 md:h-20 mx-auto ${theme.footer.bg}`}>
      <nav>
        <ul className="flex items-center justify-between w-32 md:w-48 text-xs md:text-sm">
          {["About","Docs","API"].map(item => <MenuItem key={item} text={item} />)}
        <ToggleMode setTheme={setTheme} theme={theme} />
        </ul>
      </nav>
      <SocialLinks theme={theme} />
    </div>
  )
}

const MenuItem = ({text}) =>
  <li className="text-brownish hover:text-swip-primary cursor-pointer">
    {text}
  </li>
