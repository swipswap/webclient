import { useState, useEffect } from 'react'
import Link from "next/link"
import { updateStateItem } from './handlers'

import { 
  connectMetamask, 
  getAddress, 
  // getNetwork 
} from '../../scripts/ethereum'
import { toast } from 'react-toastify';
// import DexcrowsLogo from "../dexcrowsLogo"


export default function Navbar() {
  const [navbarProperties, setNavbarProperties] = useState({
    expandedMenu: false, ethAddress: 'Connect', ethNetwork: ''
  })

	const toggleMenu = () => {
		setNavbarProperties(updateStateItem({ item: 'expandedMenu', newValue: !navbarProperties.expandedMenu, prevState: navbarProperties }))
  }
  
	const handleConnect = async () => {
		const isConnected = await connectMetamask()
		if(isConnected){
			const address = await getAddress()
      // const network = await getNetwork()
			setNavbarProperties(updateStateItem({ item: 'ethAddress', newValue: `${address.slice(0,6)}...${address.slice(38, 42)}`, prevState: navbarProperties }))
			// setEthNetwork(network)
			// setEthAddress(address)
      // return
      console.log('connected to metamask')
		}
		toast.error("Error connecting to your wallet")
	}


  // useEffect(() => {
  //   handleConnect()
  // }, [])

	return (
    <div>
      <button 
      disabled={navbarProperties.ethAddress.indexOf('0x') !== -1}
      className='text-xs text-center px-1 py-2 max-w-xs overflow-hidden lg:px-4 mr-6 lg:mr-0 leading-none border rounded text-white border-green-400 hover:border-transparent hover:bg-green-700 bg-green-500 md:text-lg'
      onClick={handleConnect}>{navbarProperties.ethAddress}</button>
    </div>
		// <header className='h-header flex items-center justify-between px-5 pt-4 pb-0 relative lg:px-10 z-20'>
		// 	<Link href="/">
		// 		<a >
		// 			{/* <DexcrowsLogo classname="h-6 md:h-10 md:mb-2"/> */}<h2 className="h-6 md:h-10 md:mb-2">Logo</h2>
		// 		</a>
		// 	</Link>
		// 	<span className="flex flex-wrap items-center">
		// 		<span className="flex tablets:order-2">
				    
		// 			{ethNetwork  ? (
		// 				<span
		// 				className='text-xs text-center px-1 py-2 max-w-xs overflow-hidden lg:px-4 mr-6 lg:mr-0 leading-none border rounded text-white detect-network'
		// 			>
		// 				{ethNetwork}
		// 			</span>
		// 			): '' }
		// 			<button
		// 				className='text-xs text-center px-1 py-2 max-w-xs overflow-hidden lg:px-4 mr-6 lg:mr-0 leading-none border rounded text-white border-dexcrow hover:border-transparent hover:bg-dexcrow-deep bg-dexcrow-light md:text-lg'
		// 				onClick={handleConnect}
		// 				disabled={!!ethAddress}
		// 			>
		// 				{!ethAddress ? 'CONNECT WALLET' : `${ethAddress.slice(0,12)}...`}
		// 			</button>
		// 			<svg className="h-8 w-8 fill-current hover:text-dexcrow-deep text-dexcrow-light tablets:hidden" viewBox="0 0 24 24" onClick={toggleMenu}>
		// 				{
		// 					expandedMenu
		// 						? <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
		// 						: <path  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
		// 				}
		// 			</svg>
		// 		</span>
		// 		<nav
		// 			className={`w-full absolute bg-dexbg top-full left-0 pt-0 pb-3 px-3 text-base ${expandedMenu ? "block" : "hidden"} tablets:block tablets:static  tablets:m-0 tablets:p-0  tablets:w-auto tablets:order-1 tablets:mr-4`}
		// 		>
		// 			{
		// 				["Home", "About", "Dexcrow Wallet"].map((item, index, arr) => {
		// 					const positionStyle = index === 0 ? "mt-0" : index === arr.length - 1 ? "my-2" : "mt-2"
		// 					return (
		// 						<a href='#' key={`${item}${index}`}
		// 							className={`block text-dexcrow-deep ${positionStyle} hover:bg-dexcrow-deep hover:text-white py-1 rounded pl-2 tablets:inline tablets:px-2 md:text-xl lg:mr-4`}>
		// 							{item}
		// 						</a>
		// 					)
		// 				})
		// 			}
		// 		</nav>
		// 	</span>
		// </header>
	);
}