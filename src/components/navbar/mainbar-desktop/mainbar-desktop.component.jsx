import React, { useState, useContext } from "react"
import { Link } from "gatsby"

import { NavigationContext } from "../../../context/NavigationContext"
import { CartContext } from "../../../context/Cart.Context"
import CartIcon from "../../cart-icon/cart-icon.component"
import Dropdown from "../../dropdown/dropdown.component"
import CartDropdown from "../../cart-dropdown/cart-dropdown.component"

import styled from "styled-components"
import { SVGIcon } from "../navbar.styles"
import searchBtn from "../../../images/search-thin.svg"
import logo from "../../../images/LogoClose_128.svg"
import accountBtn from "../../../images/account.svg"

const MainbarDesktop = () => {
  const [activeMenu, setActiveMenu] = useState("")

  const { toggleMegamenu, loadActiveCategories, menus } = useContext(
    NavigationContext
  )
  const { cartHidden } = useContext(CartContext)

  // console.log({ menus })

  return (
    <HiddenTablet id="main-nav-desktop">
      <AppHeaderBar>
        <AppHeaderBarInner>
          <AppHeaderBarLogo id="Logo" to="/">
            <DieGitarreLogo src={logo} alt="dieGitarre.ch" />
          </AppHeaderBarLogo>
          <HeaderBarCategoriesContainer id="Categories">
            {menus.map(({ title, strapiId, categories }) => {
              return (
                <HeaderBarCategory
                  isMenuActive={activeMenu === title}
                  onClick={() => {
                    setActiveMenu(title)
                    loadActiveCategories(categories)
                    toggleMegamenu(title)
                  }}
                  key={strapiId}
                >
                  <CategoryTitle>{title}</CategoryTitle>
                </HeaderBarCategory>
              )
            })}
          </HeaderBarCategoriesContainer>
          <HeaderSearchContainer id="Search">
            <HeaderSearchForm>
              <HeaderSearchInputContainer>
                <HeaderSearchBtn>
                  <SVGIcon
                    src={searchBtn}
                    alt="search"
                    style={{ width: "24px", height: "24px" }}
                  />
                </HeaderSearchBtn>
                <HeaderSearchInput
                  type="search"
                  placeholder="SUCHE (z.B. 'Martin 000')"
                />
              </HeaderSearchInputContainer>
            </HeaderSearchForm>
          </HeaderSearchContainer>
          <HeaderIconContainer id="IconsRight">
            <HeaderIcon>
              <HeaderIconCalloutWrapper>
                <img
                  src={accountBtn}
                  alt="Mein Konto"
                  style={{ width: "28px", height: "28px" }}
                />
              </HeaderIconCalloutWrapper>
            </HeaderIcon>
          </HeaderIconContainer>
          <HeaderIconContainer>
            <HeaderIcon>
              <HeaderIconCalloutWrapper>
                <CartIcon />
                {cartHidden ? null : (
                  <Dropdown>
                    <CartDropdown />
                  </Dropdown>
                )}
              </HeaderIconCalloutWrapper>
            </HeaderIcon>
          </HeaderIconContainer>
        </AppHeaderBarInner>
      </AppHeaderBar>
    </HiddenTablet>
  )
}

const HiddenTablet = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`

const AppHeaderBar = styled.div`
  background: white;
  border-bottom: 1px solid black;
`

const AppHeaderBarInner = styled.div`
  padding: 15px;
  width: 100%;
  height: 116px;
  max-width: 2000px;
  margin: 0 auto;
  position: relative;

  @media (min-width: 992px) {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    padding: 0 15px;
    height: 69px;
  }
`

const AppHeaderBarLogo = styled(Link)`
  display: inline-block;
  position: relative;
  top: 0;
  width: 48px;
  margin: 2px 8px 0 0;

  @media (min-width: 992px) {
    top: 0;
    margin-left: 20px;
    margin-right: 20px;
  }
`

const DieGitarreLogo = styled.img`
  width: 38px;
  height: 38px;
`

const HeaderBarCategoriesContainer = styled.span`
  font-weight: 400;
  bottom: 10px;
  position: relative;
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;

  @media (min-width: 992px) {
    display: inline-block;
    margin: 5px 20px 5px 0;
    top: 0;
  }
`

const HeaderBarCategory = styled.button`
  display: inline-block;
  cursor: pointer;
  padding: 0 10px 0 0;
  position: relative;
  user-select: none;
  background-color: transparent;
  border: 0;
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isMenuActive ? "#000" : "#ccc")};
  border-bottom: ${props =>
    props.isMenuActive ? "1px solid #000" : "1px solid transparent"};

  @media (min-width: 768px) {
    margin: 0 10px;
    padding: 0;
  }
`

const CategoryTitle = styled.span`
  text-transform: uppercase;
`

const HeaderSearchContainer = styled.span`
  display: block;

  @media (min-width: 992px) {
    flex-grow: 2;
    margin: 0 10px;
  }
`

const HeaderSearchForm = styled.form`
  width: 100%;
  display: flex;
  border-radius: 2px;
  position: relative;
  margin: 0;

  div {
    color: white;
    border: 1px solid #000;
  }
`

const HeaderSearchInputContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  position: relative;
`

const HeaderSearchBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  width: 45px;
  color: #000;
  background-color: #fff;
  border-radius: 0 1px 1px 0;
  font-weight: 300;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  border: none;
`

const HeaderSearchInput = styled.input`
  text-transform: uppercase;
  color: #6d7288;
  width: 100%;

  font-weight: 400;
  height: 45px;
  background: #fff;
  border: 0;
  outline: 0;
  padding: 0 16px 0 2px;
  flex: 1 0 0;
  border-radius: 1px 0 0 1px;
  font-size: 16px;
`

const HeaderIconContainer = styled.div`
  position: absolute;
  display: inline-flex;
  align-self: stretch;
  top: 0;
  right: 15px;
  margin-left: 10px;
  font-size: 21px;
  height: 57px;
  cursor: pointer;

  @media (min-width: 992px) {
    position: static;
    display: flex;
    height: auto;
  }
`

const HeaderIcon = styled.div`
  position: relative;
  display: inline-flex;
  padding: 0 10px;
  align-items: center;

  @media (min-width: 992px) {
    padding-top: 0;
  }
`

const HeaderIconCalloutWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`

export default MainbarDesktop
