import { handleFormConnect } from "../handlers"

export default function ConnectWallet({ lightTheme, setAddress, address }) {
  const btnClass = lightTheme ? "bg-white text-swip-primary" : "bg-swip-deep text-white"
  return (
    <button 
      onClick={handleFormConnect(setAddress)} 
      className={`w-full float-right transition duration-1000 ease-in-out mr-2 h-10 text-base text-center overflow-hidden focus:outline-none outline-none shadow-none border lg:font-bold rounded-lg ${btnClass} px-3`}>
      { formatConnected(address)  }
    </button>
  )
}

const formatConnected = (address: string) => {
  const formated = address ? `${address.slice(0,5)}...${address.slice(address.length-5)}` : 'Connect Wallet'
  return formated
}