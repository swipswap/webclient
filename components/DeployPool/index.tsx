import React, { useRef } from 'react'
import { deployNewPool } from '../../scripts/ethereum'

const deployPool = async ({ linkSeedAmount }) => {
  if (linkSeedAmount) {
    const agreedToFundPoolWithLINK = window.confirm(`You will be required to fund the new contract with ${linkSeedAmount}, please ensure you at least this amount of chainlink token in your wallet before proceeding`)
    if (agreedToFundPoolWithLINK) {
      const result = await deployNewPool({ linkSeedAmount })
      console.log(result)
      return 
    }
  }
  alert('You need to specify amount of LINK you want to seed to the new pool')
}

const DeployPool = () => {
  const linkSeedAmountRef = useRef(null)
  return (
    <div className="w-1/2 p-2">
      <label>LINK SEED AMOUNT</label>
      <div>
        <input type='text' ref={linkSeedAmountRef} className="border-red-800 p-3"/>
      </div>
      <button
      className='text-xs text-center px-1 py-2 max-w-xs overflow-hidden lg:px-4 mr-6 lg:mr-0 leading-none border rounded text-white border-green-400 hover:border-transparent hover:bg-green-700 bg-green-500 md:text-lg' 
        onClick={() => deployPool({ linkSeedAmount: linkSeedAmountRef.current.value })}>Deploy New Pool</button>
    </div>
  )
}

export default DeployPool