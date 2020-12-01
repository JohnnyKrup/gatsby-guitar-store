import React, { useContext } from "react"

import { CartContext } from "../../context/Cart.Context"
import { UserContext } from "../../context/User.Context"
import { SidebarContext } from "../../context/Sidebar.Context"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import Dropdown from "../dropdown/dropdown.component"
import CustomerProfile from "../customer-profile/customer-profile.component"

import {
  NavbarStyle,
  LogoStyle,
  LinksStyle,
  LinkListItemStyle,
  LinkStyle,
  MenuButtonStyle,
  CartListItemStyle,
} from "./navbar.styles"

import logo from "../../images/LogoClose_128.svg"
import { GoThreeBars } from "react-icons/go"

const Navbar = () => {
  const { cartHidden, clearCart, cartItems } = useContext(CartContext)
  const {
    user,
    userLogout,
    userDropdownHidden,
    toggleUserDropdown,
  } = useContext(UserContext)
  const sidebarData = useContext(SidebarContext)

  return (
    <NavbarStyle>
      <LogoStyle to="/">
        <img src={logo} alt="die Gitarre" />
      </LogoStyle>

      <LinksStyle>
        <LinkListItemStyle>
          <LinkStyle to="/">home</LinkStyle>
        </LinkListItemStyle>
        <LinkListItemStyle>
          <LinkStyle to="/about">über uns</LinkStyle>
        </LinkListItemStyle>
        <LinkListItemStyle>
          <LinkStyle to="/shop">shop</LinkStyle>
        </LinkListItemStyle>
        {user.token ? (
          <LinkListItemStyle>
            <LinkStyle
              as="div"
              // onClick={() => {
              //   userLogout()
              //   clearCart()
              // }}
              onClick={toggleUserDropdown}
            >
              {user.username}
            </LinkStyle>
            {userDropdownHidden ? null : (
              <Dropdown
                dropDownWidth="30%"
                dropDownHeight="60vh"
                positionRight={"2px"}
                bgColor={`var(--mainBlack)`}
              >
                <CustomerProfile />
              </Dropdown>
            )}
          </LinkListItemStyle>
        ) : (
          <LinkListItemStyle>
            <LinkStyle to="/app/login">anmelden</LinkStyle>
          </LinkListItemStyle>
        )}

        {/* {user.token && (
          <LinkListItemStyle>
            {cartItems.length < 1 ? (
              <LinkStyle as="div" className="inactive">
                kasse
              </LinkStyle>
            ) : (
              <LinkStyle to="/app/checkout">kasse</LinkStyle>
            )}
          </LinkListItemStyle>
        )} */}
      </LinksStyle>
      <CartListItemStyle>
        <CartIcon />
        {cartHidden ? null : (
          <Dropdown>
            <CartDropdown />
          </Dropdown>
        )}
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
