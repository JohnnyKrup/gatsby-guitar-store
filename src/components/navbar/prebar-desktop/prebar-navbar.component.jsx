import React from "react"

import MobileNavbar from "../prebar-mobile/mobile-navbar.component"
import NavbarDropdown from "../navbar-dropdown/navbar-dropdown.component"

import styled from "styled-components"
import { Link } from "gatsby"

const PrebarNavbar = () => {
  return (
    <PreBarHeader>
      <PreBarInner>
        <PreBarButtonWrapper id="signIn">
          <PreBarInnerButtonWrapper>
            <SignInRegisterLinksWrapper>
              <SignInLink to="/">Anmelden</SignInLink>
              <RegisterLink to="/">Registrieren</RegisterLink>
            </SignInRegisterLinksWrapper>
          </PreBarInnerButtonWrapper>
        </PreBarButtonWrapper>
        <NavbarDropdown />
      </PreBarInner>
      <MobileNavbar />
    </PreBarHeader>
  )
}

const PreBarHeader = styled.div`
  background-color: white;
  color: black;
`

const PreBarInner = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  height: 32px;

  @media (max-width: 992px) {
    display: none;
  }
`

const PreBarButtonWrapper = styled.div`
  display: flex;
  border-left: none;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  height: 12px;
  height: 100%;
  position: relative;
  user-select: none;
  align-items: center;
  color: black;

  @media (min-width: 992px) {
    display: inline-flex;
    padding-top: 11px;
    float: right;
  }
`

const PreBarInnerButtonWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`

const SignInRegisterLinksWrapper = styled.div`
  font-weight: 400;
  display: flex;
  white-space: nowrap;
  height: 100%;
  margin: 0 20px 0 6px;
  color: #aaa;

  @media (min-width: 992px) {
    display: inline-flex;
    /* padding-top: 11px; */
    float: right;
  }
`

const SignInLink = styled(Link)`
  padding: 2px 10px;
  margin-left: -15px;
  color: black;
`

const RegisterLink = styled(SignInLink)`
  background-color: black;
  color: white;
  font-weight: 700;
  margin-left: 6px;
`

export default PrebarNavbar
