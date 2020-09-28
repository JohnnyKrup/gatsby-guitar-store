import React from "react"
import { graphql, navigate } from "gatsby"

import styled from "styled-components"

import Hero from "../components/hero/hero.component"
import Layout from "../components/layout.component"
import Title from "../components/title/title.component"
import CustomButton from "../components/custom-button/custom-button.component"
import ImageGallery from "../components/image-gallery/image-gallery.component"

const productTemplate = ({ data: { strapiProduct } }) => {
  const {
    title,
    slug,
    description,
    price,
    brand: { brandTitle, brandSlug },
    categories,
    properties: {
      Boden_Zargen,
      Decke,
      Griffbrett,
      Hals,
      Huelle,
      Mensur,
      Pickup,
      Sattel,
    },
  } = strapiProduct
  const images = strapiProduct.images.map(image => {
    return image.localFile.childImageSharp.fluid
  })

  const headerImg = strapiProduct.ImageHeader.childImageSharp.fluid

  // console.log(strapiProduct)

  return (
    <Layout>
      <Hero img={headerImg}></Hero>
      <BreadcrumbContainerStyle>
        <span>
          <span>.. / </span>
          <BreadcrumbLinkStyle
            onClick={() => navigate(`/${categories[0].catSlug}`)}
          >
            {categories[0].catSlug}
          </BreadcrumbLinkStyle>
          <span> / </span>
          <BreadcrumbLinkStyle onClick={() => navigate(`/${brandSlug}`)}>
            {brandSlug}
          </BreadcrumbLinkStyle>
          <span> / </span>
          <span>{slug}</span>
        </span>
      </BreadcrumbContainerStyle>
      <SectionStyle>
        <ImageGallery images={images} imgWidth="500px" />

        <ArticleInfoStyle>
          <h1 className="title">{title}</h1>
          <div className="price">CHF {price}</div>
          <hr className="ruler" />
          <p
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <hr className="ruler" />
          <div className="product-details">
            <ul>
              {Mensur && (
                <li>
                  <b>Mensur:</b> {Mensur}
                </li>
              )}
              {Sattel && (
                <li>
                  <b>Sattel:</b> {Sattel}
                </li>
              )}
              {Hals && (
                <li>
                  <b>Hals:</b> {Hals}
                </li>
              )}
              {Griffbrett && (
                <li>
                  <b>Griffbrett:</b> {Griffbrett}
                </li>
              )}
              {Boden_Zargen && (
                <li>
                  <b>Boden &amp; Zargen:</b> {Boden_Zargen}
                </li>
              )}
              {Decke && (
                <li>
                  <b>Decke:</b> {Decke}
                </li>
              )}
              {Pickup && (
                <li>
                  <b>Pickup:</b> {Pickup}
                </li>
              )}
              {Huelle && (
                <li>
                  <b>Hülle:</b> {Huelle}
                </li>
              )}
            </ul>
          </div>
          <CustomButton>In den Warenkorb</CustomButton>
        </ArticleInfoStyle>
      </SectionStyle>
    </Layout>
  )
}

export const SectionStyle = styled.section`
  display: flex;
  padding: 40px 5%;
  max-width: 1200px;
`

export const BreadcrumbContainerStyle = styled.div`
  padding-top: 20px;
`
export const BreadcrumbLinkStyle = styled.span`
  cursor: pointer;
  font-weight: 500;
`

export const ArticleInfoStyle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25px;

  & .title {
    font-size: 2rem;
  }

  & .price {
    font-size: 1.4rem;
    margin-bottom: 25px;
  }

  & .description {
    text-align: justify;
    margin-bottom: 25px;
  }

  & .ruler {
    width: 25%;
    margin-bottom: 25px;
  }

  & .product-details {
    margin-bottom: 25px;
    width: 100%;

    & ul li {
      margin-bottom: 5px;
    }
  }
`

export const query = graphql`
  query SingleProduct($slug: String!) {
    strapiProduct(slug: { eq: $slug }) {
      title
      description
      slug
      price
      images {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      ImageHeader {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      brand {
        brandTitle: title
        brandSlug: slug
      }
      properties: Property {
        Boden_Zargen
        Decke
        Griffbrett
        Hals
        Huelle
        Mensur
        Pickup
        Sattel
        id
      }
      categories {
        title
        catSlug: slug
      }
    }
  }
`

export default productTemplate
