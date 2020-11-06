export default function FormInput({label, value, onChange, coin, name, balance="", balanceText="Balance"}: {label: string; value: number | string; onChange: (e?: any )=>void; coin?: string; name: string; balance?: string; balanceText?:string }){
    return (
        <div className="mt-8">
            <span className="inline-block w-full text-right text-xs px-2">
            {balance && <>
                <span className={`inline-block text-left w-12`}>{balanceText}:</span>
                <span className="inline-block text-left w-12 underline cursor-pointer hover:text-gray-700">{balance}</span>
            </>
            }
            </span>
            <label className="relative flex w-full h-10 justify-between shadow">
                <span className="flex items-center w-20 h-full pl-2 text-xl text-left ">{label}</span>
                <input className="absolute w-full -z-1 flex left-0 items-center text-xl h-full px-20 pr-16 text-right focus:outline-none" name={name} value={value} onChange={onChange}/>
                <span className="flex items-center w-16 h-full pr-2 text-xl text-right justify-end">{coin}</span>
            </label>
        </div>
        
    )
}
