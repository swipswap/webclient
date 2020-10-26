import Onboard from "bnc-onboard";
import { ethers } from 'ethers'

// import { LinkTokenABI, SwipSwapPoolABI } from './ABIs'

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
        walletCheck: []
      });
    }
    return this.ob;
  }

  async connect(){
    await this.onboard().walletSelect()
    this.connected = this.onboard().walletCheck()
  }

  isConnected(){
    return !!this.provider && !!this.ob
  }

  async getSigner() {
    return this.provider.getSigner()
  }
  
  async getAddress() {
    return await (await this.getSigner()).getAddress()
  }
}

export const ethAPI = new ETHAPI()
