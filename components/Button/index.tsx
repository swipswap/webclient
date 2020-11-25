import ConnectWallet from "./ConnectWallet";

export { default as NavMenu } from './NavMenu'
export { default as ToggleMode } from './ToggleMode'
export { default as CloseDropDown } from './CloseDropDown'
export { default as FormBtn } from './FormBtn'

export default function Button({ lightTheme, setAddress, address }) {
  return <ConnectWallet lightTheme={lightTheme} setAddress={setAddress} address={address}/>
}
