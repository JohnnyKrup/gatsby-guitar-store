import { Link } from "gatsby"
import React, { useState } from "react"

import styled from "styled-components"
import chevronDown from "../../../images/chevronDown.svg"
import { SVGIcon } from "../navbar.styles"

const NavbarDropdown = ({ name, listItems }) => {
  const [isDropdownHidden, setIsDropdownHidden] = useState(true)
  // console.log({ isDropdownHidden })

  return (
    <NavbarDropdownWrapper
      onClick={() => setIsDropdownHidden(!isDropdownHidden)}
    >
      <CalloutWrapper>
        <ActionButtonContainer hiddenTablet>
          {" "}
          {name} <SVGIconDropdown src={chevronDown} alt={name} />
        </ActionButtonContainer>

        <CalloutTriangle isDropdownHidden={isDropdownHidden}></CalloutTriangle>
        <CalloutPanel
          isDropdownHidden={isDropdownHidden}
          style={{ top: "42px" }}
        >
          <ul className="header-dropdown-list">
            {listItems.map((item, idx) => {
              return (
                <ListItem key={idx}>
                  <ListItemContent to={`/${item.url}`}>
                    {item.name}
                  </ListItemContent>
                </ListItem>
              )
            })}
          </ul>
        </CalloutPanel>
      </CalloutWrapper>
      <Background
        onClick={() => setIsDropdownHidden(true)}
        isDropdownHidden={isDropdownHidden}
      />
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
  opacity: ${props => (props.isDropdownHidden ? "0" : "1")};
  visibility: ${props => (props.isDropdownHidden ? "hidden" : "visible")};
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
  opacity: ${props => (props.isDropdownHidden ? "0" : "1")};
  visibility: ${props => (props.isDropdownHidden ? "hidden" : "visible")};
  right: ${props => (props.isDropdownHidden ? "0" : "5px")};
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

const Background = styled.div`
  position: fixed;
  display: ${props => (props.isDropdownHidden ? "none" : "flex")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* background-color: rgba(15, 15, 15, 0.8); */
  background-color: transparent;
  cursor: default;
`

export default NavbarDropdown
