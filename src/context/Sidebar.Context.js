import React, { useState } from "react"
import sublinks from "../constants/links"

const SidebarContext = React.createContext()

const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [links, setLinks] = useState(sublinks)

  const showSidebar = () => {
    setIsSidebarOpen(true)
  }

  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, links, showSidebar, hideSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export { SidebarContext, SidebarProvider }
