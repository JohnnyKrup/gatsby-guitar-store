import React, { useContext, useEffect, useState } from "react"

import { trackPromise } from "react-promise-tracker"
import getUserOrders from "../../strapi/getUserOrders"
import { UserContext } from "../../context/User.Context"
import Order from "../order/order.component"

import styled from "styled-components"
import Spinner from "../spinner/spinner.component"

const OrderList = () => {
  const { user } = useContext(UserContext)
  const [orderItems, setOrderItems] = useState(null)

  useEffect(() => {
    console.log("useEffect()")
    if (user.token) {
      console.log("useEffect() 2")
      trackPromise(
        getUserOrders({
          name: user.username,
          userToken: user.token,
        }).then(orders => {
          console.log("useEffect() 3")
          setOrderItems(orders.data)
        })
      )
    }
  }, [])

  return (
    <OrderListStyle>
      <h1>Deine Bestellungen</h1>
      {orderItems
        ? orderItems.map(orderItem => {
            return <Order key={orderItem.id} order={orderItem} />
          })
        : null}
      <Spinner />
    </OrderListStyle>
  )
}

const OrderListStyle = styled.div`
  width: 70vw;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 90px auto 0;

  @media screen and (max-width: 800px) {
    width: 85vw;
  }
`

export default OrderList
