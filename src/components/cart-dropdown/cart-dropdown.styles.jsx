import styled from "styled-components"

export const CartDropdownStyle = styled.div`
  position: absolute;
  width: 340px;
  height: 480px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 71px;
  right: 40px;
  z-index: 5;
`

export const CartItemsContainerStyle = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const EmptyMessageStyle = styled.span`
  font-size: 18px;
  margin: auto;
`
