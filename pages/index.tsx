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
    <Layout lightTheme={lightTheme} setTheme={setTheme} setAddress={setAddress} address={address}>
      <main className={`bg-white flex align-middle justify-center shadow-2xl flex-col ${lightTheme ? 'ring-swip-light' : 'ring-swip-secondary'} rounded-lg ring-2`}>
        <Switch
          lightTheme={lightTheme}
          mainText="SWAP"
          otherText="POOL"
          handleClick={()=>{}}
          MainComponent={<Swap selectedPair={selectedPair} address={address} lightTheme={lightTheme}/>}
          OtherComponent={<Pool pool={pool} address={address} lightTheme={lightTheme}/>}
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
