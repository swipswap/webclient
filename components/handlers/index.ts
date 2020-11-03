import { erc20TokenABI, swipswapABI } from "../../scripts/ABIs"
import { ethAPI } from "../../scripts/ethereum"
import { PoolState } from '../typeDefinitions'
import { ethers } from 'ethers'
// import {swipswapABI} from '../../scripts/ABIs/abi'

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
