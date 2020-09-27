import React from "react"
import styled from "styled-components"

import Navbar from "./navbar/navbar.component"

const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      <Navbar />
      {children}
    </LayoutStyle>
  )
}

export default Layout

export const LayoutStyle = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
