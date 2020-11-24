import SocialLinks from "../SocialLinks";

export default function Footer({ theme }){
  const bgMode = !theme ? 'bg-swip-deep' : ''
  return(
    <div className={`p-5 h-7 text-center mx-auto ${bgMode}`}>
      <SocialLinks theme={theme} />
    </div>
  )
}