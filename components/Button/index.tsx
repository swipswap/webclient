import ConnectWallet from "./ConnectWallet";

export { default as NavMenu } from './NavMenu'
export { default as ToggleMode } from './ToggleMode'
export { default as CloseDropDown } from './CloseDropDown'

export default function Button({ lightTheme, text }) {
  return <ConnectWallet lightTheme={lightTheme} text={text}/>
}
