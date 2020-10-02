import React, { createContext, useEffect, useState } from "react"

/**
 * Function to check if the key value is existing in the localStorage (F12 / Application (Tab))
 * if the key is found, the values of that key will be parsed and returned
 * if no match, an empty array is returned
 */
const getCartItemsFromStorage = () => {
  return localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : []
}

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartHidden, setCartHidden] = useState(true)
  const [cartItems, setCartItems] = useState(getCartItemsFromStorage)
  const [cartTotal, setCartTotal] = useState(0)
  const [cartItemQuantity, setCartItemQuantity] = useState(0)

  const toggleCartDropdown = () => {
    setCartHidden(!cartHidden)
  }

  useEffect(() => {
    // local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    /**
     * CartItemQuantity
     */
    let newCartItemQuantity = cartItems.reduce((qty, cartItem) => {
      return (qty += cartItem.quantity)
    }, 0)
    setCartItemQuantity(newCartItemQuantity)
    // console.log({ newCartItemQuantity })

    /**
     * CartItemTotal
     */
    let newCartItemTotal = cartItems.reduce((total, cartItem) => {
      return (total += cartItem.quantity * cartItem.price)
    }, 0)
    // to assure there are always maximum 2 decimals after the comma
    newCartItemTotal = parseFloat(newCartItemTotal.toFixed(2))
    setCartTotal(newCartItemTotal)
  }, [cartItems])

  /**
   * Add a new Item to the cart, or increase the quantity if already existing
   * @param {*} cartItemToAdd
   */
  const addItem = cartItemToAdd => {
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
      return setCartItems(newCartItems)
      //return newCartItems
    }

    newCartItems = [...cartItems, { ...cartItemToAdd, quantity: 1 }]
    return setCartItems(newCartItems)

    //return newCartItems
  }

  /**
   * Reduce the quantity of an existing cart item, if the quantity of the
   * item is 1 and it is reduced again, it will be completely removed from
   * the cart
   * @param {*} cartItemToRemove
   */
  const removeItem = cartItemToRemove => {
    // console.log(cartItemToAdd)
    const existingCartItem = cartItems.find(
      cartItem => cartItem.strapiId === cartItemToRemove.strapiId
    )
    let newCartItems = null

    if (existingCartItem) {
      if (existingCartItem.quantity === 1) {
        return setCartItems(
          cartItems.filter(
            cartItem => cartItem.strapiId !== cartItemToRemove.strapiId
          )
        )
      }

      newCartItems = cartItems.map(cartItem =>
        cartItem.strapiId === cartItemToRemove.strapiId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      return setCartItems(newCartItems)
      // return newCartItems
    }
  }

  /**
   * Clear Item from cart, gone...
   * @param {*} cartItemToClear
   */
  const clearItem = cartItemToClear => {
    // console.log({ cartItemToClear, cartItems })

    const existingCartItem = cartItems.find(
      cartItem => cartItem.strapiId === cartItemToClear.strapiId
    )

    if (existingCartItem) {
      return setCartItems(
        cartItems.filter(
          cartItem => cartItem.strapiId !== cartItemToClear.strapiId
        )
      )
    }
  }

  const clearCart = () => {
    return setCartItems([])
  }

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
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
