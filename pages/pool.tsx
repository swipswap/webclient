import { useState, useEffect } from "react"
import { toast } from 'react-toastify'
import Select from 'react-select'
import { handleApprove, handleChange, handleSubmitPool, formatConnected, supportedPools, getAllowance, getMainPoolAddress, getAddressBalance } from "../components/handlers"
import FormInput from '../components/FormInput'
import { tbitcoin } from "../scripts"


const initialState = {
    amount: 0,
    tokenAddress: "0x9E237f4a7AD90FfAFB0adEf703186F91428a6a38",
    pubkey: '',
    swipSwapAddress: '0xa5E04f174c9ee02F8C79E4ead2bd6961EEC797fB',
    pool: supportedPools[0]
}

export default function Pool({getAddress, address}){
    const [state, setState] = useState(initialState)
    const [pool, setPool] = useState(supportedPools[0])
    const {label, value, mainPoolAddress} = pool
    const [currentAllowance, setAllowance] = useState(0)
    const [addressBalance, setAddressBalance] = useState(0)
    useEffect(() => {
        if(!address)return
        (async () => {
            const allowance = await getAllowance(
                value,
                address,
                mainPoolAddress
            )
            setAllowance(Number(allowance))
            const bal = await getAddressBalance(value, address, toast)
            setAddressBalance(bal)
        })()
    }, [label, address])

    const _state = {...state, tokenAddress: value, pool, swipSwapAddress: mainPoolAddress, address}
    console.log(state.amount, currentAllowance, addressBalance, pool.mainPoolAddress !== '0x0000000000000000000000000000000000000000')
    const isEth = pool.mainPoolAddress === '0x0000000000000000000000000000000000000000'
    
    const isLTApproved = !state.amount || state.amount === 0 || (!isEth && state.amount < currentAllowance) || !state.pubkey
    const isZeroOrGTApproved = (!state.amount || state.amount === 0 || (state.amount > currentAllowance && !isEth) || addressBalance < state.amount)
    return <div className="w-full shadow p-4 rounded">
        <form onSubmit={(e) =>{e.preventDefault()}}>
            <div className="w-full flex justify-end mb-1 text-xs">
                <button disabled={!!address} onClick={getAddress} className="p-1 flex justify-center items-center underline">{formatConnected(address)} <span className={`inline-block h-3 w-3 ml-2 rounded-full ${address?'bg-green-400':'bg-red-500'}`}></span></button>
            </div>
            <Select instanceId="select-select" defaultValue={state.pool} placeholder="Select Pool" options={supportedPools} name='pool' onChange={setPool} />
            <FormInput textPosition="left" label="Pubkey" value={state.pubkey} onChange={handleChange(setState)} name='pubkey' />
            <FormInput label="Amount" value={state.amount} onChange={handleChange(setState)} name='amount' balance={String(addressBalance)} />
            <div className="w-full flex py-4 pt-16 justify-between">
                <button disabled={isLTApproved} className={isLTApproved ? 'bg-orange-400 w-2/5 h-10 rounded cursor-not-allowed' : 'w-2/5 h-10 text-yellow-200 bg-blue-500 hover:bg-blue-600 rounded shadow'} onClick={handleApprove(_state, setAllowance, toast)}>Approve</button>
                <button disabled={isZeroOrGTApproved} className={isZeroOrGTApproved ? 'bg-orange-400 w-2/5 h-10 rounded cursor-not-allowed' : 'w-2/5 h-10 text-yellow-200 bg-blue-500 hover:bg-blue-600 rounded shadow'} onClick={handleSubmitPool(_state, toast)}>Join Pool</button>
            </div>          
        </form>
    </div>
}
