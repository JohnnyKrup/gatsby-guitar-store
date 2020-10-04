import React from "react"
import axios from "axios"
import url from "../utils/URL"

const submitOrder = async ({
  name,
  total,
  items,
  purchase_date,
  stripeTokenId,
  userToken,
}) => {
  console.log(name)
  console.log(total)
  console.log(purchase_date)
  console.log(items)
  console.log(stripeTokenId)
  console.log(userToken)

  const response = await axios
    .post(
      `${url}/orders`,
      {
        name,
        total,
        items,
        purchase_date,
        stripeTokenId,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
    .catch(error => console.log(error))

  return response
}

export default submitOrder
