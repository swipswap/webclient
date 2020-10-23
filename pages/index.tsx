import { useState, useEffect} from 'react'
import DeployPool from '../components/DeployPool'
import Layout from '../components/Layout'
import { generateRandom } from '../scripts'

export default function Home() {
  const [randomNumber, setRandomNumber] = useState(undefined)

  useEffect(() => {
    const newNumber = generateRandom()
    setRandomNumber(newNumber)
  }, [])
  
  return (
    <Layout>
      <DeployPool />
    </Layout>
  )
}
