import React, { useContext } from "react"

import { UserContext } from "../../../context/User.Context"
import MobileNavbar from "../prebar-mobile/mobile-navbar.component"
import NavbarDropdown from "../navbar-dropdown/navbar-dropdown.component"

import styled from "styled-components"
import { Link } from "gatsby"

const store = [
  { name: "Team", url: "team" },
  { name: "Über uns", url: "about" },
  { name: "Kontakt", url: "contact" },
  { name: "Öffnungszeiten", url: "contact" },
]

const maintenance = [
  { name: "Beratung & Garantie", url: "consultation" },
  { name: "Miete", url: "rental" },
  { name: "Reparaturen", url: "workshop" },
]

const PrebarNavbar = () => {
  const { user, userLogout } = useContext(UserContext)

  return (
    <PreBarHeader>
      <PreBarInner>
        <PreBarButtonWrapper id="signIn">
          <PreBarInnerButtonWrapper>
            <SignInRegisterLinksWrapper>
              {user.token !== null ? (
                <LogoutLink onClick={() => userLogout()}>Abmelden</LogoutLink>
              ) : (
                <SignInLink to="/login" state={{ fromRegister: false }}>
                  Anmelden
                </SignInLink>
              )}

              <RegisterLink to="/login" state={{ fromRegister: true }}>
                Registrieren
              </RegisterLink>
            </SignInRegisterLinksWrapper>
          </PreBarInnerButtonWrapper>
        </PreBarButtonWrapper>
        <NavbarDropdown name="Geschäft" listItems={store} />
        <NavbarDropdown name="Service" listItems={maintenance} />
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

const LogoutLink = styled.div`
  padding: 2px 10px;
  margin-left: -15px;
  color: black;
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
