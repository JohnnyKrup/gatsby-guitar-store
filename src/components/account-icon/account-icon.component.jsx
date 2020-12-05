import React, { useContext } from "react"

import styled from "styled-components"

import logo from "../../images/account.svg"

const AccountIcon = ({ iconSize }) => {
  return (
    <AccountIconStyle>
      <img src={logo} alt="Profil" iconSize={iconSize} />
    </AccountIconStyle>
  )
}

const AccountIconStyle = styled.div`
  width: 45px;
  height: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    position: absolute;
    width: ${({ iconSize }) => (iconSize ? `${iconSize}px` : "30px")};
    height: ${({ iconSize }) => (iconSize ? `${iconSize}px` : "30px")};
  }
`

export default AccountIcon
