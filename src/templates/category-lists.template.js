import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout.component"
import Hero from "../components/hero/hero.component"
import Banner from "../components/banner/banner.component"
import CategoryList from "../components/category-list/category-list.component"

import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const categoryListsTemplate = ({ data }) => {
  const {
    allStrapiProduct: { products },
  } = data
  console.log(products)

  let catTitle = products[0].categories[0].catTitle
  let catImage = products[0].categories[0].image.childImageSharp.catImg
  products.forEach(product => {
    if (product.categories.length === 1) {
      catImage = product.categories[0].image.childImageSharp.catImg
      catTitle = product.categories[0].catTitle
    }
  })

  return (
    <Layout>
      <Hero img={catImage}>
        <Banner title={catTitle} />
      </Hero>
      <ItemsStyle>
        {products.map(product => {
          return (
            <ItemStyle>
              <BackgroundImage
                fluid={
                  product.images[0].formats.thumbnail.childImageSharp.fluid
                }
              >
                <div>Details</div>
              </BackgroundImage>
            </ItemStyle>
          )
        })}
      </ItemsStyle>
    </Layout>
  )
}

export const ItemsStyle = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`

export const ItemStyle = styled.div`
  width: 30vw;
  height: 350px;
  margin: 10px;
  margin-bottom: 20px;

  & div {
    height: 100%;
  }
`

export const query = graphql`
  query CategoryLists($slug: String!) {
    allStrapiProduct(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      products: nodes {
        categories {
          catTitle: title
          slug
          image {
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
          title
          slug
        }
        images {
          formats {
            thumbnail {
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
  }
`

export default categoryListsTemplate
