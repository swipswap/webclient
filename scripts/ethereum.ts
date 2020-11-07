import Onboard from 'bnc-onboard';
import { ethers, Contract } from 'ethers'


const dappId = "f55de6cc-5d4a-4115-b773-f6dde3bbf817";
const networkId = 5777;

export default class ETHAPI{
  provider: ethers.providers.Web3Provider;
  ob;
  connected: boolean;

  onboard(){
    if (!this.ob){
      this.ob = Onboard({
        dappId,
        hideBranding: true,
        networkId,
        subscriptions: {
          wallet: (wallet) => {
            this.provider = new ethers.providers.Web3Provider(wallet.provider);
          },
        },
        walletCheck: [
          {
            checkName: 'accounts'
          },
          { checkName: 'connect' },
          { checkName: 'balance' }
        ]
      });
    }
    return this.ob;
  }

  async connect(){
    await this.onboard().walletSelect()
    this.connected = await this.onboard().walletCheck()
  }

  isConnected(){
    return !!this.provider && !!this.ob
  }

  getSigner() {
    return this.provider.getSigner()
  }
  
  getAddress() {
    return this.getSigner().getAddress()
  }

  toBigNumber (number: string) {
    return ethers.utils.parseEther(number)
  }

  // Creates an interface to create an an instance of a contract (swipswap)
  async contractInterface ({ contractAddress, contractABI }) {
    return new Contract(
        contractAddress,
        contractABI,
        this.getSigner()
    )
  }

  async getTokenBalance ({ tokenContract }) {
    return tokenContract.balanceOf(this.getAddress())
  }

  // gets the spending allowance of a given tokenAddress (pool) by a swipswap contract
  async checkAllowance ({ swipSwapAddress, tokenContract }) {
      const allowance = await tokenContract.allowance(await this.getAddress(), swipSwapAddress)
      const decimals = await tokenContract.decimals()
      const tokenSymbol = await tokenContract.symbol()
      return { allowance, decimals, tokenSymbol }
  }
}

export const ethAPI = new ETHAPI()
