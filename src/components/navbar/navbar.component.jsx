import React, { useContext } from "react"

import { CartContext } from "../../context/Cart.Context"
import { UserContext } from "../../context/User.Context"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

import { NavbarStyle, LogoStyle, LinksStyle, LinkStyle } from "./navbar.styles"

import links from "../../constants/links"
import logo from "../../images/LogoClose_128.svg"

const Navbar = () => {
  const { cartHidden, clearCart } = useContext(CartContext)
  const { user, userLogout } = useContext(UserContext)

  return (
    <NavbarStyle>
      <LogoStyle to="/">
        <img src={logo} alt="die Gitarre" />
      </LogoStyle>
      <LinksStyle>
        <li>
          <LinkStyle to="/">home</LinkStyle>
        </li>
        <li>
          <LinkStyle to="/about">über uns</LinkStyle>
        </li>
        <li>
          <LinkStyle to="/shop">shop</LinkStyle>
        </li>
        {user.token ? (
          <li>
            <LinkStyle
              as="div"
              onClick={() => {
                userLogout()
                clearCart()
              }}
            >
              abmelden
            </LinkStyle>
          </li>
        ) : (
          <li>
            <LinkStyle to="/login">anmelden</LinkStyle>
          </li>
        )}

        {user.token && (
          <li>
            <LinkStyle to="/checkout">kasse</LinkStyle>
          </li>
        )}
        <li>
          <CartIcon />
          {cartHidden ? null : <CartDropdown />}
        </li>
      </LinksStyle>
    </NavbarStyle>
  )
}

export default Navbar
