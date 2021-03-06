import { navigate } from "gatsby"
import React, { useContext } from "react"

import { CartContext } from "../../context/Cart.Context"
import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item.component"
import CustomButton from "../custom-button/custom-button.component"

import {
  CartItemsContainerStyle,
  EmptyMessageStyle,
} from "./cart-dropdown.styles"

const CartDropdown = () => {
  const { cartItems, toggleCartDropdown } = useContext(CartContext)

  const navAndToggle = () => {
    navigate("/cart")
    toggleCartDropdown()
  }

  return (
    <>
      <CartItemsContainerStyle>
        {cartItems.length ? (
          cartItems.map(cartItem => {
            console.log({ cartItem })
            return <CartDropdownItem item={cartItem} key={cartItem.strapiId} />
          })
        ) : (
          <EmptyMessageStyle>Dein Warenkorb ist leer</EmptyMessageStyle>
        )}
      </CartItemsContainerStyle>
      {cartItems.length ? (
        <CustomButton onClick={() => navAndToggle()}>
          ZUM WARENKORB
        </CustomButton>
      ) : null}
    </>
  )
}

export default CartDropdown
