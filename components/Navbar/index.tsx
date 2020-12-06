import { useState } from 'react'
import Link from "next/link"
// import { connectMetamask, getAddress, getNetwork } from '../../scripts/eth';
// import { toast } from 'react-toastify';
import { ToggleMode, NavMenu, Btn } from '../Button';

import  NavbarDropDown from './NavbarDropDown'
import { formatConnected } from '../handlers';

export default function Navbar({setAddress, currentTheme, address, theme, setTheme }) {

  const [menuOpen, setMenuOpen] = useState(false)
	return (
		<header className='absolute top-0 left-0 h-16 md:h-20 w-full px-2 md:px-20 flex flex-wrap items-center justify-between'>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="swipswap logo" className="h-6 md:h-10" />
        </a>
      </Link>
        <span className='relative flex flex-wrap items-center justify-between w-210 md:w-300'>
          <Btn
            disabled={!!address}
            handleClick={setAddress}
            theme={theme.headerBtn}
            btnText={formatConnected(address)}
            className="h-6 md:h-10 w-32 md:w-40"
          />
          <ToggleMode currentTheme={currentTheme} theme={theme} setTheme={setTheme}/>
          <NavMenu lightTheme={theme} menuOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)}/>
          {menuOpen && <NavbarDropDown />}
        </span>
		</header>
	);
}
