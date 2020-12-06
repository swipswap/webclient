import { useState, useEffect } from "react"
import { toast } from 'react-toastify'
import Select from 'react-select'
import { handleApprove, handleChange, handleSubmitPool, formatConnected, supportedPools, getAllowance, getMainPoolAddress, getAddressBalance } from "../handlers"
import FormInput from '../FormInput'
import { stat } from "fs/promises"
import { FormBtn } from "../Button"


const initialState = {
    amount: 0,
    tokenAddress: "0x9E237f4a7AD90FfAFB0adEf703186F91428a6a38",
    pubkey: '',
    swipSwapAddress: '0xa5E04f174c9ee02F8C79E4ead2bd6961EEC797fB',
    pool: supportedPools[0]
}

export default function Pool({ lightTheme, address, pool, theme }){
    const [state, setState] = useState(initialState)
    // const [pool, setPool] = useState(supportedPools[0])
    const {label, value, mainPoolAddress} = pool
    const [currentAllowance, setAllowance] = useState(0)
		const [addressBalance, setAddressBalance] = useState(0)
		
		const bgStyle = lightTheme ? 'bg-white' : 'bg-swip-deep'
		const textStyle = lightTheme ? 'text-black': 'text-white'
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
    return <div className="w-full shadow rounded">
        <form onSubmit={(e) =>{e.preventDefault()}}>
            <div className={`h-52 ${lightTheme ? 'bg-swip-light-100': 'bg-swip-deep-300'}`}>
							<div className='px-10 pb-1'>
								<div className='flex tablets:pl-6 pl-4'>
									<FormInput
										classname='mt-3'
										inputStyle={`w-full`}
										theme={theme}
										label="Pubkey"
										value={state.pubkey} 
										onChange={handleChange(setState)}
										name='pubkey'
									/>
								</div>
								<div className='flex tablets:pl-6 pl-4 mb-2 mt-8'>
									<FormInput
										classname=''
										inputStyle={'w-3/5 text-right'}
										theme={theme}
										label="Amount"
										value={state.amount} 
										onChange={handleChange(setState)}
										name='amount' 
									/>
									<div className='pl-2 flex justify-center align-center flex-col mt-4 pt-1 pb-4 mb-3'>
										<p className={textStyle}>Balance</p>
										<p className={textStyle}>{addressBalance > 0 ? String(addressBalance) : '0.00'}</p>
									</div>
								</div>
							</div>
							
							<div className={`${bgStyle} px-10`}>
						<div className={`w-full flex py-8 justify-between`}>
							<FormBtn
								disabledStatus={isLTApproved} 
								classname={`w-2/5 h-10 tablets:ml-6 font-semibold ${lightTheme ? 'text-black hover:text-yellow-200 hover:bg-swip-deep' : 'text-yellow-200 hover:text-black hover:bg-swip-light-300'} bg-transparent-0 border-2 border-swip-light-300 rounded shadow`}
								clickHandler={handleApprove(_state, setAllowance, toast)}
								text='Approve'
							/>
							<FormBtn 
								disabledStatus={isZeroOrGTApproved} 
								classname={`w-2/5 h-10 tablets:mr-6 font-semibold ${lightTheme ? 'text-black hover:text-yellow-200 hover:bg-swip-deep' : 'text-yellow-200 hover:text-black hover:bg-swip-light-300'} bg-transparent-0 border-2 border-swip-light-300 rounded shadow`}
								clickHandler={handleSubmitPool(_state, toast)}
								text='Join Pool'
							/>
						</div>
					</div>





            </div>
            {/* <div className="w-full flex py-4 pt-16 justify-between">
                <button disabled={isLTApproved} className={isLTApproved ? 'bg-orange-400 w-2/5 h-10 rounded cursor-not-allowed' : 'w-2/5 h-10 text-yellow-200 bg-blue-500 hover:bg-blue-600 rounded shadow'} onClick={}>Approve</button>
                <button disabled={isZeroOrGTApproved} className={isZeroOrGTApproved ? 'bg-orange-400 w-2/5 h-10 rounded cursor-not-allowed' : 'w-2/5 h-10 text-yellow-200 bg-blue-500 hover:bg-blue-600 rounded shadow'} onClick={}>Join Pool</button>
            </div>           */}
        </form>
    </div>
}

