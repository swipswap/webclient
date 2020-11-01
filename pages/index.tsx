import Layout from '../components/Layout'
import Switch from '../components/Switch'
import Pool from './pool'
import Swap from './swap'

export default function Home() {
  
  return (
    <Layout>
      <Switch
        mainText="Swap"
        otherText="Pool"
        handleClick={()=>{}}
        MainComponent={Swap}
        OtherComponent={Pool}
      />
    </Layout>
  )
}
