import { navigate } from "gatsby"
import React from "react"

import {
  ListItemFooterStyle,
  ListItemImageStyle,
  ListItemStyle,
  ListItemButtonStyle,
} from "./category-list-item.styles"

const CategoryListItem = ({ title, price, images, slug }) => {
  const img = images[0].formats.thumbnail.childImageSharp.fluid
  return (
    <ListItemStyle>
      <ListItemImageStyle fluid={img}>
        <ListItemFooterStyle>
          <div className="name">{title}</div>
          <div className="price">{price}</div>
        </ListItemFooterStyle>
        <ListItemButtonStyle onClick={() => navigate(`/${slug}`)}>
          MEHR
        </ListItemButtonStyle>
      </ListItemImageStyle>
    </ListItemStyle>
  )
}

export default CategoryListItem
