import React from "react"

import { CartIconStyle, ItemCountStyle } from "./cart-icon.styles"

// import { ReactComponent as ShoppingIconLogo } from "../../images/shopping-bag.svg"
import logo from "../../images/shopping-bag.svg"

const CartIcon = () => {
  return (
    <CartIconStyle>
      <img src={logo} />
      <ItemCountStyle>0</ItemCountStyle>
    </CartIconStyle>
  )
}

export default CartIcon
