import { useState } from 'react'
import { supportedPools } from '../handlers'

const Question = () => {
  return (
    <svg className='inline ml-2' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 0C3.80603 0 0 3.80603 0 8.5C0 13.194 3.80603 17 8.5 17C13.194 17 17 13.194 17 8.5C17 3.80603 13.194 0 8.5 0ZM8.5 15.558C4.6029 15.558 1.44196 12.3971 1.44196 8.5C1.44196 4.6029 4.6029 1.44196 8.5 1.44196C12.3971 1.44196 15.558 4.6029 15.558 8.5C15.558 12.3971 12.3971 15.558 8.5 15.558Z" fill="black"/>
      <path d="M10.6175 4.79443C10.0483 4.29543 9.29695 4.02222 8.50007 4.02222C7.7032 4.02222 6.95186 4.29733 6.38266 4.79443C5.79069 5.3124 5.46436 6.00871 5.46436 6.75436V6.89856C5.46436 6.98204 5.53266 7.05034 5.61614 7.05034H6.52686C6.61034 7.05034 6.67864 6.98204 6.67864 6.89856V6.75436C6.67864 5.91764 7.49639 5.2365 8.50007 5.2365C9.50375 5.2365 10.3215 5.91764 10.3215 6.75436C10.3215 7.34443 9.90409 7.88516 9.2571 8.13371C8.85487 8.2874 8.51335 8.55681 8.2686 8.90972C8.02005 9.27021 7.89103 9.7028 7.89103 10.1411V10.549C7.89103 10.6325 7.95933 10.7008 8.04282 10.7008H8.95353C9.03701 10.7008 9.10532 10.6325 9.10532 10.549V10.1183C9.1063 9.93412 9.16276 9.7545 9.26734 9.60288C9.37192 9.45125 9.51976 9.33466 9.69159 9.26831C10.811 8.83762 11.5339 7.85101 11.5339 6.75436C11.5358 6.00871 11.2094 5.3124 10.6175 4.79443ZM7.74114 12.674C7.74114 12.8753 7.8211 13.0683 7.96343 13.2106C8.10575 13.353 8.29879 13.4329 8.50007 13.4329C8.70135 13.4329 8.89439 13.353 9.03671 13.2106C9.17904 13.0683 9.259 12.8753 9.259 12.674C9.259 12.4727 9.17904 12.2797 9.03671 12.1374C8.89439 11.995 8.70135 11.9151 8.50007 11.9151C8.29879 11.9151 8.10575 11.995 7.96343 12.1374C7.8211 12.2797 7.74114 12.4727 7.74114 12.674Z" fill="black"/>
    </svg>
  )
}

const ArrowDown = () => {
  return (
    <svg className='inline ml-4' width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 7L13.4188 5.52423L8.61823 10.0048V0H6.38176V10.0048L1.58118 5.52423L0 7L7.5 14L15 7Z" fill="#555353"/>
    </svg>
  )
}

const searchName=(value, setPools)=>{
  if(value.length === 0) {
    setPools(supportedPools)
  } else { 
    const result = supportedPools.filter(p => p.label.includes(value.toUpperCase()))
    setPools(result)
  }
}

const Layout = ({ theme, children }: {children:any, theme:Theme}) => {
  
  const [menuOpen, toggleMenu] = useState(false)
  const [pools, setPools] = useState(supportedPools)
  

  return (
    <main className={`relative block h-screen pt-1 w-full bg-hero-bg-img ${theme.bgCol} bg-no-repeat bg-cover bg-center`}>
        {children}
    </main> 
  )
}
export default Layout
