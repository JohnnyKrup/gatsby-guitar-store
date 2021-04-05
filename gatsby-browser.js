import React from "react"

import { ApolloProvider } from "@apollo/client"
import {
  apolloClient,
  apolloEmptiClient,
  client,
  aClient,
} from "./src/utils/apolloClient"
import { NavigationProvider } from "./src/context/NavigationContext"
import { SidebarProvider } from "./src/context/Sidebar.Context"
import { CartProvider } from "./src/context/Cart.Context"
import { UserProvider } from "./src/context/User.Context"
import { UtilityProvider } from "./src/context/Utility.Context"
// import { Elements } from "@stripe/react-stripe-js"
// import { loadStripe } from "@stripe/stripe-js"

import "./src/styles/global.styles.css"

// const stripePromise = loadStripe(
//   "pk_test_51HMEUpGwZJpWDm6OoB0Y2QbMy6oaOi0eVD1po1u3jZohjdHE4etIstV1cZe99qSUHSoMXhwQq7fNP7pIETflJJVK00SblHdgzR"
// )

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <UtilityProvider>
        <SidebarProvider>
          <NavigationProvider>
            <UserProvider>
              <CartProvider>
                {/* <Elements stripe={stripePromise}>{element}</Elements> */}
                {element}
              </CartProvider>
            </UserProvider>
          </NavigationProvider>
        </SidebarProvider>
      </UtilityProvider>
    </ApolloProvider>
  )
}
