import { useState } from 'react'
import dynamic from "next/dynamic";
import { handleFormConnect, supportedPools } from '../components/handlers'
import { ToastContainer } from 'react-toastify'
import Layout from '../components/Layout'
import Switch from '../components/Switch'
import Pool from '../components/Pool'
import Swap from '../components/Swap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import themes from '../components/Themes'


const allThemes = {
  lightTheme: "lightTheme",
  darkTheme: "darkTheme"
}

const Marquee = dynamic(import('../components/Marquee'), { ssr: false })

export default function Home() {
  const [address, setAddress] = useState("")
  const [currenctTheme, setCurrentTheme] = useState(allThemes.lightTheme)
  const [selectedPair, setSelectedPair] = useState(supportedPools[0])
  const [pool, setPool] = useState(supportedPools[0])
  const theme = themes[currenctTheme]

  const setTheme = () => currenctTheme === allThemes.lightTheme ? setCurrentTheme(allThemes.darkTheme) : setCurrentTheme(allThemes.lightTheme)
  
  return (
    <Layout theme={theme}>
      <Navbar theme={theme} setAddress={handleFormConnect(setAddress)} address={address}/>
      <Marquee />
      <Switch
        theme={theme}
        mainText="SWAP"
        otherText="POOL"
        handleClick={()=>{}}
        MainComponent={<Swap selectedPair={selectedPair} address={address} theme={theme} lightTheme={theme}/>}
        OtherComponent={<Pool theme={theme} pool={pool} address={address} lightTheme={theme}/>}
        setSelectedPair={setSelectedPair}
        options={supportedPools}
        setPool={setPool}
      />
      <Footer setTheme={setTheme} theme={theme}/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="z-50"
      />
      
    </Layout>
  )
}
