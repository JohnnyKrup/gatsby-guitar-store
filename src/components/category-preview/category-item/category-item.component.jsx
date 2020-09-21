import React from "react"
import { navigate } from "gatsby"

import {
  CategoryItemStyle,
  CategoryBackgroundImageStyle,
  ContentStyle,
} from "./category-item.styles"

const CategoryItem = ({ title, image, slug, isImageLarge }) => {
  const {
    sharp: { fluid },
  } = image
  console.log(id)
  return (
    <CategoryItemStyle
      className={`item-${id}`}
      onClick={() => navigate(`/${slug}`)}
    >
      <CategoryBackgroundImageStyle />
      <ContentStyle>
        <h1 className="title">{title}</h1>
        <span className="subtitle">DETAILS</span>
      </ContentStyle>
    </CategoryItemStyle>
  )
}

export default CategoryItem
