import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout.component"
import Hero from "../components/hero/hero.component"
import Banner from "../components/banner/banner.component"

import CategoryList from "../components/category-list/category-list.component"

const categoryListsTemplate = ({
  data: {
    allStrapiProduct: { products },
  },
  pageContext,
}) => {
  // console.log(products)

  const cat = products[0].categories.filter(c => c.slug === pageContext.slug)
  console.log(cat[0])
  console.log(cat[0].catTitle)

  return (
    <Layout>
      <Hero img={cat[0].image_header.childImageSharp.catImg}>
        <Banner title={cat[0].catTitle} />
      </Hero>
      <CategoryList products={products} />
    </Layout>
  )
}

export const query = graphql`
  query CategoryLists($slug: String!) {
    allStrapiProduct(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      products: nodes {
        categories {
          catTitle: title
          slug
          image_header {
            childImageSharp {
              catImg: fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        strapiId
        title
        price
        slug
        brand {
          brandTitle: title
          slug
        }
        images {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default categoryListsTemplate
