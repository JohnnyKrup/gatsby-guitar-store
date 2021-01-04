import React, { useEffect, useState } from "react"
import { useStaticQuery } from "gatsby"

import { compareValues } from "../utils/helpers"

const initialState = {
  isMegamenuHidden: true,
  isMobileMenuHidden: true,
  isMobileSearchHidden: true,
  activeMenu: [],
  activeCategories: [],
  activeBrands: [],
  activeProducts: [],
  allProducts: [],
  menus: [],
}

const query = graphql`
  {
    allStrapiProduct {
      products: nodes {
        category {
          title
          slug
        }
        brand {
          title
          slug
        }
        strapiId
        title
        slug
        menu
        price
        newBadge
        orderedBadge
        soldBadge
        product_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    allStrapiMenu {
      nodes {
        title
        name
        strapiId
        categories {
          catTitle: title
          catSlug: slug
          brands {
            brandTitle: title
            brandSlug: slug
          }
        }
      }
    }
  }
`

const NavigationContext = React.createContext(initialState)

const NavigationProvider = ({ children }) => {
  const [isMegamenuHidden, setIsMegamenuHidden] = useState(true)
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true)
  const [isMobileSearchHidden, setMobileSeachHidden] = useState(true)
  const [activeMenu, setActiveMenu] = useState("")
  const [activeCategories, setActiveCategories] = useState([])
  const [activeBrands, setActiveBrands] = useState([])
  const [activeProducts, setActiveProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [menus, setMenus] = useState([])

  const {
    allStrapiProduct: { products },
    allStrapiMenu: { nodes },
  } = useStaticQuery(query)

  useEffect(() => {
    console.log("useEffect Start")
    setAllProducts(products.sort(compareValues("title", "asc")))
    setMenus(nodes.sort(compareValues("title", "asc")))
    console.log("useEffect End")
  }, [])

  const loadActiveCategories = categories => {
    clearActiveItems()
    setActiveCategories(categories.sort(compareValues("catTitle", "asc")))
  }

  const loadActiveBrands = brands => {
    setActiveBrands([])
    setActiveProducts([])
    setActiveBrands(brands.sort(compareValues("brandTitle", "asc")))
  }

  const loadActiveProducts = (brand, category) => {
    setActiveProducts(
      allProducts.filter(
        product =>
          product.brand.title === brand && product.category.title === category
      )
    )
  }

  const clearActiveItems = () => {
    setActiveCategories([])
    setActiveBrands([])
    setActiveProducts([])
  }

  const toggleMegamenu = title => {
    console.log({ title })
    // if the dropdown menu close btn was pressed
    if (title === undefined) {
      setIsMegamenuHidden(!isMegamenuHidden)
      return
    }

    if (activeMenu === title) {
      setActiveMenu("")
      setIsMegamenuHidden(true)
    } else {
      setActiveMenu(title)
      setIsMegamenuHidden(false)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuHidden(!isMobileMenuHidden)
  }

  const toggleMobileSearch = () => {
    setMobileSeachHidden(!isMobileSearchHidden)
  }

  return (
    <NavigationContext.Provider
      value={{
        isMegamenuHidden,
        toggleMegamenu,
        isMobileMenuHidden,
        toggleMobileMenu,
        isMobileSearchHidden,
        toggleMobileSearch,
        menus,
        activeCategories,
        activeBrands,
        activeProducts,
        loadActiveCategories,
        loadActiveBrands,
        loadActiveProducts,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export { NavigationProvider, NavigationContext }
