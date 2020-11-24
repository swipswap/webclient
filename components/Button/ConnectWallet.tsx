export default function ConnectWallet({ theme, text }) {
  const btnClass = theme ? "bg-swip-light text-swip-primary" : "bg-swip-deep text-white"
  return (
    <button className={`mr-2 h-10 text-base text-center max-w-xs overflow-hidden tablets:h-12 focus:outline-none outline-none shadow-none border lg:font-bold rounded-lg ${btnClass} px-3`}>{text}</button>
  )
}