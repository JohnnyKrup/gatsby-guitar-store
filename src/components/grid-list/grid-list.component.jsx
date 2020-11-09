import React from "react"
import {Link} from 'gatsby'

import GridListItem from "../grid-list-item/grid-list-item.component"

import { TileLayoutStyle } from "./grid-list.styles"

const GridList = ({ products, categorySlug, showTitle, linkUrl, titleName }) => {
  // console.log({ products })
  // console.log(categorySlug)
  return (
    <div>
      {
        showTitle && <h1><Link to={linkUrl || `/`}>{titleName || `Home`}</Link></h1>
      }
      <TileLayoutStyle>
        {
          products.map(product => {        
            return <GridListItem product={product} key={product.strapiId} categorySlug={categorySlug} />        
          })
        }      
      </TileLayoutStyle>
    </div>
  )
}

export default GridList
