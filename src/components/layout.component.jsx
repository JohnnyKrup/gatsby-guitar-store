import React from "react"

import Navbar from "./navbar/navbar.component"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export default Layout
