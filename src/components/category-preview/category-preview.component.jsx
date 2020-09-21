import React from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"

// import CategoryItem from "./category-item/category-item.component"
import Title from "../title/title.component"
import Img from "gatsby-background-image"

import {
  CategoryPreviewStyle,
  TileLayoutStyle,
  CategoryItemStyle,
  CategoryBackgroundImageStyle,
  ContentStyle,
} from "./category-preview.styles"

const query = graphql`
  {
    allStrapiCategory {
      categories: nodes {
        id: strapiId
        title
        slug
        isImageLarge
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const CategoryPreview = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiCategory: { categories },
  } = data

  // console.log(categories)

  // const { id, title, slug, isImageLarge, image: {sharp: {fluid}} } = categories
  return (
    <CategoryPreviewStyle>
      <Title title="Shop" />
      <TileLayoutStyle>
        {categories.map(category => {
          // <CategoryItem key={id} {...otherCategoryProps} />
          const {
            id,
            title,
            slug,
            isImageLarge,
            image: {
              sharp: { fluid },
            },
          } = category

          return (
            <CategoryItemStyle
              key={id}
              className={`item-${id}`}
              onClick={() => navigate(`/${slug}`)}
              isImageLarge={isImageLarge}
            >
              {/* style={{ backgroundImage: `url(${fluid.src})` }} */}
              <CategoryBackgroundImageStyle fluid={fluid} />
              {/* <Img fluid={fluid} /> */}
              <ContentStyle>
                <h1 className="title">{title}</h1>
                <span className="subtitle">DETAILS</span>
              </ContentStyle>
            </CategoryItemStyle>
          )
        })}
      </TileLayoutStyle>
    </CategoryPreviewStyle>
  )
}

export default CategoryPreview
