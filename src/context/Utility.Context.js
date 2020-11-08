import React, { createContext, useEffect, useState } from "react"

const initialState = { windowHeight: 0, windowWidth: 0 }
const UtilityContext = createContext(initialState)

const UtilityProvider = ({ children }) => {
  const [windowHeight, setWindowHeight] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWindowHeight(window.pageYOffset)
    })

    return () => window.removeEventListener("scroll", () => {})
  })

  useEffect(() => {    
    window.addEventListener("resize", ()=> {
      setWindowWidth(window.innerWidth)
    })
    
    return () => window.removeEventListener("resize", () => {})
  })

  return (
    <UtilityContext.Provider value={{ windowHeight, windowWidth }}>
      {children}
    </UtilityContext.Provider>
  )
}

export { UtilityProvider, UtilityContext }
