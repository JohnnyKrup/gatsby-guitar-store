import React, { useContext, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import { CartContext } from "../../context/Cart.Context"
import { UserContext } from "../../context/User.Context"
import { SidebarContext } from "../../context/Sidebar.Context"

import CartIcon from "../cart-icon/cart-icon.component"
import AccountIcon from "../account-icon/account-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import Dropdown from "../dropdown/dropdown.component"
import CustomerProfile from "../customer-profile/customer-profile.component"

import styled from "styled-components"

import logo from "../../images/LogoClose_128.svg"
import { GoThreeBars, GoChevronDown, GoChevronUp } from "react-icons/go"

const query = graphql`
  {
    allStrapiCategory {
      nodes {
        title
        slug
        brands {
          title
          slug
        }
      }
    }
  }
`

const NavbarCopy = () => {
  const [shopMenuHidden, setShopMenuHidden] = useState(true)

  const { cartHidden } = useContext(CartContext)
  const { user, userDropdownHidden, toggleUserDropdown } = useContext(
    UserContext
  )
  const sidebarData = useContext(SidebarContext)

  const data = useStaticQuery(query)
  const {
    allStrapiCategory: { nodes: categories },
  } = data

  const toggleShopMenu = () => {
    setShopMenuHidden(!shopMenuHidden)
  }

  return (
    <NavbarStyle shopMenuHidden={shopMenuHidden}>
      <LogoStyle to="/">
        <img src={logo} alt="die Gitarre" />
      </LogoStyle>

      <LinksStyle shopMenuHidden={shopMenuHidden}>
        <LinkListItemStyle>
          <LinkStyle to="/">home</LinkStyle>
        </LinkListItemStyle>
        <LinkListItemStyle>
          <LinkStyle to="/about">über uns</LinkStyle>
        </LinkListItemStyle>
        <LinkListItemStyle>
          <LinkStyle to="/shop">shop</LinkStyle>
        </LinkListItemStyle>
        <ButtonListItemStyle onClick={toggleShopMenu}>
          <div>{shopMenuHidden ? <GoChevronDown /> : <GoChevronUp />}</div>
        </ButtonListItemStyle>
      </LinksStyle>
      <SubNavbarStyle shopMenuHidden={shopMenuHidden}>
        {categories.map(category => {
          return <li>{category.title}</li>
        })}
      </SubNavbarStyle>
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

const NavbarStyle = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  /* height: 70px; */
  height: ${({ shopMenuHidden }) => (shopMenuHidden ? "70px" : "120px")};
  z-index: 100;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 100px;
  background: #fff;

  -webkit-box-shadow: 0px -3px 3px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -3px 3px 3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -3px 3px 3px rgba(0, 0, 0, 0.75);

  transition: height 0.2s ease-out;

  @media screen and (max-width: 768px) {
    height: 68px;
    padding: 10px;
    margin-bottom: 20px;
  }
`

const SubNavbarStyle = styled.div`
  bottom: 0;
  width: 100%;
  height: 50px;
  display: ${({ shopMenuHidden }) => (shopMenuHidden ? "none" : "flex")};
  justify-content: space-between;

  transition: display 0.5s ease-out;
`

const LogoStyle = styled(Link)`
  height: 100%;
  width: 70px;
  padding-top: 15px;

  img {
    width: 42px;
    height: 42px;
  }

  @media screen and (max-width: 800px) {
    width: 50px;
    padding-top: 3px;
  }
`

const LinksStyle = styled.ul`
  display: none;

  @media screen and (min-width: 800px) {
    width: 80%;
    height: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: flex-end;
    padding-top: 37px;
  }
`

const LinkListItemStyle = styled.li`
  @media screen and (min-width: 800px) {
    transition: var(--mainTransition);
    height: 15px;
    /* overflow: hidden; */

    div {
      padding-top: 0;
    }

    & .inactive {
      color: var(--lightGray);
      cursor: default;
    }
  }
`

const ButtonListItemStyle = styled.li`
  @media screen and (min-width: 800px) {
    transition: var(--mainTransition);
    height: 15px;
    cursor: pointer;

    div {
      padding-top: 0;
    }
  }
`

const LinkStyle = styled(Link)`
  padding: 0px 15px;
  text-transform: uppercase;
  color: var(--darkGray);
  cursor: pointer;

  &:hover {
    color: var(--mainBlack);
  }
`

const LoginLinkStyle = styled(Link)`
  padding: 36px 15px 0 15px;
  text-transform: uppercase;
  color: var(--darkGray);
  cursor: pointer;

  &:hover {
    color: var(--mainBlack);
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const MenuButtonStyle = styled.button`
  width: 3.5rem;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: transparent;
  color: var(--mainBlack);
  transition: var(--mainTransition);
  background-color: var(--mainWhite);
  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }
`

const CartListItemStyle = styled.div`
  padding-top: 37px;

  @media (max-width: 800px) {
    padding-top: 18px;
  }
`

const ProfileContainerStyle = styled.div`
  padding-top: 37px;
  justify-content: center;

  @media (max-width: 800px) {
    padding-top: 18px;
  }
`

export default NavbarCopy
