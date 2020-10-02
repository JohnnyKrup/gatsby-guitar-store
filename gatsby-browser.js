import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import { CartProvider } from "./src/context/Cart.Context"
import { UserProvider } from "./src/context/User.Context"

import "./src/styles/global.styles.css"

export const wrapRootElement = ({ element }) => {
  return (
    <ParallaxProvider>
      <UserProvider>
        <CartProvider>{element}</CartProvider>
      </UserProvider>
    </ParallaxProvider>
  )
}
