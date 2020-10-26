import { useState } from "react"
import {handleChange, handleCommit, handleFinalise} from "../components/handlers"
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
    address: "0x9E237f4a7AD90FfAFB0adEf703186F91428a6a38"
}

export default function Swap(){
    const [state, setState] = useState(initialState)

    return <div className="w-64 border-2 border-black-500">
        <div>Swap</div>
        <form onSubmit={(e) =>{e.preventDefault()}}>
            {RenderFormFields(formFields, state, setState)}
            <div>
                <button onClick={handleCommit(state)} className="w-full">Commit</button>
                <button onClick={handleFinalise(state)} className="w-full">Swap</button>
            </div>
            
        </form>
    </div>
}