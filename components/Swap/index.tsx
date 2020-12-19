import { useState, useEffect } from "react"
import { toast } from 'react-toastify'
import { handleCommit, handleFinalise, loadPool, handleValueChange, supportedPools, getAddressBalance, toggleModalState } from "../handlers"
import FormInput from '../FormInput'
import PaymentModal from "../PaymentModal"
import { tbitcoin } from "../../scripts"
import { FormBtn } from "../Button"
import FormField from "../FormField"

const initLockDetails = {
	amount: "",
	index: "",
	locker: "",
	pool: "",
}

export default function Swap({ lightTheme, address, selectedPair, theme }) {

	const { label, value, mainPoolAddress } = selectedPair
	const [externalCoin, onChainCoin] = label.split(' / ')
	const [ratio, setRatio] = useState(1)
	const [pools, setPools] = useState({})
	const [lockDetails, setLockdetails] = useState(initLockDetails)
	const [addressBalance, setAddressBalance] = useState(0)
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [coinsAmount, setCoinsAmount] = useState({ externalCoin: 0, onChainCoin: 0 })

	useEffect(() => {
		if (!address) return
		(async () => {
			console.log({ mainPoolAddress })
			const _pools = await loadPool(mainPoolAddress)
			setPools(_pools)
			const bal = await getAddressBalance(value, address, toast)
			setAddressBalance(bal)
		})()
	}, [label, address])

	useEffect(() => {
		setCoinsAmount({ externalCoin: 0, onChainCoin: 0 })
		setRatio({ 'BTC / FUSD': 13_000, 'BTC / ETH': 35.85 }[label])
	}, [label])

	const firstPool = Object.keys(pools)[0]
	const pubkey = firstPool ? pools[firstPool].pubKey : ''

	// const isNotComitted = lockDetails.pool === ""

	const bgStyle = `${theme.swap.bgPri}`
	const textStyle = `${theme.swap.balTxt}`

	return <div className="w-full">
		<form onSubmit={(e) => { e.preventDefault() }}>
			<div className={`h-52 ${theme.swap.bgSec}`}>
				<div className='px-5 md:px-8'>
					<FormField>
						<FormInput
							classname='mt-3'
							inputStyle={'w-3/5 text-right'}
							theme={theme}
							label="Send" value={coinsAmount.externalCoin}
							onChange={handleValueChange(setCoinsAmount, ratio)}
							name={'externalCoin'}
							coin={externalCoin}
						/>
						<div className='w-4/12 text-xs md:text-sm pl-3 md:pl-6 pt-2 md:pt-1 flex justify-right align-center flex-col mt-8'>
							<p className={textStyle}>Balance</p>
							<p className={`${textStyle} opacity-50`}>0.00</p>
						</div>
					</FormField>
					<div className='w-8/12 md:w-3/4 pl-4 mt-4'>
						<svg className={`${textStyle} mx-auto`} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<ArrowSVGPath />
						</svg> 
					</div>
					<FormField>
						<FormInput classname='' inputStyle={'w-3/5 text-right'} theme={theme} label="Receive" value={coinsAmount.onChainCoin} onChange={handleValueChange(setCoinsAmount, ratio)} name={'onChainCoin'} coin={onChainCoin} />
						<div className='w-4/12 text-xs md:text-sm pl-3 md:pl-6 pt-2 md:pt-1 flex justify-center align-center flex-col mt-4'>
							<p className={textStyle}>Balance</p>
							<p className={`${textStyle} opacity-50`}>{addressBalance > 0 ? String(addressBalance) : '0.00'}</p>
						</div>
					</FormField>
					<div className={`w-full text-xs pl-2 tablets:pl-6 mb-3 mt-3 mx-auto ${textStyle} tablets:px-6 flex justify-between`}>
						<span className="w-8/12 md:w-3/4 inline-block"><span className="hidden md:inline-block">Rate: </span>1 {externalCoin} = {ratio} {onChainCoin}</span>
						<span className="w-4/12 md:w-1/4 inline-block pl-3 md:pl-4 text-tiny6">Fee: 0.0001ETH</span>
					</div>
				</div>
				<div className={`${bgStyle} px-8`}>
					<div className={`w-full flex py-4 md:py-8 justify-between`}>
						<FormBtn
							disabledStatus={lockDetails.pool !== ""}
							classname={`w-5/12 md:w-2/5 h-8 md:h-10 tablets:ml-6 font-semibold ${lightTheme ? 'text-black hover:text-yellow-200 hover:bg-swip-deep' : 'text-yellow-200 hover:text-black hover:bg-swip-light-300'} bg-transparent-0 border-2 border-swip-light-300 rounded shadow`}
							clickHandler={handleCommit({ mainPoolAddress, tokenAddress: value, amount: Number(coinsAmount.externalCoin) }, pools, setLockdetails, toast)}
							text='Commit'
						/>
						<FormBtn
							disabledStatus={lockDetails.pool === ""}
							classname={`w-5/12 md:w-2/5 h-8 md:h-10 tablets:mr-6 font-semibold ${lightTheme ? 'text-black hover:text-yellow-200 hover:bg-swip-deep' : 'text-yellow-200 hover:text-black hover:bg-swip-light-300'} bg-transparent-0 border-2 border-swip-light-300 rounded shadow`}
							clickHandler={toggleModalState(setModalIsOpen)}
							text='Swap'
						/>
					</div>
				</div>
			</div>

		</form>
		<PaymentModal
			isOpen={modalIsOpen}
			toggleOpen={toggleModalState(setModalIsOpen)}
			coin="BTC"
			address={tbitcoin(pubkey, Number(lockDetails.index))}
			amount={coinsAmount.externalCoin}
			disabled={lockDetails.pool === ""}
			callbackFunc={handleFinalise({ mainPoolAddress, tokenAddress: value, amount: Number(coinsAmount.externalCoin) }, lockDetails)}
		/>
	</div>
}

// const arrowSVGPath = () => 	<path d="M12.3909 5.92105L11.1009 4.79236L7.18465 8.21912V0.567383H5.36015V8.21912L1.44385 4.79236L0.153931 5.92105L6.2724 11.2747L12.3909 5.92105Z" fill="#A67AB9" />
const ArrowSVGPath = () => 	<path d="M12.3909 5.92105L11.1009 4.79236L7.18465 8.21912V0.567383H5.36015V8.21912L1.44385 4.79236L0.153931 5.92105L6.2724 11.2747L12.3909 5.92105Z" fill="#555353" />
