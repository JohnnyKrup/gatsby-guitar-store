import React from "react"

import { navigate } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styled from "styled-components"

import { truncateString } from "../../utils/helpers"

const GridListItem = ({ product, showPrice }) => {
  const {
    strapiId,
    price,
    title,
    slug,
    orderedBadge,
    newBadge,
    soldBadge,
    product_image: {
      childImageSharp: { fluid },
    },
    brand,
    category,
  } = product
  // console.log({ product })
  // console.log({categorySlug})

  return (
    <ItemStyle
      key={strapiId}
      onClick={() =>
        navigate(`/shop/${category.categorySlug}/${brand.brandSlug}/${slug}`)
      }
    >
      <BGImageStyle fluid={fluid}>
        {orderedBadge && <BadgeStyle>coming</BadgeStyle>}
        {soldBadge && <BadgeStyle>sold</BadgeStyle>}
        {newBadge && <BadgeStyle>new</BadgeStyle>}

        <TextHolder>
          <TextWrapper>
            <GridText>
              <div className="brand">- {brand.brandTitle} -</div>
              <div className="title">{truncateString(title, 25)}</div>
              {showPrice && <div className="price">CHF {price}</div>}
            </GridText>
          </TextWrapper>
        </TextHolder>
      </BGImageStyle>
    </ItemStyle>
  )
}

const ItemStyle = styled.div`
  width: 100%;
  height: 450px;
  padding: 5px;

  /* flex: 1 1 auto; */
  justify-self: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  width: calc(100vw / 5);

  @media (max-width: 600px) {
    height: 300px;
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 350px;
    margin-bottom: 10px;
  }

  @media (min-width: 992px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    height: 550px;
    width: 100%;
  }
`

const BGImageStyle = styled(BackgroundImage)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: auto 100%;
`

const BadgeStyle = styled.div`
  position: absolute;
  top: -6px;
  right: 0;
  background: var(--lightBlack);
  color: #fff;
  text-transform: capitalize;
  padding: 5px 10px;
  z-index: 2000;

  @media screen and (max-width: 600px) {
    top: 16px;
    right: -18px;
    width: 75px;
    text-align: center;
    transform: rotate(-90deg);
  }
`

const TextHolder = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  text-align: center;
  box-sizing: border-box;
  background-color: var(--mainWhite);
  transition: all 0.4s;

  :hover {
    opacity: 0.9;
  }

  @media (max-width: 600px) {
    height: 25px;
    opacity: 0.75;
  }
`

const TextWrapper = styled.div`
  position: relative;
  display: table;
  table-layout: fixed;
  height: 100%;
  width: 100%;
`

const GridText = styled.div`
  position: relative;
  display: table-cell;
  height: 100%;
  width: 100%;
  vertical-align: middle;

  opacity: 0;
  transition: opacity 0.4s 0.25s;

  :hover {
    opacity: 1;
  }

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
    opacity: 1;
  }
`

export default GridListItem
