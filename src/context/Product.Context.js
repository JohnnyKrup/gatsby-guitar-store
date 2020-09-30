import React, { useState } from "react"

const ProductContext = React.createContext()

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
