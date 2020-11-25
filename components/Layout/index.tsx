import { useState } from 'react'
import Footer from '../Footer'
import Hero from '../Hero'
import Navbar from '../Navbar'

const Layout = ({ children, lightTheme, setTheme, setAddress, address }) => {
  
  const [menuOpen, toggleMenu] = useState(false)
  
  return (
    <>
      <div>
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} lightTheme={lightTheme} setTheme={setTheme} setAddress={setAddress} address={address}/>
      </div>
      <Hero lightTheme={lightTheme}>
        <div className='pt-6 tablets:p-8 font-sans tablets:w-hero-big tablets:px-20 md:w-3/6 mx-auto mb-4'>
          {children}
          </div>
        </Hero>
      <Footer setTheme={setTheme} lightTheme={lightTheme}/>
    </> 
  )
}
export default Layout
