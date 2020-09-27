import React from "react"
import { graphql, navigate } from "gatsby"

import Layout from "../components/layout.component"
import Hero from "../components/hero/hero.component"
import Banner from "../components/banner/banner.component"

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
          // console.log(product)
          const {
            strapiId,
            price,
            title,
            slug,
            brand: { brandTitle },
          } = product

          const prodImg = product.images[0].localFile.childImageSharp.fluid
          return (
            <ItemStyle key={strapiId} onClick={() => navigate(`/${slug}`)}>
              <BGImageStyle fluid={prodImg}>
                <TextStyle>
                  <div className="brand">- {brandTitle} -</div>
                  <div className="title">{title}</div>
                  <div className="title">CHF {price}</div>
                </TextStyle>
              </BGImageStyle>
            </ItemStyle>
          )
        })}
      </ItemsStyle>
    </Layout>
  )
}

export const ItemsStyle = styled.div`
  width: 95vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
  padding: 0 2%;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`
export const ItemStyle = styled.div`
  width: 26vw;
  height: 450px;
  margin: 15px;

  flex: 1 1 auto;
  align-items: center;
  border: 1px solid black;
`

export const BGImageStyle = styled(BackgroundImage)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextStyle = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  opacity: 0.85;
  /* thanks to this positioning the content div remains in the middle of the 
  parent container no matter what */
  position: absolute;
  background: #fff;

  & .brand {
    text-align: center;
    text-transform: uppercase;
  }

  & .title {
    font-weight: 700;
    text-align: center;
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
