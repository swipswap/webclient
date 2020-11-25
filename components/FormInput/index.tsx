export default function FormInput({lightTheme, classname, inputStyle, label, value, onChange, coin, name, balance="", balanceText="Balance"}: {inputStyle:string; lightTheme: boolean; classname: string; label: string; value: number | string; onChange: (e?: any )=>void; coin?: string; name: string; balance?: string; balanceText?:string }){
	const bgStyle = lightTheme ? 'bg-white text-black focus:bg-white': 'bg-swip-deep text-white'	
	return (
        <div className={`${classname} w-3/4`}>
						<label className={`${lightTheme ? 'text-black' : 'text-white'}`}>{label}</label>
            <label className="relative flex w-full h-10 justify-between shadow">
                {/* <span className={`${bgStyle} flex items-center w-20 h-full pl-2 text-sm text-left`}>{coin}</span> */}
                <span className={`z-3 p-2 flex ${lightTheme ? 'text-black': 'text-white'} w-20 h-full text-sm text-right justify-start`}>{coin}</span>
                <input className={`${inputStyle} ${bgStyle} rounded-lg absolute w-full -z-1 flex left-0 h-full p-4 text-sm focus:outline-none`} name={name} value={value} onChange={onChange}/>
            </label>
        </div>
        
    )
}
