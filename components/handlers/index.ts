import { ethAPI } from "../../scripts/ethereum"

export const handleChange = (setState) => e => {
    const {name, value} = e.target
    setState(prevState => ({...prevState, [name]: value}))
}

export const handleApprove = (state) => e => {
    console.log(state)
}

export const handleSubmitPool = (state) => e => {
    console.log(state)
}

export const handleCommit = (state) => e => {
    console.log(state)
}

export const handleFinalise = (state) => e => {
    console.log(state)
}

export const handleConnect = async () => {
    await ethAPI.connect()
}
