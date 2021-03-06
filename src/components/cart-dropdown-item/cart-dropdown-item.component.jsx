import React from "react"
import Img from "gatsby-image"

import styled from "styled-components"

const CartDropdownItem = ({
  item: { product_image, price, title, quantity },
}) => {
  const {
    childImageSharp: { fluid },
  } = product_image
  return (
    <CartDropdownItemStyle>
      <CartImageStyle fluid={fluid} alt={title} />
      <ItemDetailsStyle>
        <span className="name">{title}</span>
        <span>
          {quantity} x CHF {price}
        </span>
      </ItemDetailsStyle>
    </CartDropdownItemStyle>
  )
}

export const CartDropdownItemStyle = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  margin-bottom: 15px;
`

export const CartImageStyle = styled(Img)`
  width: 25%;
  height: 100%;
  margin-top: 5px;
`

export const ItemDetailsStyle = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span {
    font-size: 16px;
  }
`

export default CartDropdownItem
