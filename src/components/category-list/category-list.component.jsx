import React from "react"

import CategoryListItem from "./category-list-item/category-list-item.component"

import { TileLayoutStyle } from "./category-list.styles"

const CategoryList = ({ products }) => {
  console.log({ products })
  return (
    <TileLayoutStyle>
      {products.map(product => {
        return <CategoryListItem product={product} key={product.strapiId} />
      })}
    </TileLayoutStyle>
  )
}

export default CategoryList
