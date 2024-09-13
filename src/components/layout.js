import * as React from "react"
import Header from "./header"

const Layout = ({ children }) => {

  return (
    <div className="">
      <Header/>
      <div>
        <main>{children}</main>
        <footer className="relative mt-3 text-xs text-center z-20">
          © {new Date().getFullYear()} &middot; Anthony Robinson Solicitors
        </footer>
      </div>
    </div>
  )
}

export default Layout
