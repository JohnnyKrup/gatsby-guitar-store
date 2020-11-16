import React, { useContext } from "react"
import Img from "gatsby-image"

import { CartContext } from "../../context/Cart.Context"

import styled from "styled-components"

const CartItem = ({ cartItem }) => {
  const { product_image, price, title, quantity } = cartItem
  const {
    childImageSharp: { fluid },
  } = product_image

  const { addItem, removeItem, clearItem } = useContext(CartContext)

  return (
    <CartItemStyle>
      <ImageContainerStyle>
        <ImageStyle alt={title} fluid={fluid} />
      </ImageContainerStyle>

      <ColumnStyle>{title}</ColumnStyle>
      <QuantityStyle>
        <div className="arrow" onClick={() => removeItem(cartItem)} 
              onKeyDown={() => removeItem(cartItem)} role="button" tabIndex={0}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}
              onKeyDown={() => addItem(cartItem)} role="button" tabIndex={0}>
          &#10095;
        </div>
      </QuantityStyle>
      <ColumnStyle>{price}</ColumnStyle>
      <RemoveButtonStyle onClick={() => clearItem(cartItem)} onKeyDown={() => clearItem(cartItem)} role="button" tabIndex={0}>
        &#10005;
      </RemoveButtonStyle>
    </CartItemStyle>
  )
}

export const CartItemStyle = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`

export const ColumnStyle = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`

export const QuantityStyle = styled.span`
  width: 23%;
  display: flex;

  & .arrow {
    cursor: pointer;
  }

  & .value {
    margin: 0 10px;
  }

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`
export const ImageContainerStyle = styled.div`
  width: 23%;
  padding-right: 15px;
`

export const ImageStyle = styled(Img)`
  width: 100%;
`
export const RemoveButtonStyle = styled.div`
  padding-left: 12px;
  cursor: pointer;
`

export default CartItem
