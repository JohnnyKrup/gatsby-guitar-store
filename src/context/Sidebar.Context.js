import React, { useState } from "react"

const initialState = {isSidebarOpen: false}
const SidebarContext = React.createContext(initialState)

const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)  

  const showSidebar = () => {
    setIsSidebarOpen(true)
  }

  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, showSidebar, hideSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export { SidebarContext, SidebarProvider }
