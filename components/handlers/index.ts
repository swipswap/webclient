import { swipswapABI, swipTokenABI } from "../../scripts/ABIs"
import { ethAPI } from "../../scripts/ethereum"
import { ethers } from 'ethers'

export const handleChange = (setState) => e => {
    const { name, value } = e.target
    setState(prevState => ({...prevState, [name]: value}))
}

export const setTxHash = ({ hash, setHash }) => {
    setHash(hash)
}

const handleError = (e, toast) => {
    if (e.code === 4001){
        toast(e.message.slice(e.message.lastIndexOf(':')+1, e.message.length))
        return null
    }
    if(e.code === -32603){
        toast(e.data.message.slice(e.data.message.lastIndexOf(':')+1, e.data.message.length))
        return null
    }
}

export const getAllowance = async (tokenAddress: string, address: string, swipSwapAddress)=> {
    try {
        const tokenContract = await ethAPI.contractInterface({ contractAddress: tokenAddress, contractABI: swipTokenABI })
        const allowance = await tokenContract.allowance(address, swipSwapAddress)
        const decimals = await tokenContract.decimals()
        return allowance / 10 ** decimals
    } catch (error) {
        return 0
    }
    
}

export const handleApprove = (state: any, setAllowance, toast) => async e => {
    console.log("clicked")
    const { amount, pool, tokenAddress } = state
    if (!amount) {
        toast('You must specify an amount greater than 0')
        return null
    }
    try {
    const tokenContract = await ethAPI.contractInterface({ contractAddress: tokenAddress, contractABI: swipTokenABI })
    const decimals = await tokenContract.decimals()
    const value = amount * (10 ** decimals)
    console.log(Number(value))
        const tx = await tokenContract.approve(pool.mainPoolAddress, value)
        await tx.wait()
        // console.log(tx.transactionHash)
        setAllowance(value)
        console.log(tx)
        toast('success!')
    }catch(e){
        handleError(e, toast)
    }
}

export const handleSubmitPool = (state: any, toast) => async e => {
    const { amount, pool, pubkey, tokenAddress } = state
    if(!pubkey) {
        toast('You need to provide a valid xpub key')
        return null
    }
    try {
    const tokenContract = await ethAPI.contractInterface({ contractAddress: tokenAddress, contractABI: swipTokenABI })
    const decimals = await tokenContract.decimals()
    console.log(decimals)
    const value = amount * (10 ** decimals)
    const poolContract = await ethAPI.contractInterface({ contractAddress: pool.mainPoolAddress, contractABI: swipswapABI })
        const tx = await poolContract.joinPool(value, pubkey, pool.value)
        await tx.wait()
        toast('success!')
    } catch(e) {
        handleError(e, toast)
    }
}

export const handleCommit = (state, pool, setLockdetails, toast) => async e=> {
    const {tokenAddress, mainPoolAddress, amount} = state
    if(!amount) {
        toast('Send field is empty')
        return null
    }
    try {
        const poolContract = new ethers.Contract(mainPoolAddress, swipswapABI, ethAPI.getSigner());
        const poolAddress = Object.keys(pool)[0]
        const tokenDecimals = 100000000
        console.log(tokenAddress, poolAddress, amount)
        const index = pool[poolAddress].index === "1" ? 1 : 0
        await poolContract.newLock(tokenAddress, poolAddress, index, amount*tokenDecimals)
        const ethAddress = await ethAPI.getAddress()
        const filter = poolContract.filters.NewLock(ethAddress, null, null, null)
        poolContract.on(filter, async () => {
            const newLock = await poolContract.queryFilter(filter)
            const newLockDetails = await getLockDetails(newLock[newLock.length-1].args)
            console.log({newLockDetails})
            setLockdetails(newLockDetails)
        })
        toast('success!')
    } catch(e) {
        handleError(e, toast)
    }
}

