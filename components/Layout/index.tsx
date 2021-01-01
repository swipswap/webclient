import { useState } from 'react'
import { supportedPools } from '../handlers'

const Layout = ({ theme, children }: {children:any, theme:Theme}) => {
  
  const [menuOpen, toggleMenu] = useState(false)
  const [pools, setPools] = useState(supportedPools)
  

  return (
    <main className={` flex flex-col justify-between relative h-screen pt-1 w-full ${theme.bgCol} bg-bg-img bg-no-repeat bg-cover bg-center`}>
        {children}
    </main> 
  )
}
export default Layout
