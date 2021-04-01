import React, { useContext } from "react"
import Helmet from "react-helmet"

import styled from "styled-components"

import { SidebarContext } from "../context/Sidebar.Context"
import MegaMenuMobile from "./navbar/mega-menu/mega-menu-mobile.component"
import MegaMenu from "./navbar/mega-menu/mega-menu.component"
import SEO from "./SEO/seo.component"

import Navbar from "./navbar/navbar.component"
import ScrollButton from "./scroll-button/scroll-button.component"
import Sidebar from "./sidebar/sidebar.component"
import Footer from "./footer/footer.component"

const Layout = ({ children, bgColor }) => {
  const { isSidebarOpen } = useContext(SidebarContext)
  // console.log({isSidebarOpen})

  return (
    <>
      <SEO />
      <Helmet>
        {
          // react-helmet plugin allows to add classes dynamically to specific tags i.e. <body>
          isSidebarOpen && <body className="noscroll-y" />
        }
      </Helmet>
      <LayoutStyle bgColor={bgColor}>
        <Navbar />
        <MegaMenuMobile />
        <MegaMenu />
        {isSidebarOpen && <Sidebar />}
        <ScrollButton />
        {children}
        <Footer />
      </LayoutStyle>
      {/* <script
        async
        src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
      ></script>
      <div
        id="snipcart"
        data-config-modal-style="side"
        data-api-key="Mzk5YWZmZWEtMTdlOS00ZGYyLTgzOWUtYmVmYjM4NTAxNzZhNjM3NTA0NjA3ODQ1NzIyODcw"
        hidden
      ></div> */}
    </>
  )
}

export default Layout

export const LayoutStyle = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props =>
    props.bgColor ? props.bgColor : "var(--mainWhite)"};
  /* padding-top: 100px; */
`