export const handleFinalise = (state, lock) => async e => {
    console.log("clicked...")
    const {mainPoolAddress} = state
    const poolContract = new ethers.Contract(mainPoolAddress, swipswapABI, ethAPI.getSigner());
    await poolContract.fulfillLock(ethers.utils.toUtf8Bytes(""),lock.pool,0,"0x0000000000000000000000000000000000000000", lock.index, Number(lock.index))
    const filter = poolContract.filters.FulfillLock(lock.locker, lock.pool, null, null, null)
    poolContract.on(filter, async () => {
        const lockFulfilledEvent = await poolContract.queryFilter(filter)
        const lockFulfilled = await getFulfilledLockDetails(lockFulfilledEvent[0].args)
        console.log(lockFulfilled)
    })
}

export const getAddressBalance = async (tokenAddress: string, address: string, toast) => {
    let bal: any
    if (tokenAddress === '0x0000000000000000000000000000000000000000') {
        try {
            bal = await ethAPI.getAddressBalance();
            return bal/10**18

        } catch(e){
            handleError(e, toast)
        }
    }
    try {
        const tokenContract = await ethAPI.contractInterface({ contractAddress: tokenAddress, contractABI: swipTokenABI })
        const decimals = await tokenContract.decimals()
        bal = await tokenContract.balanceOf(address)
        return bal/10**decimals
    } catch(e) {
        handleError(e, toast)
    }
}

export const handleConnect = async () => {
    try {
        await ethAPI.connect()
    } catch(e) {
        console.log(e)
    }
}

export const handleFormConnect = (setAddress, setNetwork=(network)=>{}) => async () => {
    await ethAPI.connect()
    setAddress(await ethAPI.getAddress())
    setNetwork(await ethAPI.getNetwork())
}

export const loadPool = async (mainPoolAddress: string) => {
    const poolContract = new ethers.Contract(mainPoolAddress, swipswapABI, ethAPI.getSigner());
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

export const supportedPools = (network:string="") => {
    const pools = {
        goerli:[
            { value: '0xd966C2fdA4a2AB67FB72F30E82acE717Bb051Eb9', label: 'BTC / FUSD', mainPoolAddress: "0xeB1ef5177AA5f59527C5e774330cab340982753f" },
            { value: '0x0000000000000000000000000000000000000000', label: 'BTC / ETH', mainPoolAddress: "0x0000000000000000000000000000000000000000" },
        ],
        binance:[
            { value: '0xA21F1ECFe7D699c6a9b3287D12d5306eaC0eBcF6', label: 'BTC / FUSD', mainPoolAddress: "0xc0e013b0D5ec6A20020922886ACBd9fCf70C2FE0" },
            { value: '0x0000000000000000000000000000000000000000', label: 'BTC / BNB', mainPoolAddress: "0x0000000000000000000000000000000000000000" },
        ],
        "":[
            { value: '0xDccc8028CFB3f8d489719bBFC7389b00b3D4AFC3', label: 'BTC / FUSD', mainPoolAddress: "0x9E237f4a7AD90FfAFB0adEf703186F91428a6a38" },
            { value: '0x0000000000000000000000000000000000000000', label: 'BTC / ETH', mainPoolAddress: "0x0000000000000000000000000000000000000000" },
        ],
        "unknown":[
            { value: '0xDccc8028CFB3f8d489719bBFC7389b00b3D4AFC3', label: 'BTC / FUSD', mainPoolAddress: "0x9E237f4a7AD90FfAFB0adEf703186F91428a6a38" },
            { value: '0x0000000000000000000000000000000000000000', label: 'BTC / ETH', mainPoolAddress: "0x0000000000000000000000000000000000000000" },
        ],
    }
    return (
        pools[network]
    )
}

export const toggleModalState = (setState) => () => {
    console.log("----")
    setState(prev => {
        console.log(prev)
        return !prev
    })
}

export const makeQrURI = (coin, address, amount) => {
    const coins = {
        "BTC": "bitcoin",
        "ETH": "ethereum",
    }
    return encodeURI(`${coins[coin]}:${address}?amount=${amount}&label=Swipswap_Payment&message=Swipswap_payment`)
}
