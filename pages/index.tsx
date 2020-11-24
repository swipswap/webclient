import { useState } from 'react'
import { handleFormConnect } from '../components/handlers'
import { ToastContainer } from 'react-toastify'
import Layout from '../components/Layout'
import Switch from '../components/Switch'
import Pool from './pool'
import Swap from './swap'

export default function Home() {
  const [address, setAddress] = useState("")
  const [lightTheme, setTheme] = useState(true)
  return (
    <Layout lightTheme={lightTheme} setTheme={setTheme}>
      <main className="h-full w-full flex align-middle justify-center">
        <Switch
          lightTheme={lightTheme}
          mainText="SWAP"
          otherText="POOL"
          handleClick={()=>{}}
          MainComponent={<Swap address={address} getAddress={handleFormConnect(setAddress)}/>}
          OtherComponent={<Pool address={address} getAddress={handleFormConnect(setAddress)}/>}
        />
      </main>
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
