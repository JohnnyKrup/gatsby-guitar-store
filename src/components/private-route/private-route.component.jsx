import React from "react"
import { navigate } from "gatsby"
import { UserContext } from "../../context/User.Context"
import { useContext } from "react"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { user } = useContext(UserContext)

  if (!user.token && location.pathname !== `/app/login`) {
    location.pathname = `/app/login`
    navigate(location.pathname)
    return null
  }

  // Render the passed in component will all properties
  return <Component {...rest} />
}

export default PrivateRoute
