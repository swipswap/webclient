export default function FormInput({theme, classname, inputStyle, label, value, onChange, coin, name, balance="", balanceText="Balance"}: {inputStyle:string; theme: Theme; classname: string; label: string; value: number | string; onChange: (e?: any )=>void; coin?: string; name: string; balance?: string; balanceText?:string }){
	const bgStyle = `${theme.swap.bgPri} ${theme.swap.balTxt} focus:${theme.swap.bgPri}`
	return (
        <div className={`w-8/12 md:w-3/4 ${classname}`}>
			<span className={`text-sm md:text-base ${theme.swap.balTxt}`}>{label}</span>
            <label className="relative flex w-full h-10 justify-between shadow overflow-hidden rounded-lg">
                {/* <span className={`z-3 p-2 flex ${theme ? 'text-black': 'text-white'} w-20 h-full text-sm text-right justify-start`}>{coin}</span> */}
                <input autoComplete="off" className={`${inputStyle} ${bgStyle} rounded-lg absolute w-full -z-1 flex left-0 h-full p-4 text-sm focus:outline-none`} name={name} value={value} onChange={onChange}/>
            </label>
        </div>
        
    )
}
