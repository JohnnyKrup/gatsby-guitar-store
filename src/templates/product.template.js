import React, { useContext, useEffect, useState } from "react"
import { graphql } from "gatsby"

import { CartContext } from "../context/Cart.Context"
import { UtilityContext } from "../context/Utility.Context"

import styled from "styled-components"

import Layout from "../components/layout.component"
import CustomButton from "../components/custom-button/custom-button.component"
import ImageGallery from "../components/image-gallery/image-gallery.component"
import GridList from "../components/grid-list/grid-list.component"
import Breadcrumb from "../components/breadcrumb/breadcrumb.component"

import getSimilarProducts from "../strapi/getSimilarProducts"
import { trackPromise } from "react-promise-tracker"

const ProductTemplate = ({ data: { strapiProduct } }) => {
  const { addItem } = useContext(CartContext)
  const { windowWidth } = useContext(UtilityContext)
  const [similarProducts, setSimilarProducts] = useState([])

  const {
    title,
    description,
    price,
    discountedPrice,
    SimilarProducts,
    brand: { brandSlug },
    category: { categorySlug },
    Property: {
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

  let imageWidth = 0
  windowWidth < 600
    ? (imageWidth = windowWidth - windowWidth / 10)
    : (imageWidth = 500)

  const images = strapiProduct.gallery_images.map(image => {
    return image.localFile.childImageSharp.fluid
  })

  // console.log({ SimilarProducts })

  useEffect(() => {
    if (SimilarProducts.length > 0) {
      const sProd = SimilarProducts[0].products
      trackPromise(
        getSimilarProducts(sProd).then(products => {
          setSimilarProducts(products.data)
        })
      )
    }
  }, [SimilarProducts])

  console.log({ description })

  return (
    <Layout>
      <SectionWrapperStyle>
        <Breadcrumb
          title={title}
          categorySlug={categorySlug}
          brandSlug={brandSlug}
        />

        <SectionStyle>
          <ImageGallery images={images} imgWidth={`${imageWidth}px`} />

          <ArticleInfoStyle>
            {imageWidth < 500 && (
              <CustomButton onClick={() => addItem(strapiProduct)}>
                In den Warenkorb
              </CustomButton>
            )}
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
                    <span className="product-details-title">Mensur:</span>{" "}
                    {Mensur}
                  </li>
                )}
                {Sattel && (
                  <li>
                    <span className="product-details-title">Sattel:</span>{" "}
                    {Sattel}
                  </li>
                )}
                {Hals && (
                  <li>
                    <span className="product-details-title">Hals:</span> {Hals}
                  </li>
                )}
                {Griffbrett && (
                  <li>
                    <span className="product-details-title">Griffbrett:</span>{" "}
                    {Griffbrett}
                  </li>
                )}
                {Boden_Zargen && (
                  <li>
                    <span className="product-details-title">
                      Boden &amp; Zargen:
                    </span>{" "}
                    {Boden_Zargen}
                  </li>
                )}
                {Decke && (
                  <li>
                    <span className="product-details-title">Decke:</span>{" "}
                    {Decke}
                  </li>
                )}
                {Pickup && (
                  <li>
                    <span className="product-details-title">Pickup:</span>{" "}
                    {Pickup}
                  </li>
                )}
                {Huelle && (
                  <li>
                    <span className="product-details-title">Hülle:</span>{" "}
                    {Huelle}
                  </li>
                )}
              </ul>
            </div>
            <CustomButton onClick={() => addItem(strapiProduct)}>
              In den Warenkorb
            </CustomButton>
          </ArticleInfoStyle>
        </SectionStyle>
        {similarProducts && similarProducts.length > 0 && (
          <SectionStyle id="SimilarProducts">
            <SimilarInfoStyle>
              <h2 className="similar-title">Ähnliche Produkte</h2>
              <GridList
                products={similarProducts}
                similar
                style={{ width: "100%", padding: "0" }}
              />
            </SimilarInfoStyle>
          </SectionStyle>
        )}
      </SectionWrapperStyle>
    </Layout>
  )
}

// Styled Components
const SectionWrapperStyle = styled.div`
  width: 100%;
  display: block;
  align-items: center;
`

const SectionStyle = styled.section`
  display: flex;
  padding: 40px 5%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  /* .media {
    width: 500px;
    height: 350px;
    margin-top: 25px;    
  } */

  @media screen and (max-width: 600px) {
    max-width: unset;
    padding-top: 90px;
    flex-direction: column;
  }
`

const ArticleInfoStyle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25px;
  padding-top: 25px;

  & .title {
    font-size: 1.8rem;
    line-height: 1;

    @media screen and (max-width: 600px) {
      padding-top: 30px;
    }
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
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 0.15rem;
        font-style: normal;
        font-weight: 300;
      }
    }
  }

  @media screen and (max-width: 600px) {
    margin-left: unset;
    padding-top: 30px;
  }
`

const SimilarInfoStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;

  & .similar-title {
    font-size: 1.8rem;
    line-height: 1;

    @media screen and (max-width: 600px) {
      padding-top: 30px;
    }
  }

  @media screen and (max-width: 600px) {
    margin-left: unset;
    padding-top: 30px;
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
      soldBadge
      newBadge
      orderedBadge
      discountedPrice
      SimilarProducts {
        products {
          title
          slug
        }
      }
      brand {
        brandTitle: title
        brandSlug: slug
      }
      category {
        categoryTitle: title
        categorySlug: slug
      }
      Property {
        Boden_Zargen
        Decke
        Griffbrett
        Hals
        Huelle
        Mensur
        Pickup
        Sattel
      }
      product_image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gallery_images {
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
`

// ...GatsbyImageSharpFluid_withWebp

export default ProductTemplate
