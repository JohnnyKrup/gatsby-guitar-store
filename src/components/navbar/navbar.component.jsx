import React from "react"

import PrebarNavbar from "./prebar-desktop/prebar-navbar.component"
import MainNavbar from "./mainbar-desktop/mainbar-desktop.component"
import SearchbarMobile from "./searchbar-mobile/searchbar-mobile.component"

import styled from "styled-components"

const Navbar = () => {
  return (
    <NavbarStyle>
      <PrebarNavbar />
      <MainNavbar />
      <SearchbarMobile />
    </NavbarStyle>
  )
}

const NavbarStyle = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 900;
  background: white;
`

export default Navbar
