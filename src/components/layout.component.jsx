import React, { useContext } from "react"
import Helmet from 'react-helmet'

import styled from "styled-components"

import {SidebarContext} from '../context/Sidebar.Context'

import Navbar from "./navbar/navbar.component"
import ScrollButton from "./scroll-button/scroll-button.component"
import Sidebar from "./sidebar/sidebar.component"

const Layout = ({ children }) => {
  const {isSidebarOpen} = useContext(SidebarContext)
  // console.log({isSidebarOpen})

  return (
    <>
    <Helmet>
      {
        // react-helmet plugin allows to add classes dynamically to specific tags i.e. <body>
        isSidebarOpen && <body className="noscroll-y" />
      }
    </Helmet>
    <LayoutStyle>      
      <Navbar />
      {isSidebarOpen && <Sidebar />}
      <ScrollButton />
      {children}
    </LayoutStyle>    
    </>    
  )
}

export default Layout

export const LayoutStyle = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
`
