import { navigate } from "gatsby"
import React from "react"

import { ItemStyle, BGImageStyle, TextStyle } from "./category-list-item.styles"

const CategoryListItem = ({ product }) => {
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
}

export default CategoryListItem
