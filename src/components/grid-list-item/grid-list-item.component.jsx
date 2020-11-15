import { navigate } from "gatsby"
import React from "react"

import { ItemStyle, BGImageStyle, TextStyle, HoverStyle, BadgeStyle} from "./grid-list-item.styles"

const GridListItem = ({ product, categorySlug }) => {
  const {
    strapiId,
    price,
    title,
    slug,
    orderedBadge,
    newBadge,
    soldBadge,
    product_image: {
      childImageSharp: { fluid },
    },
    brand: { brandTitle, slug: brandSlug },
  } = product
  // console.log({product})
  // console.log({categorySlug})

  return (
    <ItemStyle key={strapiId} onClick={() => navigate(`/shop/${categorySlug}/${brandSlug}/${slug}`)}>
      <BGImageStyle fluid={fluid}>
        <HoverStyle />
        {
          orderedBadge && <BadgeStyle>coming soon</BadgeStyle>
        }
        {
          soldBadge && <BadgeStyle>sold</BadgeStyle>          
        }
        {
          newBadge && <BadgeStyle>new</BadgeStyle>
        }

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
