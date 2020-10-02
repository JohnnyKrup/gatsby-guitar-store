import React from "react"

import CategoryListItem from "./category-list-item/category-list-item.component"

import { ItemsStyle } from "./category-list.styles"

const CategoryList = ({ products }) => {
  // console.log({ products })
  return (
    <ItemsStyle>
      {products.map(product => {
        return <CategoryListItem product={product} key={product.strapiId} />
      })}
    </ItemsStyle>
  )
}

export default CategoryList
