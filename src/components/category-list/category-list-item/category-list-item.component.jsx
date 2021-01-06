import { navigate } from "gatsby"
import React from "react"

import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

// import { ItemStyle, BGImageStyle, TextStyle } from "./category-list-item.styles"

const CategoryListItem = ({ product }) => {
  const {
    strapiId,
    price,
    title,
    slug,
    product_image: {
      childImageSharp: { fluid },
    },
    brand: { brandTitle, brandSlug },
    category: { categorySlug },
  } = product

  return (
    <ItemStyle
      key={strapiId}
      onClick={() => navigate(`/shop/${categorySlug}/${brandSlug}/${slug}`)}
    >
      <BGImageStyle fluid={fluid}>
        <TextStyle>
          <div className="brand">- {brandTitle} -</div>
          <div className="title">{title}</div>
          <div className="price">CHF {price}</div>
        </TextStyle>
      </BGImageStyle>
    </ItemStyle>
  )
}

const ItemStyle = styled.div`
  width: 90%;
  height: 450px;
  padding: 5px;
  justify-self: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;

  @media (max-width: 600px) {
    height: 300px;
  }

  @media (min-width: 768px) {
    height: 350px;
    margin-bottom: 10px;
    width: 100%;

    div {
      opacity: 0;
    }

    :hover {
      div {
        opacity: 0.85;
        transform: opacity 0.5s ease-in;
      }
    }
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    height: 550px;
  }
`

const BGImageStyle = styled(BackgroundImage)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: auto 100%;
`

const TextStyle = styled.div`
  /* height: 90px; */
  height: 100%;
  width: 100%;
  padding: 0 25px;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 0px solid black;
  /* thanks to this positioning the content div remains in the middle of the 
  parent container no matter what */
  position: absolute;
  background: var(--mainWhite);
  opacity: 0;

  & .brand,
  .price {
    text-align: center;
    text-transform: uppercase;
    @media (max-width: 600px) {
      display: none;
    }
  }

  & .title {
    font-weight: 700;
    text-align: center;
  }

  @media (max-width: 600px) {
    height: 25px;
    opacity: 0.85;
  }
`

export default CategoryListItem
