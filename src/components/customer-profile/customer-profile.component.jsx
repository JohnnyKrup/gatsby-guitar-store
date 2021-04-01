import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { IoCloseSharp } from "react-icons/io5"

import { UserContext } from "../../context/User.Context"
import { CartContext } from "../../context/Cart.Context"
// import { UtilityContext } from "../../context/Utility.Context"

const CustomerProfile = () => {
  const {
    user: { username },
    userLogout,
    toggleUserDropdown,
  } = useContext(UserContext)

  const { clearCart } = useContext(CartContext)
  // const { windowWidth, windowHeight } = useContext(UtilityContext)

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
          {/* SubTitle */}
          <UserOptionsListItemStyle>
            <SubTitleStyle>Einkäufe</SubTitleStyle>
          </UserOptionsListItemStyle>
          {/* Items */}
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
        </UserOptionsInnerListStyle>

        <UserOptionsInnerListStyle>
          {/* SubTitle */}
          <UserOptionsListItemStyle>
            <SubTitleStyle>Rückgabe</SubTitleStyle>
          </UserOptionsListItemStyle>
          {/* Items */}
          <UserOptionsListItemStyle>
            <Link to="/" onClick={toggleUserDropdown}>
              Artikel zurücksenden
            </Link>
          </UserOptionsListItemStyle>
        </UserOptionsInnerListStyle>

        <UserOptionsInnerListStyle>
          {/* SubTitle */}
          <UserOptionsListItemStyle>
            <SubTitleStyle>Garantie</SubTitleStyle>
          </UserOptionsListItemStyle>
          {/* Items */}
          <UserOptionsListItemStyle>
            <Link to="/" onClick={toggleUserDropdown}>
              Garantiefall melden
            </Link>
          </UserOptionsListItemStyle>
        </UserOptionsInnerListStyle>

        <UserOptionsInnerListStyle>{/* Image */}</UserOptionsInnerListStyle>
      </UserOptionsListStyle>
      <UserOptionsInnerListLogOutStyle>
        <hr />
        <LogoutOptionStyle>
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
      </UserOptionsInnerListLogOutStyle>
    </CustomerDropDownStyle>
  )
}

const CustomerDropDownStyle = styled.div`
  width: 80%;
  height: 100%;
  padding: 5px 0;
  justify-content: center;

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
  margin-top: -18px;
  color: var(--darkGray);
  margin-bottom: 10px;
  text-align: center;
`

const TitleSpanStyle = styled.span`
  color: var(--offWhite);
  text-transform: capitalize;
  font-weight: 500;
`

const UserOptionsListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: "unset";
  height: 80%;
  /* overflow-y: hidden; */

  @media screen and (min-width: 600px) {
    flex-flow: unset;
  }

  @media screen and (max-width: 600px) {
    flex-flow: column;
    height: 85%;
  }
`

const UserOptionsInnerListStyle = styled.ul`
  /* height: 100%; */
  padding-top: 15px;
  min-height: calc(100% - 30px);
  width: 25%;
  display: flex;
  flex-flow: column;

  @media screen and (min-width: 600px) {
    min-height: calc(100% - 30px);
  }

  @media screen and (max-width: 600px) {
    min-height: 10%;
    width: 100%;
  }
`

const UserOptionsListItemStyle = styled.li`
  padding-left: 5px;
  height: auto;

  & a {
    color: var(--offWhite);
  }
`

const SubTitleStyle = styled.h3`
  padding-top: 10px;
  margin-bottom: 5px;
  color: var(--darkGray);
`

const UserOptionsInnerListLogOutStyle = styled.ul`
  padding-top: 15px;
  min-height: 25px;
  width: 100%;
  display: flex;
  flex-flow: column;

  @media screen and (min-width: 600px) {
    min-height: 25px;
    padding-top: 5px;
  }

  @media screen and (max-width: 600px) {
    min-height: 10%;
  }
`

const LogoutOptionStyle = styled.li`
  height: 20px;
  text-align: center;

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
