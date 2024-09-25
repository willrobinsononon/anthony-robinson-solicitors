import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {

  return (
    <div className="">
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
