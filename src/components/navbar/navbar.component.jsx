import React from "react"

import CartIcon from "../cart-icon/cart-icon.component"

import { NavbarStyle, LogoStyle, LinksStyle, LinkStyle } from "./navbar.styles"
import links from "../../constants/links"
import logo from "../../images/LogoClose_128.svg"

const Navbar = () => {
  return (
    <NavbarStyle>
      <LogoStyle to="/">
        <img src={logo} alt="die Gitarre" />
      </LogoStyle>
      <LinksStyle>
        {links.map((link, index) => (
          <li key={index}>
            <LinkStyle to={link.url}>{link.label}</LinkStyle>
          </li>
        ))}
        <li>
          <CartIcon />
        </li>
      </LinksStyle>
    </NavbarStyle>
  )
}

export default Navbar
