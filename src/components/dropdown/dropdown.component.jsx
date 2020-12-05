import React from "react"
import styled, { css } from "styled-components"

const DropDown = ({
  children,
  dropDownWidth,
  dropDownHeight,
  positionRight,
  bgColor,
  flexRow,
  dropDownHidden,
}) => {
  return (
    <DropdownStyle
      dropDownWidth={dropDownWidth}
      dropDownHeight={dropDownHeight}
      positionRight={positionRight}
      bgColor={bgColor}
      addCSS={transitionCSS}
      flexRow={flexRow}
      dropDownHidden={dropDownHidden}
    >
      {children}
    </DropdownStyle>
  )
}

/* height: ${({ dropDownHeight }) =>
    dropDownHeight ? `${dropDownHeight}` : "480px"}; */

const DropdownStyle = styled.div`
  position: absolute;
  ${props => props.addCSS}
  width: ${({ dropDownWidth }) => (dropDownWidth ? dropDownWidth : "340px")};
  height: 0;
  display: ${({ dropDownHidden }) => (dropDownHidden ? "none" : "flex")};
  justify-content: center;
  flex-direction: ${({ flexRow }) => (flexRow ? "row" : "column")};
  padding: ${({ dropDownPadding }) =>
    dropDownPadding ? dropDownPadding : "20px"};
  border: 1px solid black;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
  top: 70px;
  right: ${({ positionRight }) => (positionRight ? positionRight : "40px")};
  z-index: 2;
  transition: height 1.5s ease;

  @media (min-width: 320px) {
    width: 300px;
    height: 400px;
    right: calc(50% - 150px);
  }

  @media (min-width: 375px) {
    width: 340px;
    height: 480px;
    right: calc(50% - 170px);
  }

  @media (min-width: 992px) {
    right: ${({ positionRight }) => (positionRight ? positionRight : "40px")};
    width: ${({ dropDownWidth }) =>
      dropDownWidth ? `${dropDownWidth}` : "340px"};
    height: ${({ dropDownHeight }) =>
      dropDownHeight ? `${dropDownHeight}` : "480px"};
  }
`
const transitionCSS = css`
  height: ${({ dropDownHeight }) =>
    dropDownHeight ? `${dropDownHeight}` : "480px"};
`

export default DropDown
