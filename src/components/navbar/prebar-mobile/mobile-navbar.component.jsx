import React, { useState, useContext } from "react"
import { Link } from "gatsby"

import { NavigationContext } from "../../../context/NavigationContext"

import styled from "styled-components"
import cancelBtn from "../../../images/cancel-thin.svg"
import burgerBtn from "../../../images/menu-thin.svg"
import accountBtn from "../../../images/account.svg"
import searchBtn from "../../../images/search-thin.svg"
import mobileLogo from "../../../images/dieGitarreLogo2019.svg"

const MobileNavbar = () => {
  const {
    isMobileMenuHidden,
    toggleMobileMenu,
    toggleMobileSearch,
  } = useContext(NavigationContext)
  // console.log({ isMobileMenuHidden })

  return (
    <PreBarInnerBurger>
      <PreBarLeftContainer>
        <BurgerButtonWrapper>
          <BurgerButtonCloseButton onClick={() => toggleMobileMenu()}>
            <SVGIcon
              src={isMobileMenuHidden ? burgerBtn : cancelBtn}
              style={{ height: "24px", width: "24px" }}
              alt={isMobileMenuHidden ? "menu button" : "close button"}
            />
          </BurgerButtonCloseButton>
        </BurgerButtonWrapper>
        <SearchButtonWrapper onClick={() => toggleMobileSearch()}>
          <SVGIcon src={searchBtn} style={{ height: "24px", width: "24px" }} />
        </SearchButtonWrapper>
      </PreBarLeftContainer>
      <LogoWrapper to="/" onClick={() => toggleMobileMenu()}>
        <img src={mobileLogo} alt="diegitarre.ch" style={{ height: "38px" }} />
      </LogoWrapper>
      <AccountButtonWrapper>
        <AccountButtonInnerWrapper>
          <SVGIcon src={accountBtn} style={{ width: "28px", height: "28px" }} />
        </AccountButtonInnerWrapper>
      </AccountButtonWrapper>
    </PreBarInnerBurger>
  )
}

const PreBarInnerBurger = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 992px) {
    display: none;
  }
`

const PreBarLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const BurgerButtonWrapper = styled.div`
  display: flex;
  width: 50px;
  height: 32px;
`

const BurgerButtonCloseButton = styled.button`
  margin-right: auto;
  margin-left: 20px;
  cursor: pointer;
  padding: 0;
  display: block;
  appearance: none;
  margin-top: 7px;
  margin-bottom: 5px;
  background-color: transparent;
  border: 0;
`

const SearchButtonWrapper = styled.div`
  margin-left: 15px;
  margin-top: 10px;
`
const LogoWrapper = styled(Link)`
  margin: 4px 0 0 4px;
`

const AccountButtonWrapper = styled.div`
  width: 79px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24px;
  margin-right: 20px;
`

const AccountButtonInnerWrapper = styled.div`
  display: flex;
  border-left: none;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
  height: 100%;
  position: relative;
  user-select: none;
  align-items: center;
  color: #000;
  margin-top: 8px;
`

const SVGIcon = styled.img`
  width: 1em;
  height: 1em;
  display: inline-flex;
  align-items: center;
  margin: 0 4px;
  flex: 0 0 auto;
  overflow: hidden;
`

export default MobileNavbar
