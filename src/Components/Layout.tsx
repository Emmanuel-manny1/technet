import { Outlet } from "react-router-dom"
import Header from "./Header"
import OnAirBar from "./OnAirBar"
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
     <Header />
    <OnAirBar />
    <Outlet />
    <Footer />
    </>
  )
   
}

export default Layout
