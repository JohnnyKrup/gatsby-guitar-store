import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout.component"
import ZGridList from "../components/z-grid-list/z-grid-list.component"
import { compareValues } from "../utils/helpers"
import Breadcrumb from "../components/breadcrumb/breadcrumb.component"

import {
  CategoryListContainerStyle,
  CategoryListRowStyle,
} from "./template.styles"

const categoryListsTemplate = ({
  data: {
    allStrapiProduct: { products },
    allStrapiCategory: { nodes: categories },
  },
  pageContext,
}) => {
  const { title, slug, brands } = categories[0]
  console.log({ categories })
  console.log({ brands })

  return (
    <Layout>
      <Breadcrumb title={title} />

      <CategoryListContainerStyle>
        {brands &&
          brands.length > 0 &&
          brands.sort(compareValues("title", "asc")).map((brand, idx) => {
            const prods = products.filter(
              product => product.brand.slug === brand.slug
            )

            return (
              <CategoryListRowStyle key={idx}>
                <ZGridList
                  products={prods
                    .sort(compareValues("title", "desc"))
                    .slice(0, 5)}
                  categorySlug={pageContext.slug}
                  showTitle
                  linkUrl={`/shop/${pageContext.slug}/${brand.slug}`}
                  titleName={brand.title}
                />
              </CategoryListRowStyle>
            )
          })}
      </CategoryListContainerStyle>
    </Layout>
  )
}

export const query = graphql`
  query CategoryLists($slug: String!) {
    allStrapiProduct(filter: { category: { slug: { eq: $slug } } }) {
      products: nodes {
        category {
          catTitle: title
          slug
        }
        brand {
          brandTitle: title
          slug
        }
        strapiId
        title
        slug
        price
        product_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    allStrapiCategory(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        slug
        brands {
          title
          slug
        }
      }
    }
  }
`

export default categoryListsTemplate
