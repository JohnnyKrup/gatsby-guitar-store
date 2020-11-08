import { navigate } from "gatsby"
import React from "react"

import { ItemStyle, BGImageStyle, TextStyle } from "./grid-list-item.styles"

const GridListItem = ({ product, categorySlug }) => {
  const {
    strapiId,
    price,
    title,
    slug,
    product_image: {
      childImageSharp: { fluid },
    },
    brand: { brandTitle, slug: brandSlug },
  } = product
  console.log({product})

  return (
    <ItemStyle key={strapiId} onClick={() => navigate(`/shop/${categorySlug}/${brandSlug}/${slug}`)}>
      <BGImageStyle fluid={fluid}>
        <TextStyle>
          <div className="brand">- {brandTitle} -</div>
          <div className="title">{title}</div>
          <div className="title">CHF {price}</div>
        </TextStyle>
      </BGImageStyle>
    </ItemStyle>
  )
}

export default GridListItem
