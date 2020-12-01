import React from "react"

import { Router } from "@reach/router"
import PrivateRoute from "../components/private-route/private-route.component"
import Layout from "../components/layout.component"
import Checkout from "../components/checkout/checkout.component"
import CustomerProfile from "../components/customer-profile/customer-profile.component"
import Orders from "../components/order-list/order-list.component"
import Login from "../components/login/login.component"

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/checkout" component={Checkout} />
        <PrivateRoute path="/orders" component={Orders} />
        <PrivateRoute path="/profile" component={CustomerProfile} />
        <Login path="/login" />
      </Router>
    </Layout>
  )
}

export default App
