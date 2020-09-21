import React from "react"

import CategoryListItem from "./category-list-item/category-list-item.component"

import { CategoryListStyle, ItemsStyle } from "./category-list.styles"

const CategoryList = ({ products }) => {
  return (
    // <CategoryListStyle>
    <div>
      {products.map(product => {
        const { strapiId, ...otherProps } = product
        console.log({ ...otherProps })
        return <CategoryListItem key={strapiId} {...otherProps} />
      })}
    </div>
    // </CategoryListStyle>
  )
}

export default CategoryList
