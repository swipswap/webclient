import { useState, useEffect } from "react"
import {handleCommit, handleFinalise, loadPool, handleValueChange, supportedPools, getAddressBalance, toggleModalState} from "../components/handlers"
import Select from 'react-select'
import FormInput from '../components/FormInput'
import PaymentModal from "../components/PaymentModal"
import { tbitcoin } from "../scripts"

const initLockDetails = {
    amount: "",
    index: "",
    locker: "",
    pool: "",
}

const options = supportedPools

export default function Swap({getAddress, address}){
    const [selectedPair, setSelectedPair] = useState(options[0])
    const {label, value, mainPoolAddress} = selectedPair
    const [externalCoin, onChainCoin] = label.split(' / ')
    const [ratio, setRatio] = useState(1)
    const [pools, setPools] = useState({})
    const [lockDetails, setLockdetails] = useState(initLockDetails)
    const [addressBalance, setAddressBalance] = useState(0)
    const [modalIsOpen, setModalIsOpen]= useState(false)
    const [coinsAmount, setCoinsAmount] = useState({externalCoin: 0, onChainCoin: 0})

    useEffect(() => {
        if(!address)return
        (async () => {
            console.log({mainPoolAddress})
            const _pools = await loadPool(mainPoolAddress)
            setPools(_pools)
            const bal = await getAddressBalance(value, address)
            setAddressBalance(bal)
        })()
    },[label, address])

    useEffect(() => {
        setCoinsAmount({externalCoin: 0, onChainCoin: 0})
        setRatio({'BTC / FUSD': 13_000, 'BTC / ETH': 35.85}[label])
    }, [label])

    const firstPool = Object.keys(pools)[0]
    const pubkey = firstPool ? pools[firstPool].pubKey : ''

    return <div className="w-full shadow p-4 rounded">
        <form onSubmit={(e) =>{e.preventDefault()}}>
            <div className="w-full flex justify-end mb-1 text-xs">
                <button disabled={!!address} onClick={getAddress} className="p-1 flex justify-center items-center underline">{formatConnected(address)} <span className={`inline-block h-3 w-3 ml-2 rounded-full ${address?'bg-green-400':'bg-red-500'}`}></span></button>
            </div>
            <Select instanceId="select-select" defaultValue={options[0]} placeholder="Select pair" options={options} name="address" onChange={setSelectedPair} />
            <FormInput label="Send" value={coinsAmount.externalCoin} onChange={handleValueChange(setCoinsAmount, ratio)} name={'externalCoin'} coin={externalCoin} balance="--.-------"/>
            <FormInput label="Receive" value={coinsAmount.onChainCoin} onChange={handleValueChange(setCoinsAmount, ratio)} name={'onChainCoin'} coin={onChainCoin} balance={String(addressBalance)} />
            <div className="text-sm mt-3"><span>Rate:</span> <span>1 {externalCoin} = {ratio} {onChainCoin}</span> <span className="float-right">Fee: 0.0001 ETH</span></div>
            <div className="w-full flex py-4 pt-8 justify-between">
                <button className="w-2/5 h-10 text-yellow-200 bg-blue-500 hover:bg-blue-600 rounded shadow" disabled={lockDetails.pool!==""} onClick={handleCommit({mainPoolAddress, tokenAddress: value, amount:Number(coinsAmount.externalCoin)}, pools, setLockdetails)}>Commit</button>
                <button className="w-2/5 h-10 text-yellow-200 bg-blue-500 hover:bg-blue-600 rounded shadow" disabled={lockDetails.pool===""} onClick={toggleModalState(setModalIsOpen)}>Swap</button>
            </div>
            
        </form>
        <PaymentModal
            isOpen={modalIsOpen}
            toggleOpen={toggleModalState(setModalIsOpen)}
            coin={externalCoin}
            address={tbitcoin(pubkey,Number(lockDetails.index))}
            amount={coinsAmount.externalCoin}
            disabled={lockDetails.pool===""}
            callbackFunc={handleFinalise({mainPoolAddress, tokenAddress: value, amount:Number(coinsAmount.externalCoin)}, lockDetails)}
        />
    </div>
}

const formatConnected = (address: string) => {
    const formated = address ? `${address.slice(0,5)}...${address.slice(address.length-5)}` : 'Connect Wallet'
    return formated
}
