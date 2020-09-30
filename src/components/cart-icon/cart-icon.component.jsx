import React from "react"

import { CartContext } from "../../context/Cart.Context"

import { CartIconStyle, ItemCountStyle } from "./cart-icon.styles"

// import { ReactComponent as ShoppingIconLogo } from "../../images/shopping-bag.svg"
import logo from "../../images/shopping-bag.svg"

const CartIcon = () => {
  const { toggleCartDropdown } = React.useContext(CartContext)

  return (
    <CartIconStyle onClick={() => toggleCartDropdown()}>
      <img src={logo} />
      <ItemCountStyle>0</ItemCountStyle>
    </CartIconStyle>
  )
}

export default CartIcon
