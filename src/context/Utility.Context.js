import React, { createContext, useEffect, useState } from "react"

const initialState = { windowHeight: 0 }
const UtilityContext = createContext(initialState)

const UtilityProvider = ({ children }) => {
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWindowHeight(window.pageYOffset)
    })
    return () => window.removeEventListener("scroll", () => {})
  })

  return (
    <UtilityContext.Provider value={{ windowHeight }}>
      {children}
    </UtilityContext.Provider>
  )
}

export { UtilityProvider, UtilityContext }
