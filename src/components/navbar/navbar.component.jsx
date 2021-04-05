import React from "react"

import PrebarNavbar from "./prebar-desktop/prebar-navbar.component"
import MainNavbar from "./mainbar-desktop/mainbar-desktop.component"
import SearchbarMobile from "./searchbar-mobile/searchbar-mobile.component"

import styled from "styled-components"

// import ApolloQuery from "../apollo-query/apollo-query.component"
// import MENU_QUERY from "../../queries/menu/menu"

const Navbar = () => {
  return (
    <NavbarStyle>
      {/* <ApolloQuery query={MENU_QUERY}>
        {({ data: menus }) => {
          // console.log({ menus })
          return null
        }}
      </ApolloQuery> */}
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
  z-index: 9;
  background: white;
`

export default Navbar
