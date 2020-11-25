import SocialLinks from "../SocialLinks";

export default function Footer({ lightTheme }){
  const bgMode = !lightTheme ? 'bg-swip-deep' : ''
  return(
    <div className={`p-5 h-1/6 text-center mx-auto ${bgMode}`}>
      <SocialLinks lightTheme={lightTheme} />
    </div>
  )
}