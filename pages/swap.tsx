import { useState, useEffect } from "react"
import {handleChange, handleCommit, handleFinalise, loadPool} from "../components/handlers"
import RenderFormFields from "../components/RenderFormFields"

const formFields = (state, setState) => [
    {
        placeholder: "Currency",
        name: "address",
        type: "select",
        options: [
            {text: "ETH", value: "0x0000000000000000000000000000000000000000"},
            {text: "TUSD", value: "0x9E237f4a7AD90FfAFB0adEf703186F91428a6a38"}
        ],
        value: state['address'],
        onChange: handleChange(setState),
    },
    {
        placeholder: "Amount",
        name: "amount",
        type: "number",
        value: state['amount'],
        onChange: handleChange(setState),
    },
]

const initialState = {
    amount: 0,
    address: "0x9E237f4a7AD90FfAFB0adEf703186F91428a6a38",
    poolAddress: "0x4b03Ac42133936ABf9c7C26c0aF3a08C27d56182"
}

// const initLockDetails = {
//     amount: "1300",
//     index: "4",
//     pool: "0x00B6845c6F47C770cE630B96df9BD4A6dA91C65d",
//     locker: "0x17Cb83eB3C6971e14Ef4D8B57E21d4E8cF3E5eF4",
// }
const initLockDetails = {
    amount: "",
    index: "",
    locker: "",
    pool: "",
}

export default function Swap(){
    const [state, setState] = useState(initialState)
    const [pools, setPools] = useState({})
    const [lockDetails, setLockdetails] = useState(initLockDetails)

    useEffect(() => {
        (async () => {
            const _pools = await loadPool(state.poolAddress)
            setPools(_pools)
        })()
    },[])
    
    return <div className="w-64 border-2 border-black-500">
        <div>Swap</div>
        <form onSubmit={(e) =>{e.preventDefault()}}>
            {RenderFormFields(formFields, state, setState)}
            <div>
                <button disabled={lockDetails.pool!==""} onClick={handleCommit(state, pools, setLockdetails)} className="w-full">Commit</button>
                <button disabled={lockDetails.pool===""} onClick={handleFinalise(state, lockDetails)} className="w-full">Swap</button>
            </div>
            
        </form>
    </div>
}