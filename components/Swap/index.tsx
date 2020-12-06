import { useState, useEffect } from "react"
import { toast } from 'react-toastify'
import { handleCommit, handleFinalise, loadPool, handleValueChange, supportedPools, getAddressBalance, toggleModalState } from "../handlers"
import Select from 'react-select'
import FormInput from '../FormInput'
import PaymentModal from "../PaymentModal"
import { tbitcoin } from "../../scripts"
import DropDown from "../DropDown"
import { FormBtn } from "../Button"

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

	const isNotComitted = lockDetails.pool === ""

	const bgStyle = `bg-${theme.swap.bgPri}`
	const textStyle = `text-${theme.swap.balTxt}`

	return <div className="w-full shadow rounded">
		<form onSubmit={(e) => { e.preventDefault() }}>
			<div className={`h-52 bg-${theme.swap.bgSec}`}>
				<div className='px-10 pb-1'>
					<div className='flex pl-2 tablets:pl-6'>
						<FormInput
							classname='mt-3'
							inputStyle={'w-3/5 text-right'}
							theme={theme}
							label="Send" value={coinsAmount.externalCoin}
							onChange={handleValueChange(setCoinsAmount, ratio)}
							name={'externalCoin'}
							coin={externalCoin}
						/>
						<div className='text-sm md:text-base pl-2 flex justify-right align-center flex-col mt-8'>
							<p className={textStyle}>Balance</p>
							<p className={textStyle}>0.00</p>
						</div>
					</div>
					<div className='w-4/5 pl-4 mt-4'>
						{
							lightTheme ? <svg className={`${textStyle} mx-auto`} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.3909 5.92105L11.1009 4.79236L7.18465 8.21912V0.567383H5.36015V8.21912L1.44385 4.79236L0.153931 5.92105L6.2724 11.2747L12.3909 5.92105Z" fill="#555353" />
							</svg> :
								<svg className={`${textStyle} mx-auto`} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12.3909 5.92105L11.1009 4.79236L7.18465 8.21912V0.567383H5.36015V8.21912L1.44385 4.79236L0.153931 5.92105L6.2724 11.2747L12.3909 5.92105Z" fill="#A67AB9" />
								</svg>
						}
					</div>
					<div className='flex tablets:pl-6 pl-2'>
						<FormInput classname='' inputStyle={'w-3/5 text-right'} theme={theme} label="Receive" value={coinsAmount.onChainCoin} onChange={handleValueChange(setCoinsAmount, ratio)} name={'onChainCoin'} coin={onChainCoin} />
						<div className='text-sm md:text-base pl-2 flex justify-center align-center flex-col mt-4 pt-1'>
							<p className={textStyle}>Balance</p>
							<p className={textStyle}>0.00</p>
						</div>
					</div>
					<div className={`text-xs pl-2 tablets:pl-6 mb-3 mt-1 mx-auto ${textStyle} tablets:px-6 flex justify-between`}>
						<span>Rate: 1 {externalCoin} = {ratio} {onChainCoin}</span>
						<span>Fee: 0.0001 ETH</span>
					</div>
				</div>
				<div className={`${bgStyle} px-10`}>
					<div className={`w-full flex py-4 md:py-8 justify-between`}>
						<FormBtn
							disabledStatus={lockDetails.pool !== ""}
							classname={`w-2/5 h-10 tablets:ml-6 font-semibold ${lightTheme ? 'text-black hover:text-yellow-200 hover:bg-swip-deep' : 'text-yellow-200 hover:text-black hover:bg-swip-light-300'} bg-transparent-0 border-2 border-swip-light-300 rounded shadow`}
							clickHandler={handleCommit({ mainPoolAddress, tokenAddress: value, amount: Number(coinsAmount.externalCoin) }, pools, setLockdetails, toast)}
							text='Commit'
						/>
						<FormBtn
							disabledStatus={lockDetails.pool === ""}
							classname={`w-2/5 h-10 tablets:mr-6 font-semibold ${lightTheme ? 'text-black hover:text-yellow-200 hover:bg-swip-deep' : 'text-yellow-200 hover:text-black hover:bg-swip-light-300'} bg-transparent-0 border-2 border-swip-light-300 rounded shadow`}
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
