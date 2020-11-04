import { useState, useEffect } from "react"
import Select from 'react-select'
import { handleApprove, handleChange, handleConnect, handleSubmitPool, loadPool, formatConnected, supportedPools, getAllowance, setTxHash } from "../components/handlers"
import RenderFormFields from "../components/RenderFormFields"
import FormInput from '../components/FormInput'
import { PoolState } from '../components/typeDefinitions'
import { emitter } from '../components/Events'

const formFields = (state, setState) => [
    {
        placeholder: "Currency",
        name: "address",
        type: "select",
        options: [
            {text: "ETH", value: "0x0000000000000000000000000000000000000000"},
            {text: "TUSD", value: "0x9E237f4a7AD90FfAFB0adEf703186F91428a6a38"}
        ],
        onChange: handleChange(setState),
        value: state['address'],
    },
    {
        placeholder: "Pubkey",
        name: "pubkey",
        type: "text",
        onChange: handleChange(setState),
        value: state['pubkey'],
    },
    {
        placeholder: "Amount",
        name: "amount",
        type: "number",
        onChange: handleChange(setState),
        value: state['amount'],
    },
    // {
    //     name: "approve",
    //     value: "Approve",
    //     type: "button",
    //     onClick: handleApprove(state),
    // },
    // {
    //     name: "join",
    //     value: "Join",
    //     type: "button",
    //     onClick: handleSubmitPool(state),
    // },
]

// { amount, tokenAddress, swipSwapAddress, tokenABI }
const initialState: PoolState = {
    amount: 0,
    tokenAddress: "0x9E237f4a7AD90FfAFB0adEf703186F91428a6a38",
    pubkey: '',
    swipSwapAddress: '0xa5E04f174c9ee02F8C79E4ead2bd6961EEC797fB',
    pool: supportedPools[0]
}

export default function Pool({getAddress, address}){
    const [state, setState] = useState(initialState)
    const [currentAllowance, setAllowance] = useState(0)
    const [txHash, setTxHash] = useState('')

    useEffect(() => {
        (async () => {
            const { allowance, decimals } = await getAllowance({ 
                tokenABI: state.pool.tokenABI, 
                swipSwapAddress: state.swipSwapAddress, 
                tokenAddress: state.pool.tokenAddress 
            })
            const result = allowance / (10 ** decimals)
            setAllowance(Number(result))
        })()
    }, [txHash])

    const hoistHash = (hash) => setTxHash(hash)
 
    emitter.once('txHash', hash => hoistHash(hash))

    return <div className="w-full shadow p-4 rounded">
        <form onSubmit={(e) =>{e.preventDefault()}}>
            <div className="w-full flex justify-end mb-1 text-xs">
                <button disabled={!!address} onClick={getAddress} className="p-1 flex justify-center items-center underline">{formatConnected(address)} <span className={`inline-block h-3 w-3 ml-2 rounded-full ${address?'bg-green-400':'bg-red-500'}`}></span></button>
            </div>
            <Select instanceId="select-select" defaultValue={state.pool} placeholder="Select Pool" options={supportedPools} name='pool' onChange={handleChange(setState)} />
            <FormInput label="Pubkey" value={state.pubkey} onChange={handleChange(setState)} name='pubkey' />
            <FormInput label="Amount" value={state.amount} onChange={handleChange(setState)} name='amount' balance={`${currentAllowance}`} />
            <div className="w-full flex py-4 pt-8 justify-between">
                <button className="w-2/5 h-10 text-yellow-200 bg-blue-500 hover:bg-blue-600 rounded shadow" onClick={handleApprove(state)}>Approve</button>
                <button className="w-2/5 h-10 text-yellow-200 bg-blue-500 hover:bg-blue-600 rounded shadow" onClick={handleSubmitPool(state)}>Join Pool</button>
            </div>          
        </form>
    </div>

// return <div className="w-full shadow p-4 rounded">
// <form onSubmit={(e) =>{e.preventDefault()}}>

//     <Select instanceId="select-select" defaultValue={options[0]} placeholder="Select pair" options={options} name="address" onChange={setSelectedPair} />
//     <FormInput label="Send" value={coinsAmount.externalCoin} onChange={handleValueChange(setCoinsAmount, ratio)} name={'externalCoin'} coin={externalCoin} />
//     <FormInput label="Receive" value={coinsAmount.onChainCoin} onChange={handleValueChange(setCoinsAmount, ratio)} name={'onChainCoin'} coin={onChainCoin} balance="13,000.00" />
//     <div className="text-sm mt-3"><span>Rate:</span> <span>1 {externalCoin} = {ratio} {onChainCoin}</span> <span className="float-right">Fee: 0.0001 ETH</span></div>

    
// </form>
// </div>
}




