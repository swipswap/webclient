import ConnectWallet from "./ConnectWallet";

export { default as NavMenu } from './NavMenu'
export { default as ToggleMode } from './ToggleMode'
export { default as CloseDropDown } from './CloseDropDown'

export default function Button({ theme, text }) {
  return <ConnectWallet theme={theme} text={text}/>
}
