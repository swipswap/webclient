import { useState, useEffect } from "react"
import { toast } from 'react-toastify'
import { handleApprove, handleChange, handleSubmitPool, formatConnected, supportedPools, getAllowance, getMainPoolAddress, getAddressBalance } from "../handlers"
import FormInput from '../FormInput'
import { FormBtn } from "../Button"
import FormField from "../FormField"


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
	console.log({label, value, mainPoolAddress})
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
    return <div className="w-full">
        <form onSubmit={(e) =>{e.preventDefault()}}>
            <div className={`h-52 ${lightTheme ? 'bg-swip-light-100': 'bg-swip-deep-300'}`}>
				<div className='px-5 md:px-8'>
					<FormField>
						<FormInput
							classname='mt-3 w-full md:w-full md:mr-4 pr-3'
							inputStyle={`w-full`}
							theme={theme}
							label="Pubkey"
							value={state.pubkey} 
							onChange={handleChange(setState)}
							name='pubkey'
						/>
					</FormField>
					<div className='w-8/12 md:w-3/4 pl-4 mt-4'></div>

					<FormField className="pt-3 mb-10">
						<FormInput
							classname=''
							inputStyle={'w-3/5 text-right'}
							theme={theme}
							label="Amount"
							value={state.amount} 
							onChange={handleChange(setState)}
							name='amount' 
						/>
						<div className='w-4/12 text-xs md:text-sm pl-3 md:pl-6 pt-2 md:pt-1 flex justify-center align-center flex-col mt-4'>
							<p className={textStyle}>Balance</p>
							<p className={`${textStyle} opacity-50`}>{addressBalance > 0 ? String(addressBalance) : '0.00'}</p>
						</div>
					</FormField>
				</div>
				<div className={`${bgStyle} px-8`}>
					<div className={`w-full flex py-4 md:py-8 justify-between`}>
						<FormBtn
							disabledStatus={isLTApproved} 
							classname={`w-5/12 md:w-2/5 h-8 md:h-10 tablets:ml-6 font-semibold ${lightTheme ? 'text-black hover:text-yellow-200 hover:bg-swip-deep' : 'text-yellow-200 hover:text-black hover:bg-swip-light-300'} bg-transparent-0 border-2 border-swip-light-300 rounded shadow`}
							clickHandler={handleApprove(_state, setAllowance, toast)}
							text='Approve'
						/>
						<FormBtn 
							disabledStatus={isZeroOrGTApproved} 
							classname={`w-5/12 md:w-2/5 h-8 md:h-10 tablets:mr-6 font-semibold ${lightTheme ? 'text-black hover:text-yellow-200 hover:bg-swip-deep' : 'text-yellow-200 hover:text-black hover:bg-swip-light-300'} bg-transparent-0 border-2 border-swip-light-300 rounded shadow`}
							clickHandler={handleSubmitPool(_state, toast)}
							text='Join Pool'
						/>
					</div>
				</div>
            </div>
        </form>
    </div>
}

