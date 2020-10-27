import { useState } from 'react'
import { updateStateItem } from './handlers'
import { handleConnect } from '../handlers'

// import { 
//   connectMetamask, 
//   getAddress, 
// } from '../../scripts/ethereum'
import { toast } from 'react-toastify';


export default function Navbar() {
  const [navbarProperties, setNavbarProperties] = useState({
    expandedMenu: false, ethAddress: 'Connect', ethNetwork: ''
  })

	const handleConnection = async () => {
    await handleConnect()
		// const isConnected = await connectMetamask()
		// if(isConnected){
		// 	const address = await getAddress()
		// 	setNavbarProperties(updateStateItem({ item: 'ethAddress', newValue: `${address.slice(0,6)}...${address.slice(38, 42)}`, prevState: navbarProperties }))
    //   console.log('connected to metamask')
		// }
		// toast.error("Error connecting to your wallet")
  }
  

	return (
    <div>
      <button 
      disabled={navbarProperties.ethAddress.indexOf('0x') !== -1}
      className='text-xs text-center px-1 py-2 max-w-xs overflow-hidden lg:px-4 mr-6 lg:mr-0 leading-none border rounded text-white border-green-400 hover:border-transparent hover:bg-green-700 bg-green-500 md:text-lg'
      onClick={handleConnection}>{navbarProperties.ethAddress}</button>
    </div>
	);
}