import React from "react"

import { navigate } from "gatsby"

import styled from "styled-components"

import { truncateString } from "../../utils/helpers"

const GridListItemSimilar = ({ product, showPrice, idx }) => {
  const {
    price,
    title,
    slug,
    orderedBadge,
    newBadge,
    soldBadge,
    product_image: { formats },
    brand,
    category,
  } = product

  console.log({ product })

  const bgImage = formats.small ? formats.small.url : ""
  const bgImageMobile = formats.thumbnail.url

  // console.log({ bgImage })

  return (
    <SimilarStyle>
      <ItemStyle
        key={idx}
        onClick={() => navigate(`/shop/${category.slug}/${brand.slug}/${slug}`)}
      >
        {orderedBadge && <BadgeStyle>coming</BadgeStyle>}
        {soldBadge && <BadgeStyle>sold</BadgeStyle>}
        {newBadge && <BadgeStyle>new</BadgeStyle>}
        <BackgroundImageStyle bgImage={bgImage} bgImageMobile={bgImageMobile} />
      </ItemStyle>

      <TextHolder>
        <TextWrapper>
          <GridText>
            <div className="brand">- {brand.title} -</div>
            <div className="title">{truncateString(title, 25)}</div>
            {showPrice && <div className="price">CHF {price}</div>}
          </GridText>
        </TextWrapper>
      </TextHolder>
    </SimilarStyle>
  )
}

const SimilarStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    margin-bottom: 35px;
  }
`

const ItemStyle = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
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
    height: 300px;
    width: 100%;
  }
`

const BackgroundImageStyle = styled.div`
  background-image: ${props =>
    `url(${process.env.GATSBY_API_URL}${props.bgImage})`};
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;

  @media (max-width: 600px) {
    background-image: ${props =>
      `url(${process.env.GATSBY_API_URL}${props.bgImage})`};
  }
`

const BadgeStyle = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  background: var(--lightBlack);
  color: #fff;
  text-transform: capitalize;
  padding: 5px 10px;
  z-index: 2000;

  @media screen and (max-width: 600px) {
    top: 22px;
    right: -18px;
    width: 75px;
    text-align: center;
    transform: rotate(-90deg);
  }
`

const TextHolder = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 1;
  text-align: center;

  @media (max-width: 600px) {
    height: 25px;
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

export default GridListItemSimilar
