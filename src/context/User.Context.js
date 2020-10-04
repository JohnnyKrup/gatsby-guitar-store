import React, { createContext, useState } from "react"

const getUserFromLocalStorage = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, token: null }
}
const initialState = { user: { username: null, token: null } }
const UserContext = createContext(initialState)

const UserProvider = ({ children }) => {
  // const [user, setUser] = useState({ username: null, token: null })
  const [user, setUser] = useState(getUserFromLocalStorage())

  const userLogin = user => {
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const userLogout = () => {
    setUser({ username: null, token: null })
    localStorage.removeItem("user")
  }

  return (
    <UserContext.Provider value={{ user, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
