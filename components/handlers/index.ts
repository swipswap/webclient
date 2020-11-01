import { erc20TokenABI, swipswapABI } from "../../scripts/ABIs"
import { ethAPI } from "../../scripts/ethereum"
import { PoolState } from '../typeDefinitions'

export const handleChange = (setState) => e => {
    const {name, value} = e.target
    setState(prevState => ({...prevState, [name]: value}))
}

export const handleApprove = (state: PoolState) => async e => {
    const { address, amount } = state
    let tokenABI = erc20TokenABI
    let tx
    let poolAddress = '0x4b03Ac42133936ABf9c7C26c0aF3a08C27d56182'
    const contract = await ethAPI.contractInterface({ contractAddress: address, contractABI: tokenABI })
    const { allowance, decimals } = await ethAPI.checkAllowance({ poolAddress, contract })
    const tokenBalance = await ethAPI.getTokenBalance({ contract })
    const value = amount * (10 ** decimals)
    
    if (Number(tokenBalance) < Number(value)) {
        alert('Insufficient Funds')
    } 
    
    if (Number(allowance) < Number(value)) {
        try {
            tx = await contract.approve('0x4b03Ac42133936ABf9c7C26c0aF3a08C27d56182', value)
            tx = await tx.wait()
            alert(tx.transactionHash)
        }catch(err){
            console.log(err)
        }
    } else {
        alert(`You have already approved ${allowance / (10 ** decimals)}`)
    }
}

export const handleSubmitPool = (state: PoolState) => async e => {
    const { amount, address, pubkey } = state
    const poolABI = swipswapABI
    const tokenABI = erc20TokenABI
    const poolAddress = '0x4b03Ac42133936ABf9c7C26c0aF3a08C27d56182'
    const tokenContract = await ethAPI.contractInterface({ contractAddress: address, contractABI: tokenABI })
    const decimals = await tokenContract.decimals()
    const value = amount * (10 ** decimals)
    let tx
    const poolContract = await ethAPI.contractInterface({ contractAddress: poolAddress, contractABI: poolABI })
    try {
        tx = await poolContract.joinPool(value, pubkey, address)
        tx = await tx.wait()

    } catch(err) {
        alert(err.data.message)
    }
    // console.log(poolContract, value)
    console.log(tx)
}

export const handleCommit = (state) => async e => {
    console.log(state)
}

export const handleFinalise = (state) => e => {
    console.log(state)
}

export const handleConnect = async () => {
    await ethAPI.connect()
}
