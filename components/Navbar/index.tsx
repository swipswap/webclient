import { useState } from 'react'
import Link from "next/link"
// import { connectMetamask, getAddress, getNetwork } from '../../scripts/eth';
import { toast } from 'react-toastify';
import Logo from "../Logo"
import Button, { ToggleMode, NavMenu } from '../Button';


export default function Navbar({ menuOpen, setMenuOpen, theme, setTheme }) {
	const [ethAddress, setEthAddress] = useState("")
  const [ethNetwork, setEthNetwork] = useState("")

	return (
		<header className='absolute lg:px-10 lg:w-full'>
      <nav className='flex items-center justify-between pt-4'>
        <Link href="/">
          <a >
            <Logo theme={theme} classname="h-6 md:h-10 md:mb-2"/>
          </a>
        </Link>
        <div>
          <span className='flex flex-wrap items-center'>
            <Button theme={theme} text={'Connect Wallet'}/>
            <ToggleMode theme={theme} setTheme={setTheme}/>
            <NavMenu theme={theme} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          </span>
        </div>			
      </nav>
		</header>
	);
}