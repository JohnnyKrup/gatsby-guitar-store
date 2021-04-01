import React, { useContext, useEffect, useState } from "react"
import { graphql } from "gatsby"

import { CartContext } from "../context/Cart.Context"

import ImageGallery from "react-image-gallery"
import "../styles/image-gallery.styles.css"

import styled from "styled-components"

import Layout from "../components/layout.component"
import CustomButton from "../components/custom-button/custom-button.component"
import GridList from "../components/grid-list/grid-list.component"
import Breadcrumb from "../components/breadcrumb/breadcrumb.component"

import getSimilarProducts from "../strapi/getSimilarProducts"
import { trackPromise } from "react-promise-tracker"

const ProductTemplate = ({ data: { strapiProduct }, pageContext }) => {
  const { addItem } = useContext(CartContext)
  const [similarProducts, setSimilarProducts] = useState([])
  const [galleryImages, setGalleryImages] = useState([])

  const {
    title,
    description,
    price,
    discountedPrice,
    SimilarProducts,
    product_image: {
      childImageSharp: { fluid },
    },
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

  useEffect(() => {
    console.log("images effect")
    setGalleryImages(
      strapiProduct.gallery_images.map(image => {
        console.log({ image })
        let webp = image.multipleFiles.childImageSharp.fluid
        console.log(webp.srcWebp)

        return {
          srcSet: webp.srcSetWebp,
          thumbnail: webp.srcWebp,
        }
      })
    )
    console.log({ galleryImages })
  }, [strapiProduct.gallery_images, galleryImages])

  useEffect(() => {
    console.log("useEffect should run only once")
    if (SimilarProducts.length > 0) {
      const sProd = SimilarProducts[0].products
      trackPromise(
        getSimilarProducts(sProd).then(products => {
          setSimilarProducts(products.data)
        })
      )
    }
  }, [SimilarProducts])

  // console.log(`localhost:8000${fluid.srcWebp}`)
  console.log("images/Guitar_Hero.jpg")

  return (
    <Layout>
      <SectionWrapperStyle>
        <Breadcrumb
          title={title}
          categorySlug={categorySlug}
          brandSlug={brandSlug}
          isShopPage={true}
        />

        <SectionStyle>
          {galleryImages !== null && (
            <ImageGallery
              items={galleryImages}
              showNav={false}
              showPlayButton={false}
            />
          )}

          <ArticleInfoStyle>
            <h1 className="title">{title}</h1>
            {discountedPrice && discountedPrice > 0 ? (
              <div className="price">Neu CHF {discountedPrice}</div>
            ) : (
              <div className="price">CHF {price}</div>
            )}

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
            <CustomButton
              onClick={() => addItem(strapiProduct)}
              className="snipcart-add-item"
              data-item-id={title}
              data-item-price={price}
              // data-item-url={`/${categorySlug}/${brandSlug}/${pageContext.slug}`}
              data-item-url="https://die-gitarre-gatsby.netlify.app/"
              data-item-description={description}
              data-item-image={fluid.srcWebp}
              data-item-name={title}
            >
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
        multipleFiles {
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
