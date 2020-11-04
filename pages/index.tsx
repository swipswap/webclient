import { useState } from 'react'
import { handleFormConnect } from '../components/handlers'
import Layout from '../components/Layout'
import Switch from '../components/Switch'
import Pool from './pool'
import Swap from './swap'

export default function Home() {
  const [address, setAddress] = useState("")
  return (
    <Layout>
      <main className="h-full w-full flex align-middle justify-center">
        <Switch
          mainText="Swap"
          otherText="Pool"
          handleClick={()=>{}}
          MainComponent={<Swap address={address} getAddress={handleFormConnect(setAddress)}/>}
          OtherComponent={<Pool address={address} getAddress={handleFormConnect(setAddress)}/>}
        />
      </main>
    </Layout>
  )
}
