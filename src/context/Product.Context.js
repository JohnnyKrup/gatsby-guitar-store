import React, { useState } from "react"

const initialState = { loading: false, products: [], featuredProducts: [] }
const ProductContext = React.createContext(initialState)

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])

  return (
    <ProductContext.Provider value={{ loading, products, featuredProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
