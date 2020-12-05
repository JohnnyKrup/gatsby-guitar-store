import React, { useContext } from "react"

import { CartContext } from "../../context/Cart.Context"
import { UserContext } from "../../context/User.Context"
import { SidebarContext } from "../../context/Sidebar.Context"

import CartIcon from "../cart-icon/cart-icon.component"
import AccountIcon from "../account-icon/account-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import Dropdown from "../dropdown/dropdown.component"
import CustomerProfile from "../customer-profile/customer-profile.component"

import {
  NavbarStyle,
  LogoStyle,
  LinksStyle,
  LinkListItemStyle,
  LinkStyle,
  LoginLinkStyle,
  MenuButtonStyle,
  CartListItemStyle,
  ProfileContainerStyle,
} from "./navbar.styles"

import logo from "../../images/LogoClose_128.svg"
import { GoThreeBars } from "react-icons/go"

const Navbar = () => {
  const { cartHidden } = useContext(CartContext)
  const { user, userDropdownHidden, toggleUserDropdown } = useContext(
    UserContext
  )
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
      </LinksStyle>
      {user.token ? (
        <ProfileContainerStyle onClick={toggleUserDropdown}>
          <AccountIcon />
          {/* 
            Instead of null add a <Dropdown dropDownHidden /> component
            unfortunately display: none and transitions do not work very well together
          */}
          {userDropdownHidden ? null : (
            <Dropdown
              dropDownWidth="98%"
              dropDownHeight="30vh"
              positionRight={"1%"}
              bgColor={`var(--mainBlack)`}
              flexRow
            >
              <CustomerProfile />
            </Dropdown>
          )}
        </ProfileContainerStyle>
      ) : (
        <LoginLinkStyle to="/app/login">anmelden</LoginLinkStyle>
      )}

      <CartListItemStyle>
        <CartIcon />
        {cartHidden ? null : (
          <Dropdown>
            <CartDropdown />
          </Dropdown>
        )}
      </CartListItemStyle>

      {/* Mobile Menu Icon */}
      {sidebarData && !sidebarData.isSidebarOpen && (
        <MenuButtonStyle onClick={sidebarData.showSidebar}>
          <GoThreeBars />
        </MenuButtonStyle>
      )}
    </NavbarStyle>
  )
}

export default Navbar
