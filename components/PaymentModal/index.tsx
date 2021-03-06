import QrCode from "qrcode.react"
import { makeQrURI } from "../handlers"

export default function PaymentModal({isOpen, coin, address, amount, disabled, callbackFunc, toggleOpen}){
    return (
        isOpen
        ?<div className={`flex overflow-hidden fixed top-0 left-0 w-full h-full flex-wrap justify-center items-center z-10 modal`}>
        <div className="w-300 h-550 bg-white text-black rounded-lg border-2 border-white shadow-md p-4">
            <div className="w-full h-5"><Cancel setIsOpen={toggleOpen} /></div>
            <div className="w-full flex flex-wrap p-4">
                <div className="text-center text-send-test w-full mt-1">
                    {`Sending ${coin} to the address below`}
                </div>
                <div className="mt-4 w-full">
                    <div className="mb-2 text-xs">Amount</div>
                    <div className="w-full rounded-full bg-gray-600 px-4 py-1 text-white flex items-center justify-between">
                        {amount}
                        <span className="float-right"><Copy text={amount} /></span>
                    </div>
                </div>
                <div className="w-full my-8">
                    <QrCode value={makeQrURI(coin, address, amount)} size={130} className="border-2 border-dexcrow-light p-2 m-auto" />
                </div>
                <div className="text-dexcrow-deep w-full ">
                    <div className="mb-2 text-xs">{`${coin} Address`}</div>
                    <div className="w-full rounded-full bg-gray-600 px-4 py-1 text-white flex items-center justify-between overflow-hidden">
                        {address.slice(0,15)}...
                        <span className="float-right"><Copy text={address} /></span>
                    </div>
                </div>
                <button
                    className="w-full h-10 rounded-lg bg-gray-800 mt-12 text-white"
                    disabled={disabled}
                    onClick={callbackFunc}
                >
                    Complete swap
                </button>
            </div>
        </div>
    </div>
    : null
    )
}

const Cancel = ({setIsOpen}) => {
    return (
        <svg onClick={setIsOpen} className="float-right" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 0.916656C8.60456 0.916656 6.75172 1.47871 5.17575 2.53174C3.59978 3.58477 2.37146 5.08148 1.64612 6.83261C0.920778 8.58373 0.730996 10.5106 1.10077 12.3696C1.47055 14.2286 2.38327 15.9362 3.72352 17.2764C5.06378 18.6167 6.77136 19.5294 8.63035 19.8992C10.4893 20.269 12.4162 20.0792 14.1673 19.3538C15.9185 18.6285 17.4152 17.4002 18.4682 15.8242C19.5212 14.2482 20.0833 12.3954 20.0833 10.5C20.0833 9.24149 19.8354 7.99531 19.3538 6.83261C18.8722 5.6699 18.1663 4.61344 17.2764 3.72355C16.3865 2.83365 15.3301 2.12775 14.1673 1.64614C13.0046 1.16454 11.7585 0.916656 10.5 0.916656ZM13.097 11.7362C13.1869 11.8253 13.2582 11.9313 13.3068 12.0481C13.3555 12.1649 13.3805 12.2901 13.3805 12.4167C13.3805 12.5432 13.3555 12.6684 13.3068 12.7852C13.2582 12.902 13.1869 13.008 13.097 13.0971C13.008 13.1869 12.902 13.2582 12.7852 13.3068C12.6684 13.3555 12.5431 13.3805 12.4166 13.3805C12.2901 13.3805 12.1649 13.3555 12.0481 13.3068C11.9313 13.2582 11.8253 13.1869 11.7362 13.0971L10.5 11.8512L9.26371 13.0971C9.17462 13.1869 9.06863 13.2582 8.95185 13.3068C8.83507 13.3555 8.70981 13.3805 8.5833 13.3805C8.45679 13.3805 8.33153 13.3555 8.21474 13.3068C8.09796 13.2582 7.99197 13.1869 7.90288 13.0971C7.81306 13.008 7.74176 12.902 7.69311 12.7852C7.64446 12.6684 7.61941 12.5432 7.61941 12.4167C7.61941 12.2901 7.64446 12.1649 7.69311 12.0481C7.74176 11.9313 7.81306 11.8253 7.90288 11.7362L9.14871 10.5L7.90288 9.26374C7.72242 9.08328 7.62104 8.83853 7.62104 8.58332C7.62104 8.32812 7.72242 8.08336 7.90288 7.90291C8.08334 7.72245 8.32809 7.62107 8.5833 7.62107C8.8385 7.62107 9.08326 7.72245 9.26371 7.90291L10.5 9.14874L11.7362 7.90291C11.9167 7.72245 12.1614 7.62107 12.4166 7.62107C12.6718 7.62107 12.9166 7.72245 13.097 7.90291C13.2775 8.08336 13.3789 8.32812 13.3789 8.58332C13.3789 8.83853 13.2775 9.08328 13.097 9.26374L11.8512 10.5L13.097 11.7362Z" fill="#CB0909"/>
        </svg>
    )
}

const Copy = ({text}) => {
    return (
        <svg onClick={() => navigator.clipboard.writeText(text)}  className="inline-block stroke-current text-white cursor-pointer hover:text-gray-300" width="20" height="20" viewBox="0 0 14 15"  xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3636 0H2.70455C2.61705 0 2.54545 0.0602679 2.54545 0.133929V1.07143C2.54545 1.14509 2.61705 1.20536 2.70455 1.20536H12.5682V12.7232C12.5682 12.7969 12.6398 12.8571 12.7273 12.8571H13.8409C13.9284 12.8571 14 12.7969 14 12.7232V0.535714C14 0.239397 13.7156 0 13.3636 0ZM10.8182 2.14286H0.636364C0.284375 2.14286 0 2.38225 0 2.67857V11.5631C0 11.7054 0.0676135 11.841 0.186932 11.9414L3.63324 14.8426C3.67699 14.8795 3.7267 14.9096 3.7804 14.9347V14.9665H3.86392C3.93352 14.9883 4.0071 15 4.08267 15H10.8182C11.1702 15 11.4545 14.7606 11.4545 14.4643V2.67857C11.4545 2.38225 11.1702 2.14286 10.8182 2.14286ZM3.77841 13.2623L2.06619 11.8192H3.77841V13.2623ZM10.0227 13.7946H5.05114V11.4174C5.05114 11.0474 4.69517 10.7478 4.25568 10.7478H1.43182V3.34821H10.0227V13.7946Z" fill="#005D8D" />
        </svg>
    )
}
