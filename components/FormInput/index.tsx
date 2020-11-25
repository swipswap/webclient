export default function FormInput({lightTheme, classname, inputStyle, label, value, onChange, coin, name, balance="", balanceText="Balance"}: {inputStyle:string; lightTheme: boolean; classname: string; label: string; value: number | string; onChange: (e?: any )=>void; coin?: string; name: string; balance?: string; balanceText?:string }){
	const bgStyle = lightTheme ? 'bg-white text-black focus:bg-white': 'bg-swip-deep'	
	return (
        <div className="w-3/4">
            <span className="inline-block w-full text-right text-xs px-2">
            {/* {balance && <>
                <span className={`inline-block text-left w-12`}>{balanceText}:</span>
                <span className="inline-block text-left w-12 underline cursor-pointer hover:text-gray-700">{balance}</span>
            </>
            } */}
            </span>
						<label className={`${lightTheme ? 'text-black' : 'text-white'}`}>{label}</label>
            <label className="relative flex w-full h-10 justify-between shadow">
                {/* <span className={`${bgStyle} flex items-center w-20 h-full pl-2 text-sm text-left`}>{coin}</span> */}
                <span className={`z-20 p-2 flex ${lightTheme ? 'text-black': 'text-white'} w-16 h-full pl-2 text-sm text-right justify-start`}>{coin}</span>
                <input className={`${inputStyle} ${bgStyle} rounded-lg absolute w-full -z-1 flex left-0 h-full p-4 text-sm focus:outline-none`} name={name} value={value} onChange={onChange}/>
            </label>
        </div>
        
    )
}
