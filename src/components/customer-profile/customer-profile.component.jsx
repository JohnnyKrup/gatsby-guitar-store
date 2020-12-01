import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { IoCloseSharp } from "react-icons/io5"

import { UserContext } from "../../context/User.Context"
import { CartContext } from "../../context/Cart.Context"

const CustomerProfile = () => {
  const {
    user: { username },
    userLogout,
    toggleUserDropdown,
  } = useContext(UserContext)

  const { clearCart } = useContext(CartContext)

  return (
    <CustomerDropDownStyle>
      <CloseButtonStyle onClick={toggleUserDropdown}>
        <IoCloseSharp />
      </CloseButtonStyle>
      <CustomerTitleStyle>
        Hallo <TitleSpanStyle>{username}</TitleSpanStyle>
      </CustomerTitleStyle>
      <hr />
      <UserOptionsListStyle>
        <UserOptionsInnerListStyle>
          <UserOptionsListItemStyle>
            <SubTitleStyle>Einkäufe</SubTitleStyle>
          </UserOptionsListItemStyle>
          <UserOptionsListItemStyle>
            <Link to="/app/orders" onClick={toggleUserDropdown}>
              Bestellungen
            </Link>
          </UserOptionsListItemStyle>
          <UserOptionsListItemStyle>
            <Link to="/" onClick={toggleUserDropdown}>
              Rechnungen
            </Link>
          </UserOptionsListItemStyle>
          <UserOptionsListItemStyle>
            <SubTitleStyle>Rückgabe und Garantie</SubTitleStyle>
          </UserOptionsListItemStyle>
          <UserOptionsListItemStyle>
            <Link to="/" onClick={toggleUserDropdown}>
              Artikel zurücksenden
            </Link>
          </UserOptionsListItemStyle>
        </UserOptionsInnerListStyle>
        <ul>
          <LogoutOptionStyle>
            <hr />
            <div
              onClick={() => {
                userLogout()
                clearCart()
                toggleUserDropdown()
              }}
            >
              Abmelden
            </div>
          </LogoutOptionStyle>
        </ul>
      </UserOptionsListStyle>
    </CustomerDropDownStyle>
  )
}

const CustomerDropDownStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 0;

  & hr {
    border-width: 0;
    background-color: var(--offWhite);
    height: 1px;
  }
`

const CloseButtonStyle = styled.div`
  position: absolute;
  font-size: 1.5rem;
  top: 10px;
  right: 17px;
  color: var(--darkGray);
  cursor: pointer;

  :hover {
    color: var(--offWhite);
  }
`

const CustomerTitleStyle = styled.h2`
  padding: 10px 5px;
  color: var(--darkGray);
  margin-bottom: 0;
`

const TitleSpanStyle = styled.span`
  color: var(--offWhite);
  text-transform: capitalize;
  font-weight: 500;
`

const UserOptionsListStyle = styled.div`
  display: flex;
  flex-flow: column;
  height: 90%;
  overflow-y: hidden;
`

const UserOptionsInnerListStyle = styled.ul`
  /* height: 100%; */
  min-height: calc(100% - 30px);
  width: 100%;
`

const UserOptionsListItemStyle = styled.li`
  padding-left: 5px;
  height: auto;

  & a {
    color: var(--offWhite);
  }
`

const SubTitleStyle = styled.h3`
  padding-top: 30px;
  margin-bottom: 5px;
  color: var(--darkGray);
`

const LogoutOptionStyle = styled.li`
  height: 20px;

  & div {
    text-transform: uppercase;
    color: var(--darkGray);
    padding-top: 10px;
    padding-left: 5px;
    cursor: pointer;

    :hover {
      color: var(--offWhite);
    }
  }
`

export default CustomerProfile
