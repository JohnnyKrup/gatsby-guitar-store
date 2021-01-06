import axios from "axios"
import url from "../utils/URL"

const getSimilarProducts = async similarProducts => {
  let q = ""
  similarProducts.forEach(prod => {
    q = q.concat("slug=", prod.slug, "&")
  })

  const response = await axios.get(
    `${url}/products?${q.substr(0, q.length - 1)}`
  )

  return response
}

export default getSimilarProducts
