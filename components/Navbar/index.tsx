import { useState } from 'react'
import Link from "next/link"
// import { connectMetamask, getAddress, getNetwork } from '../../scripts/eth';
import { toast } from 'react-toastify';
import Logo from "../Logo"
import Button, { ToggleMode, NavMenu } from '../Button';

export { default as NavbarDropDown } from './NavbarDropDown'

export default function Navbar({ menuOpen, toggleMenu, lightTheme, setTheme, setAddress, address }) {
	const [ethAddress, setEthAddress] = useState("")
  const [ethNetwork, setEthNetwork] = useState("")
	return (
		<header className='absolute lg:px-10 lg:w-full'>
      <nav className='flex items-center justify-between pt-4'>
        <Link href="/">
          <a >
            <Logo lightTheme={lightTheme} classname="h-6 md:h-10 md:mb-2"/>
          </a>
        </Link>
        <div>
          <span className='flex flex-wrap items-center'>
            <Button lightTheme={lightTheme} setAddress={setAddress} address={address}/>
            <ToggleMode lightTheme={lightTheme} setTheme={setTheme}/>
            <NavMenu lightTheme={lightTheme} menuOpen={menuOpen} toggleMenu={toggleMenu}/>
          </span>
        </div>			
      </nav>
		</header>
	);
}
