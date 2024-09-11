import * as React from "react"
import Header from "./header"

const Layout = ({ children }) => {

  return (
    <>
      <Header/>
      <div>
        <main>{children}</main>
        <footer className="mt-3 text-xs text-center">
          © {new Date().getFullYear()} &middot; company-name
        </footer>
      </div>
    </>
  )
}

export default Layout
