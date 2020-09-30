import { navigate } from "gatsby"
import React, { useContext } from "react"

import { CartContext } from "../../context/Cart.Context"
import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item.component"
import CustomButton from "../custom-button/custom-button.component"

import {
  CartDropdownStyle,
  CartItemsContainerStyle,
  EmptyMessageStyle,
} from "./cart-dropdown.styles"

const CartDropdown = () => {
  const { cartItems, toggleCartHidden } = useContext(CartContext)
  return (
    <CartDropdownStyle>
      <CartItemsContainerStyle>
        {cartItems.length ? (
          cartItems.map(cartItem => {
            return <CartDropdownItem item={cartItem} key={cartItem.strapiId} />
          })
        ) : (
          <EmptyMessageStyle>Dein Warenkorb ist leer</EmptyMessageStyle>
        )}
      </CartItemsContainerStyle>
      {cartItems.length ? (
        <CustomButton
          onClick={() => {
            navigate("/cart")
          }}
        >
          ZUR KASSE
        </CustomButton>
      ) : null}
    </CartDropdownStyle>
  )
}

export default CartDropdown
