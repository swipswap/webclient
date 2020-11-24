import useBaseURL from "../hooks/useBaseURL"

// const heroText = "Exchange digital currencies between peers without any central authority. An ethereum smart contract serves as the escrow."
export default function Hero({ theme, children }){
    const {baseURL} = useBaseURL()

    const isENS = baseURL
    const isLight = theme === true
    return (
        <section className={`w-full 
            ${isENS && isLight ? "bg-ens-hero-light" : // If on ENS and its light mode, render light
            isENS && !isLight ? 'bg-ens-hero-dark' : // If on ENS and on dark mode, render dark
            !isENS && isLight ? 'bg-hero-light' : // Not on ENS but is light
           'bg-hero-dark'  // Render dark in any other condition
            } bg-hero-bg p-10 bg-no-repeat bg-cover bg-center tablets:bg-cover tablets:bg-center tablets:h-hero-big`}>
            <div className='pt-8 bg-right-bottom text-white w-hero-txt h-auto tablets:w-hero-big tablets:px-20 md:w-3/6 md:pt-24 mx-auto'>
              {children}
            </div>
            
        </section>
    )
}
