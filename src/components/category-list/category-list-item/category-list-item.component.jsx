import { navigate } from "gatsby"
import React from "react"

import { ItemStyle, BGImageStyle, TextStyle } from "./category-list-item.styles"

const CategoryListItem = ({ product }) => {
  const {
    strapiId,
    price,
    title,
    slug,
    product_image: {
      childImageSharp: { fluid },
    },
    brand: { brandTitle },
  } = product

  return (
    <ItemStyle key={strapiId} onClick={() => navigate(`/${slug}`)}>
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

export default CategoryListItem
