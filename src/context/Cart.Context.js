import React, { createContext, useEffect, useState } from "react"

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartHidden, setCartHidden] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [cartItemQuantity, setCartItemQuantity] = useState(0)

  const toggleCartDropdown = () => {
    setCartHidden(!cartHidden)
  }

  useEffect(() => {
    // local storage
    let newCartItemQuantity = cartItems.reduce((qty, cartItem) => {
      // console.log({ qty, cartItem })
      return (qty += cartItem.quantity)
    }, 0)
    console.log({ newCartItemQuantity })
  }, [cartItems])

  const removeItem = cartItemToRemove => {
    // console.log(cartItemToAdd)
    const existingCartItem = cartItems.find(
      cartItem => cartItem.strapiId === cartItemToRemove.strapiId
    )
    let newCartItems = null

    if (existingCartItem) {
      if (existingCartItem.quantity === 1) {
        return cartItems.filter(
          cartItem => cartItem.strapiId !== cartItemToRemove.strapiId
        )
      }

      newCartItems = cartItems.map(cartItem =>
        cartItem.strapiId === cartItemToRemove.strapiId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      setCartItems(newCartItems)
      return newCartItems
    }
  }

  const addItem = cartItemToAdd => {
    // console.log(cartItemToAdd)
    const existingCartItem = cartItems.find(
      cartItem => cartItem.strapiId === cartItemToAdd.strapiId
    )
    let newCartItems = null

    if (existingCartItem) {
      newCartItems = cartItems.map(cartItem =>
        cartItem.strapiId === cartItemToAdd.strapiId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
      setCartItems(newCartItems)
      return newCartItems
    }

    newCartItems = [...cartItems, { ...cartItemToAdd, quantity: 1 }]
    // console.log({ newCartItems })
    setCartItems(newCartItems)
    // console.log({ cartItems })

    return newCartItems
  }

  const clearItem = cartItem => {}

  return (
    <CartContext.Provider
      value={{
        cartHidden,
        toggleCartDropdown,
        cartItems,
        cartTotal,
        cartItemQuantity,
        removeItem,
        addItem,
        clearItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
