import React from "react"

import { CartContext } from "../../context/Cart.Context"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

import { NavbarStyle, LogoStyle, LinksStyle, LinkStyle } from "./navbar.styles"

import links from "../../constants/links"
import logo from "../../images/LogoClose_128.svg"

const Navbar = () => {
  const { cartHidden } = React.useContext(CartContext)

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
          {cartHidden ? null : <CartDropdown />}
        </li>
      </LinksStyle>
    </NavbarStyle>
  )
}

export default Navbar
