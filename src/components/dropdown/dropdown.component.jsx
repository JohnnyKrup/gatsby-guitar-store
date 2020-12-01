import React from "react"
import styled from "styled-components"

const DropDown = ({
  children,
  dropDownWidth,
  dropDownHeight,
  positionRight,
  bgColor,
}) => {
  return (
    <CartDropdownStyle
      dropDownWidth={dropDownWidth}
      dropDownHeight={dropDownHeight}
      positionRight={positionRight}
      bgColor={bgColor}
    >
      {children}
    </CartDropdownStyle>
  )
}

export const CartDropdownStyle = styled.div`
  position: absolute;
  width: ${({ dropDownWidth }) =>
    dropDownWidth ? `${dropDownWidth}` : "340px"};
  height: ${({ dropDownHeight }) =>
    dropDownHeight ? `${dropDownHeight}` : "480px"};
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
  top: 71px;
  right: ${({ positionRight }) => (positionRight ? positionRight : "40px")};
  z-index: 5;

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

// export const CartItemsContainerStyle = styled.div`
//   height: 480px;
//   display: flex;
//   flex-direction: column;
//   overflow-y: auto;
// `

export const EmptyMessageStyle = styled.span`
  font-size: 18px;
  margin: auto;
`

export default DropDown
