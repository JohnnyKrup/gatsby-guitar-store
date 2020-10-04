import React, { useContext } from "react"

import { CartContext } from "../../context/Cart.Context"
import { UserContext } from "../../context/User.Context"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

import { NavbarStyle, LogoStyle, LinksStyle, LinkStyle } from "./navbar.styles"

import logo from "../../images/LogoClose_128.svg"

const Navbar = () => {
  //const cContext = useContext(CartContext)
  //const uContext = useContext(UserContext)
  const { cartHidden, clearCart, cartItems } = useContext(CartContext)
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
            <LinkStyle to="/app/login">anmelden</LinkStyle>
          </li>
        )}

        {user.token && (
          <li>
            {cartItems.length < 1 ? (
              <LinkStyle as="div" className="inactive">
                kasse
              </LinkStyle>
            ) : (
              <LinkStyle to="/app/checkout">kasse</LinkStyle>
            )}
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
