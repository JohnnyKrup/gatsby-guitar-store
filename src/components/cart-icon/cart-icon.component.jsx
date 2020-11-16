import React from "react"

import { CartContext } from "../../context/Cart.Context"

import { CartIconStyle, ItemCountStyle } from "./cart-icon.styles"

import logo from "../../images/shopping-bag.svg"

const CartIcon = () => {
  const { toggleCartDropdown, cartItemQuantity } = React.useContext(CartContext)

  return (
    <CartIconStyle onClick={() => toggleCartDropdown()}>
      <img src={logo} alt="cart"/>
      <ItemCountStyle>{cartItemQuantity}</ItemCountStyle>
    </CartIconStyle>
  )
}

export default CartIcon
