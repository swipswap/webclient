import SocialLinks from "../SocialLinks";

export default function Footer({ theme, currentTheme }){
  return(
    <div className={`absolute bottom-0 w-full flex items-center h-12 md:h-20 text-center mx-auto bg-${theme.footer.bg}`}>
      <SocialLinks currentTheme={currentTheme} />
    </div>
  )
}