import axios from "axios"
import url from "../utils/URL"
var qs = require("qs")

const getUserOrders = async ({ name, userToken }) => {
  // console.log({ name })
  // console.log({ userToken })

  const query = qs.stringify({ _where: { "user.username": name } })

  const response = await axios
    .get(`${url}/orders?${query}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .catch(error => console.log(error))

  return response
}

export default getUserOrders

export const getSimilarProducts = async ({ similarProducts }) => {
  let q = ""
  similarProducts.forEach(prod => {
    q = q.concat("slug=", prod.slug, "&")
  })

  // const query = qs.stringify({_where: {"product.slug": slug}})

  const response = await axios.get(
    `${url}/products?${q.substr(0, q.length - 1)}`
  )

  return response
}
