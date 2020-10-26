import { useState } from "react"
import {handleApprove, handleChange, handleConnect, handleSubmitPool} from "../components/handlers"
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




const initialState = {
    amount: 0,
    address: "0x9E237f4a7AD90FfAFB0adEf703186F91428a6a38",
    pubkey: ""
}

export default function Pool(){
    const [state, setState] = useState(initialState)

    return <div className="w-64 border-2 border-black-500">
        <button onClick={handleConnect}>Connect Wallet</button>
        <div>Pool</div>
        <form onSubmit={(e) =>{e.preventDefault()}}>
            {RenderFormFields(formFields, state, setState)}
            <div>
                <button onClick={handleApprove(state)} className="w-full">Approve</button>
                <button onClick={handleSubmitPool(state)} className="w-full">Pool</button>
            </div>
            
        </form>
    </div>
}