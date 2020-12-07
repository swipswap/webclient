import ConnectWallet from "./ConnectWallet";

export { default as NavMenu } from './NavMenu'
export { default as ToggleMode } from './ToggleMode'
export { default as CloseDropDown } from './CloseDropDown'
export { default as FormBtn } from './FormBtn'

export default function Button({ lightTheme, setAddress, address }) {
  return <ConnectWallet lightTheme={lightTheme} setAddress={setAddress} address={address}/>
}


export function Btn({ theme, btnText, handleClick, disabled, className="h-10 w-40" }) {
  return (
    <button
      disabled={disabled}
      className={`transition duration-1000 ease-in-out font-semibold focus:outline-none outline-none shadow hover:shadow-md p-1 rounded md:rounded-md bg-${theme.bg} text-${theme.txt} hover:bg-${theme.hbg} hover:text-${theme.htxt} ${className}`}
      onClick={handleClick}
    >
      {btnText}
    </button>
  )
}


