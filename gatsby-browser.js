import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import { CartProvider } from "./src/context/Cart.Context"

import "./src/styles/global.styles.css"

export const wrapRootElement = ({ element }) => {
  return (
    <ParallaxProvider>
      <CartProvider>{element}</CartProvider>
    </ParallaxProvider>
  )
}
