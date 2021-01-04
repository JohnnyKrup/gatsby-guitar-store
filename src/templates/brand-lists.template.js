import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout.component"
import GridList from "../components/grid-list/grid-list.component"
import { compareValues } from "../utils/helpers"

import { BrandListContainerStyle } from "./template.styles"
import SearchButtons from "../components/search-buttons/search-buttons-component"
import Breadcrumb from "../components/breadcrumb/breadcrumb.component"

const BrandListsTemplate = ({
  data: {
    allStrapiProduct: { prods },
  },
  pageContext,
}) => {
  console.log({ prods })
  console.log(pageContext)

  // get only the products that match the pageContexts categorySlug
  const filteredProducts = []
  prods.forEach(product =>
    product.category.slug === pageContext.categorySlug
      ? filteredProducts.push(product)
      : null
  )

  /**
   * Since the products need to be filtered and reset
   * we use a useState for the displayed products in the grid
   */
  const [products, setProducts] = React.useState(
    filteredProducts.sort(compareValues("title"))
  )

  // reset functionality
  const setBackToAll = () => {
    setProducts(filteredProducts)
  }

  return (
    <Layout>
      <Breadcrumb
        title={pageContext.brandTitle}
        categorySlug={pageContext.categorySlug}
      />

      <SearchButtons
        products={filteredProducts}
        setProducts={setProducts}
        setBackToAll={setBackToAll}
      />

      <BrandListContainerStyle>
        <GridList
          products={products}
          key={products.strapiId}
          categorySlug={pageContext.categorySlug}
        />
      </BrandListContainerStyle>
    </Layout>
  )
}

export const query = graphql`
  query BrandLists($slug: String!) {
    allStrapiProduct(filter: { brand: { slug: { eq: $slug } } }) {
      prods: nodes {
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
        price
        newBadge
        orderedBadge
        soldBadge
        tags {
          tag
        }
        product_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

// ...GatsbyImageSharpFluid_withWebp

export default BrandListsTemplate
