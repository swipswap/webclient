import { erc20TokenABI, swipswapABI, swipTokenABI } from "../../scripts/ABIs"
import { ethAPI } from "../../scripts/ethereum"
import { PoolState } from '../typeDefinitions'
import { ethers } from 'ethers'
import { emitter } from "../Events"
// import {swipswapABI} from '../../scripts/ABIs/abi'

export const handleChange = (setState) => e => {
    const { name, value } = e.target
    setState(prevState => ({...prevState, [name]: value}))
}

export const setTxHash = ({ hash, setHash }) => {
    setHash(hash)
}

export const getAllowance = async ({ tokenAddress, tokenABI, swipSwapAddress }: { tokenAddress: string; tokenABI: Array<any>; swipSwapAddress: string; }) => {
    const tokenContract = await ethAPI.contractInterface({ contractAddress: tokenAddress, contractABI: tokenABI })
    const { allowance, decimals, tokenSymbol } = await ethAPI.checkAllowance({ swipSwapAddress, tokenContract })
    
    return { tokenContract, allowance, decimals, tokenSymbol }
}

export const handleApprove = (state: PoolState) => async e => {
    const { amount, swipSwapAddress, pool } = state
    let tx
    const { tokenContract, allowance, decimals, tokenSymbol } = await getAllowance({ swipSwapAddress, tokenAddress: pool.tokenAddress, tokenABI: pool.tokenABI })
    const tokenBalance = await ethAPI.getTokenBalance({ tokenContract })
    const value = amount * (10 ** decimals)

    // If you don't have enough funds
    if (Number(tokenBalance * (10 ** decimals)) < Number(value)) {
        alert('Insufficient Funds')
        return
    }

    console.log(Number(allowance), Number(value))
    // You have approved lesser or nothing at all
    if (Number(allowance) < Number(value)) {
        try {
            tx = await tokenContract.approve(swipSwapAddress, value)
            tx = await tx.wait()
            emitter.fire('txHash', tx.transactionHash)
            // console.log(tx.transactionHash)
        }catch(err){
            console.log(err)
        }
        //  Any other condition such as approving below what you have apprpved before
    } else {
        alert(`You have already approved up to ${allowance / (10 ** decimals)} ${tokenSymbol}`)
    }
}

export const handleSubmitPool = (state: PoolState) => async e => {
    const { amount, swipSwapAddress, pool, pubkey } = state
    const { decimals } = await getAllowance({ swipSwapAddress, tokenAddress: pool.tokenAddress, tokenABI: pool.tokenABI })
    const value = amount * (10 ** decimals)
    let tx
    const poolContract = await ethAPI.contractInterface({ contractAddress: swipSwapAddress, contractABI: swipswapABI })
    try {
        tx = await poolContract.joinPool(value, pubkey, pool.tokenAddress)
        tx = await tx.wait()

    } catch(err) {
        alert(err.data.message)
    }
    // console.log(poolContract, value)
    console.log(tx)
}

export const handleCommit = (state, pool, setLockdetails) => async e=> {
    const {tokenAddress, mainPoolAddress, amount} = state
    const poolContract = new ethers.Contract(mainPoolAddress, swipswapABI, await ethAPI.getSigner());
    const poolAddress = Object.keys(pool)[0]
    console.log({poolAddress})
    const tokenDecimals = 100000000
    console.log(tokenAddress, poolAddress, amount)
    const index = pool.index === "1" ? 1 : 0
    await poolContract.newLock(tokenAddress, poolAddress, index, amount*tokenDecimals)
    const ethAddress = await ethAPI.getAddress()
    const filter = poolContract.filters.NewLock(ethAddress, null, null, null)
    poolContract.on(filter, async () => {
        const newLock = await poolContract.queryFilter(filter)
        const newLockDetails = await getLockDetails(newLock[newLock.length-1].args)
        console.log({newLockDetails})
        setLockdetails(newLockDetails)
    })
}

export const handleFinalise = (state, lock) => async e => {
    const {mainPoolAddress} = state
    const poolContract = new ethers.Contract(mainPoolAddress, swipswapABI, await ethAPI.getSigner());
    await poolContract.fulfillLock(ethers.utils.toUtf8Bytes(""),lock.pool,0,"0x0000000000000000000000000000000000000000", lock.index, Number(lock.index))
    const filter = poolContract.filters.FulfillLock(lock.locker, lock.pool, null, null, null)
    poolContract.on(filter, async () => {
        const lockFulfilledEvent = await poolContract.queryFilter(filter)
        const lockFulfilled = await getFulfilledLockDetails(lockFulfilledEvent[0].args)
        console.log(lockFulfilled)
    })
}

export const handleConnect = async () => {
    await ethAPI.connect()
}

export const handleFormConnect = (callback) => async () => {
    await ethAPI.connect()
    callback(await ethAPI.getAddress())
}

export const loadPool = async (mainPoolAddress: string) => {
    const poolContract = new ethers.Contract(mainPoolAddress, swipswapABI, await ethAPI.getSigner());
    const filter = poolContract.filters.PoolJoined(null, null)
    const pools = await poolContract.queryFilter(filter)
    const poolsDetails = {}
    for(const pool of pools){
        const details = await getPoolDetails(poolContract, pool.args[0])
        poolsDetails[pool.args[0]] = details
    }
    console.log({poolsDetails})
    return poolsDetails
}

export const getPoolDetails = async(mainPoolContract: ethers.Contract, poolAddress: string) => {
    const poolDetailsList = await mainPoolContract.getPoolDetails(poolAddress)
    return {
        pubKey: poolDetailsList[0],
        index: (poolDetailsList[1]).toString(),
        initAmount: (poolDetailsList[2]).toString(),
        unlockedAmount: (poolDetailsList[3]).toString(),
        lockedAmount: (poolDetailsList[4]).toString(),
        filledAmount: (poolDetailsList[5]).toString(),
        isLocked: poolDetailsList[6],
    }
}
export const getLockDetails = async(lock) => {
    return {
        locker: lock[0],
        pool: lock[1],
        index: (lock[2]).toString(),
        amount: (lock[3]).toString(),
    }
}

export const getFulfilledLockDetails = async(lock) => {
    return {
        locker: lock[0],
        pool: lock[1],
        index: (lock[2]).toString(),
        amount: (lock[3]).toString(),
        requertId: (lock[4]).toString()
    }
}

export const asynEffect = ((callback: any) =>{callback()})

export const handleComponentSwitch = (value, setState, callbackFunc=(value)=>{}) => () => {
    setState(value)
    callbackFunc(value)
}

export const getMainPoolAddress = (pair: string) => {
    return ({
        'BTC / FUSD':"0x4b03Ac42133936ABf9c7C26c0aF3a08C27d56182",
        'BTC / ETH':"0x0000000000000000000000000000000000000000" 
    })[pair]
}

export const handleValueChange = (setState:any, ratio: number) => (e) => {
    const {value, name} = e.target
    const _value = Number(value)
    const externalCoin = name === 'externalCoin' ? value :( _value / ratio).toFixed(5)
    const onChainCoin = name === 'onChainCoin' ? value : (_value * ratio).toFixed(5)
    setState({externalCoin, onChainCoin})
}


export const formatConnected = (address: string) => {
    const formated = address ? `${address.slice(0,5)}...${address.slice(address.length-5)}` : 'Connect Wallet'
    return formated
}

export const supportedPools = [
    { tokenAddress: '0x9E237f4a7AD90FfAFB0adEf703186F91428a6a38', label: 'FUSD', tokenABI: erc20TokenABI }
]