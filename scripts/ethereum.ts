import { ethers, Contract, ContractFactory, utils } from 'ethers'
import { TokenABI, SwipSwapPoolABI, SwipSwapPoolBytecode } from './contractParticulars'

export const SwipSwapPoolAddress = '0xBbb238426c83Db9f21A03541FDEeEfe50d63E960'
export const ChainlinkTokenAddress = '0x87AE97F105Eba72E3B26dBB27B09bDE5943Df2bD'

let Provider: ethers.providers.Web3Provider
let Signer: ethers.Signer
let walletConnected = false

export const connectMetamask = async () => {
  const win: any = window
    if(win.ethereum){
        try {
            await win.ethereum.request({ method: 'eth_requestAccounts' });
            Provider = new ethers.providers.Web3Provider(win.ethereum)
            Signer = Provider.getSigner()
            walletConnected = true
            return true
        } catch (error) {
            console.log(error)
        }
    }
    return false
}

export const deployNewPool = async ({ linkSeedAmount }) => {

  try {
    const newPoolFactory = new ContractFactory(SwipSwapPoolABI, SwipSwapPoolBytecode, Signer)
    const newPool = await newPoolFactory.deploy()
  
    const chainlinkToken = new Contract(ChainlinkTokenAddress, TokenABI, Provider)
    const seedingApproval = await chainlinkToken.transfer(newPool.address, utils.parseEther(`${linkSeedAmount}`))
    await seedingApproval.wait()

    console.log(utils.parseEther(`${linkSeedAmount}`))
    
    console.log(newPool.address)
  } catch(err) {
    console.log(err)
  }
}

export const getAddress = async () => {
  try {
      const address = await Signer.getAddress()
      return  address
  } catch (error) {
      return ""
  }
}
