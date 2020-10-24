import { ethers } from 'ethers'
import { LinkTokenABI, SwipSwapPoolABI } from './ABIs'

export const SwipSwapPoolAddress = '0xBbb238426c83Db9f21A03541FDEeEfe50d63E960'
export const ChainlinkTokenAddress = '0x87AE97F105Eba72E3B26dBB27B09bDE5943Df2bD'

let Provider: ethers.providers.Web3Provider
let Signer: ethers.Signer
let walletConnected = false

export const getSigner = async () => {
  const win: any = window
  Provider = new ethers.providers.Web3Provider(win.ethereum)
  Signer = Provider.getSigner()
}

export const connectMetamask = async () => {
  const win: any = window
    if(win.ethereum){
        try {
            await win.ethereum.request({ method: 'eth_requestAccounts' });
            await getSigner()
            walletConnected = true
            return true
        } catch (error) {
            console.log(error)
        }
    }
  return false
}

export const getAddress = async () => {
  try {
    await getSigner()
    const address = await Signer.getAddress()
      return  address
  } catch (error) {
      return ""
  }
}
