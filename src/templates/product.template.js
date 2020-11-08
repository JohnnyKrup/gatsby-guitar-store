import React, { useContext } from "react"
import { graphql, navigate } from "gatsby"

import { CartContext } from "../context/Cart.Context"

import styled from "styled-components"

import HeroProduct from "../components/hero/hero-product.component"
import Layout from "../components/layout.component"
import CustomButton from "../components/custom-button/custom-button.component"
import ImageGallery from "../components/image-gallery/image-gallery.component"

import {HeroBarContainerStyle, HeroBarTableStyle, HeroBarTableCellStyle, HeroBarTableCellInnerStyle, HeroBarTitleWrapperStyle, HeroBarTitleStyle, BreadcrumbContainerStyle, BreadcrumbLinkStyle} from './template.styles'

const ProductTemplate = ({ data: { strapiProduct } }) => {
  const { addItem } = useContext(CartContext)
  const {
    strapiId,
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
  const images = strapiProduct.gallery_images.map(image => {
    return image.localFile.childImageSharp.fluid
  })

  const headerImg = strapiProduct.ImageHeader.childImageSharp.fluid

  console.log(strapiProduct)

  return (
    <Layout>

    <SectionWrapperStyle>
      <HeroProduct topMargin="0">
        <HeroBarContainerStyle>
          <HeroBarTableStyle>
            <HeroBarTableCellStyle>
              <HeroBarTableCellInnerStyle>
                <HeroBarTitleWrapperStyle>
                  <HeroBarTitleStyle>{title}</HeroBarTitleStyle>
                </HeroBarTitleWrapperStyle>
                <BreadcrumbContainerStyle>
                  <BreadcrumbLinkStyle to={`/shop`}>shop</BreadcrumbLinkStyle>
                  <span>&nbsp; / &nbsp;</span>
                  <BreadcrumbLinkStyle to={`/shop/${categories[0].catSlug}`}>{categories[0].catSlug}</BreadcrumbLinkStyle>
                  <span>&nbsp; / &nbsp;</span>
                  <BreadcrumbLinkStyle to={`/shop/${categories[0].catSlug}/${brandSlug}`}>{brandSlug}</BreadcrumbLinkStyle>
                  <span>&nbsp; / &nbsp;</span>
                  <span>{title}</span>
                </BreadcrumbContainerStyle>
              </HeroBarTableCellInnerStyle>
            </HeroBarTableCellStyle>
          </HeroBarTableStyle>
        </HeroBarContainerStyle>
      </HeroProduct>


      
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
                  <span className="product-details-title">Mensur:</span> {Mensur}
                </li>
              )}
              {Sattel && (
                <li>
                  <span className="product-details-title">Sattel:</span> {Sattel}
                </li>
              )}
              {Hals && (
                <li>
                  <span className="product-details-title">Hals:</span> {Hals}
                </li>
              )}
              {Griffbrett && (
                <li>
                  <span className="product-details-title">Griffbrett:</span> {Griffbrett}
                </li>
              )}
              {Boden_Zargen && (
                <li>
                  <span className="product-details-title">Boden &amp; Zargen:</span> {Boden_Zargen}
                </li>
              )}
              {Decke && (
                <li>
                  <span className="product-details-title">Decke:</span> {Decke}
                </li>
              )}
              {Pickup && (
                <li>
                  <span className="product-details-title">Pickup:</span> {Pickup}
                </li>
              )}
              {Huelle && (
                <li>
                  <span className="product-details-title">Hülle:</span> {Huelle}
                </li>
              )}
            </ul>
          </div>
          <CustomButton onClick={() => addItem(strapiProduct)}>
            In den Warenkorb
          </CustomButton>
        </ArticleInfoStyle>
      </SectionStyle>
      <div id="SimilarProducts">
        <h2>Ähnliche Produkte</h2>
        {/* <CategoryList products={similarProducts} key={similarProducts.strapiId} /> */}
      </div>
      </SectionWrapperStyle>
    </Layout>
  )
}

// Styled Components
const SectionWrapperStyle = styled.div`
  width: 100%;
  display: block;
  margin-top: 70px;
  align-items: center;
`

const SectionStyle = styled.section`
  display: flex;
  padding: 40px 5%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

// const BreadcrumbContainerStyle = styled.div`
//   margin-top: 70px;
//   padding-top: 20px;
// `
// const BreadcrumbLinkStyle = styled.span`
//   cursor: pointer;
//   font-weight: 500;
// `

const ArticleInfoStyle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25px;

  & .title {
    font-size: 2rem;
    line-height: 1;
  }

  & .price {
    font-size: 30px;
    margin-bottom: 25px;
    font-family: Dosis, sans-serif;
    font-weight: 200;
  }

  & .description {
    text-align: justify;
    margin-bottom: 25px;
    font-weight: 300;
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
      /* font-family: "Times New Roman"; */
      font-style: italic;
      font-size: 16px;      
      letter-spacing: 0;
      line-height: 26px;
      font-weight: 200;

      .product-details-title {
        font-family: Dosis, sans-serif;
        text-transform: uppercase;font-size: 14px;
        letter-spacing: 0.15rem;
        font-style:normal;
        font-weight: 300;
      }
    }
  }
`


// QUERY
export const query = graphql`
  query SingleProduct($slug: String!) {
    strapiProduct(slug: { eq: $slug }) {
      strapiId
      title
      description
      slug
      price
      gallery_images {
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
      product_image {
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

export default ProductTemplate
