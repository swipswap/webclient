import useBaseURL from "../hooks/useBaseURL"

// const heroText = "Exchange digital currencies between peers without any central authority. An ethereum smart contract serves as the escrow."
export default function Hero({ lightTheme, children }){
    const {baseURL} = useBaseURL()

    const isENS = baseURL
    const isLight = lightTheme === true
    return (
        <section className={`
            ${isENS && isLight ? "bg-ens-hero-light" : // If on ENS and its light mode, render light
            isENS && !isLight ? 'bg-ens-hero-dark' : // If on ENS and on dark mode, render dark
            !isENS && isLight ? 'bg-hero-light' : // Not on ENS but is light
           'bg-hero-dark'  // Render dark in any other condition
            } pt-10 bg-hero-bg bg-no-repeat bg-cover bg-center tablets:bg-cover tablets:bg-center h-5/6 transition duration-1000 ease-in-out h-full`}>
            {/* <div className='pt-6 tablets:pt-8 mb-3 bg-right-bottom text-white w-hero-txt h-auto tablets:w-hero-big tablets:px-20 md:w-3/6 md:pt-24 mx-auto'> */}
              {children}
            {/* </div> */}
            
        </section>
    )
}
