// export default function FormInput({label, value, onChange, coin, name, balance="", balanceText="Balance", textPosition="right"}: {label: string; textPosition?:string; value: number | string; onChange: (e?: any )=>void; coin?: string; name: string; balance?: string; balanceText?:string }){
//     return (
        // <div className="mt-8">
        //     <span className="inline-block w-full text-right text-xs px-2">
        //     {balance && <>
        //         <span className={`inline-block text-left w-12`}>{balanceText}:</span>
        //         <span className="inline-block text-left w-12 underline cursor-pointer hover:text-gray-700">{balance}</span>
        //     </>
        //     }
        //     </span>
        //     <label className="relative flex w-full h-10 justify-between shadow">
        //         <span className="flex items-center w-20 h-full pl-2 text-xl text-left">{label}</span>
        //         <input className={`absolute w-full -z-1 flex left-0 items-center text-xl h-full px-20 pr-16 text-${textPosition} focus:outline-none`} name={name} value={value} onChange={onChange}/>
        //         <span className="flex items-center w-16 h-full pr-2 text-xl text-right justify-end">{coin}</span>
export default function FormInput({theme, classname, inputStyle, label, value, onChange, coin, name, balance="", balanceText="Balance"}: {inputStyle:string; theme: Theme; classname: string; label: string; value: number | string; onChange: (e?: any )=>void; coin?: string; name: string; balance?: string; balanceText?:string }){
	const bgStyle = theme ? `bg-${theme.swap.bgPri} text-${theme.swap.balTxt} focus:bg-${theme.swap.balTxt}`: 'bg-swip-deep text-white'	
	return (
        <div className={`${classname} w-3/4`}>
						<label className={`text-sm md:text-base text-${theme.swap.balTxt}`}>{label}</label>
            <label className="relative flex w-full h-10 justify-between shadow">
                <span className={`z-3 p-2 flex ${theme ? 'text-black': 'text-white'} w-20 h-full text-sm text-right justify-start`}>{coin}</span>
                <input className={`${inputStyle} ${bgStyle} rounded-lg absolute w-full -z-1 flex left-0 h-full p-4 text-sm focus:outline-none`} name={name} value={value} onChange={onChange}/>
            </label>
        </div>
        
    )
}
