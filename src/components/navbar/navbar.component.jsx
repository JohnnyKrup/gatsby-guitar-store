import React, { useContext } from "react"

import { CartContext } from "../../context/Cart.Context"
import { UserContext } from "../../context/User.Context"
import { SidebarContext } from "../../context/Sidebar.Context"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

import { NavbarStyle, LogoStyle, LinksStyle, LinkStyle, MenuButtonStyle, CartListItemStyle } from "./navbar.styles"

import logo from "../../images/LogoClose_128.svg"
import {GoThreeBars} from 'react-icons/go'


const Navbar = () => {  
  const { cartHidden, clearCart, cartItems } = useContext(CartContext)
  const { user, userLogout } = useContext(UserContext)
  const sidebarData = useContext(SidebarContext)

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
        
      </LinksStyle>
      <CartListItemStyle>
         <CartIcon />
         {cartHidden ? null : <CartDropdown />}
       </CartListItemStyle>

      {sidebarData && !sidebarData.isSidebarOpen && (
        <MenuButtonStyle onClick={sidebarData.showSidebar}>
          <GoThreeBars />
        </MenuButtonStyle>
      )}
    </NavbarStyle>
  )
}

export default Navbar
