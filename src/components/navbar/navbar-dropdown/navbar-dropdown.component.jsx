import { Link } from "gatsby"
import React, { useState } from "react"

import styled from "styled-components"
import chevronDown from "../../../images/chevronDown.svg"
import { SVGIcon } from "../navbar.styles"

const NavbarDropdown = () => {
  const [isDropdownHelpHidden, setIsDropdownHelpHidden] = useState(true)
  // console.log({ isDropdownHelpHidden })

  return (
    <NavbarDropdownWrapper
      id="help"
      onClick={() => setIsDropdownHelpHidden(!isDropdownHelpHidden)}
    >
      <CalloutWrapper>
        <ActionButtonContainer hiddenTablet id="helpBtn">
          {" "}
          Hilfe <SVGIconDropdown src={chevronDown} alt="Hilfe" />
        </ActionButtonContainer>

        <CalloutTriangle
          isDropdownHelpHidden={isDropdownHelpHidden}
        ></CalloutTriangle>
        <CalloutPanel
          isDropdownHelpHidden={isDropdownHelpHidden}
          style={{ top: "42px" }}
        >
          <ul className="header-dropdown-list">
            <ListItem>
              <ListItemContent to="/">Hilfe</ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent to="/">Kontaktiert uns</ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent to="/">Über uns</ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent to="/">Stellenangebote</ListItemContent>
            </ListItem>
          </ul>
        </CalloutPanel>
      </CalloutWrapper>
    </NavbarDropdownWrapper>
  )
}

const NavbarDropdownWrapper = styled.div`
  position: relative;
  display: flex;
  border-left: none;
  text-align: center;
  font-size: 14px;
  height: 12px;
  height: 100%;
  user-select: none;
  align-items: center;
  color: black;
  cursor: pointer;
  z-index: 2000;

  @media (min-width: 992px) {
    display: inline-flex;
    padding-top: 11px;
    float: right;
  }
`

const CalloutWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`

const ActionButtonContainer = styled.div`
  font-weight: 400;
  display: flex;
  white-space: nowrap;
  height: 100%;
  margin: 0 20px 0 6px;

  @media (max-width: 992px) {
    display: ${props => (props.hiddenTablet ? "none" : "flex")};
  }
`

const SVGIconDropdown = styled(SVGIcon)`
  margin: 4px 0 0 2px;
  font-size: 10px;
`

const CalloutTriangle = styled.span`
  width: 21px;
  height: 15px;
  border: none;
  overflow: hidden;
  bottom: -10px;
  opacity: ${props => (props.isDropdownHelpHidden ? "0" : "1")};
  visibility: ${props => (props.isDropdownHelpHidden ? "hidden" : "visible")};
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 900;

  &:after {
    content: "";
    width: 18px;
    height: 20px;
    background-color: white;
    transform: rotate(45deg);
    display: block;
    position: relative;
    left: 1px;
    top: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
  }
`

const CalloutPanel = styled.div`
  background-color: white;
  color: black;
  cursor: auto;
  opacity: ${props => (props.isDropdownHelpHidden ? "0" : "1")};
  visibility: ${props => (props.isDropdownHelpHidden ? "hidden" : "visible")};
  right: ${props => (props.isDropdownHelpHidden ? "0" : "5px")};
  padding: 25px;
  position: absolute;
  top: 0;
  z-index: 800;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
`

const ListItem = styled.li`
  font-weight: 400;
  color: black;
  border-bottom: 1px solid black;
  min-width: 160px;
  text-align: left;
`

const ListItemContent = styled(Link)`
  display: block;
  padding: 15px 0;
`

export default NavbarDropdown
