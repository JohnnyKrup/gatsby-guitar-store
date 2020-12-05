import React, { createContext, useState } from "react"

const getUserFromLocalStorage = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, token: null }
}
const initialState = {
  user: { username: null, token: null },
  userDropDownHidden: true,
}
const UserContext = createContext(initialState)

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage())
  const [userDropdownHidden, setUserDropdownHidden] = useState(true)

  const toggleUserDropdown = () => {
    console.log(userDropdownHidden)
    setUserDropdownHidden(!userDropdownHidden)
  }

  const userLogin = user => {
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const userLogout = () => {
    setUser({ username: null, token: null })
    localStorage.removeItem("user")
  }

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userLogout,
        userDropdownHidden,
        toggleUserDropdown,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
