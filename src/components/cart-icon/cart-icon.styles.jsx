import styled from "styled-components"

export const CartIconStyle = styled.div`
  width: 45px;
  height: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    position: absolute;
    width: 28px;
    height: 28px;
  }
`

export const ItemCountStyle = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: -3px;
`
