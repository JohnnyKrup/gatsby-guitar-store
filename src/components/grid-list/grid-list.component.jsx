import React from "react"
import { Link } from "gatsby"

import GridListItem from "../grid-list-item/grid-list-item.component"

import { TileLayoutStyle } from "./grid-list.styles"
import GridListItemSimilar from "../grid-list-item/grid-list-item-similar.component"

const GridList = ({ products, showTitle, linkUrl, titleName, similar }) => {
  return (
    <>
      {showTitle && (
        <h1>
          <Link to={linkUrl || `/`}>{titleName || `Home`}</Link>
        </h1>
      )}
      <TileLayoutStyle similar={similar}>
        {products &&
          products.length > 0 &&
          products.map((product, idx) => {
            return !similar ? (
              <GridListItem product={product} key={product.strapiId} />
            ) : (
              <GridListItemSimilar product={product} key={idx} />
            )
          })}
      </TileLayoutStyle>
    </>
  )
}

export default GridList
