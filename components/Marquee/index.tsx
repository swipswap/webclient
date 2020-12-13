const supportedChains = [
  {
    img: "/eth.png",
    text: "Mainnet",
    alt: "Mainnet",
  },
  {
    img: "/xdai.png",
    text: "",
    alt: "xdai",
  },
  {
    img: "/bnb.png",
    text: "",
    alt: "Binance smart chain",
  },
  {
    img: "/eth.png",
    text: "Ropsten",
    alt: "Ropsten",
  },
  {
    img: "/eth.png",
    text: "Kovan",
    alt: "Kovan",
  },
  {
    img: "/eth.png",
    text: "Rinkeby",
    alt: "Rinkeby",
  },
  {
    img: "/eth.png",
    text: "Georli",
    alt: "Georli",
  },

]


export default function Marquee(){
  return (
      <div className ="marquee-container w-full h-10 md:h-12 mt-16 md:mt-20 border border-swip-light bg-swip-light-100">
        <Mrq position="1" />
        <Mrq position="2" />
      </div>
  )
}

const Mrq = ({position}) => {
return (
  <div className={`marquee0${position} w-full h-full`}>
    <div className="w-full flex justify-between h-full items-center px-10">
      <span className="hidden md:inline-block">Support for the smartchains you already use</span>
      {
        supportedChains.map(supportedChain => {
          return (
            <div className="h-6 w-20 flex flex-wrap items-center">
              <img className="h-full mr-1" src={supportedChain.img} alt={supportedChain.alt} />
              <span>{supportedChain.text}</span>
            </div>
          )
        })
      }   
    </div>             
  </div>
)
}