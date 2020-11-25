import { useState } from 'react'
import { handleFormConnect, supportedPools } from '../components/handlers'
import { ToastContainer } from 'react-toastify'
import Layout from '../components/Layout'
import Switch from '../components/Switch'
import Pool from './pool'
import Swap from './swap'

export default function Home() {
  const [address, setAddress] = useState("")
  const [lightTheme, setTheme] = useState(true)
  const [selectedPair, setSelectedPair] = useState(supportedPools[0])
  const [pool, setPool] = useState(supportedPools[0])
  return (
    <Layout lightTheme={lightTheme} setTheme={setTheme}>
      <main className="bg-white flex align-middle justify-center shadow-lg flex-col">
        <Switch
          lightTheme={lightTheme}
          mainText="SWAP"
          otherText="POOL"
          handleClick={()=>{}}
          MainComponent={<Swap selectedPair={selectedPair} address={address} getAddress={handleFormConnect(setAddress)}/>}
          OtherComponent={<Pool pool={pool} address={address} getAddress={handleFormConnect(setAddress)}/>}
          setSelectedPair={setSelectedPair}
          options={supportedPools}
          setPool={setPool}
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
