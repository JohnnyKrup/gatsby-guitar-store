import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

import "./src/styles/global.styles.css"

export const wrapRootElement = ({ element }) => {
  return <ParallaxProvider>{element}</ParallaxProvider>
}
