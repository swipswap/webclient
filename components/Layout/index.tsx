import Navbar from '../Navbar'

const Layout = ({children}) => {
  return (
  <div className="h-screen w-full">
    {/* <Navbar /> */}
    { children }
  </div> 
  )
}

export default Layout
