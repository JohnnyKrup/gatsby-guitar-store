import React from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"

import Title from "../title/title.component"

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
        image_header {
          childImageSharp {
            header: fluid {
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

  return (
    <CategoryPreviewStyle>
      <Title title="Shop" />
      <TileLayoutStyle>
        {categories.map(category => {
          const {
            id,
            title,
            slug,
            isImageLarge,
            image: {
              sharp: { fluid },
            },
            image_header: {
              childImageSharp: { header },
            },
          } = category

          return (
            <CategoryItemStyle
              key={id}
              className={`item-${id}`}
              onClick={() => navigate(`/${slug}`)}
              isImageLarge={isImageLarge}
            >
              <CategoryBackgroundImageStyle
                fluid={isImageLarge ? header : fluid}
              />
              <ContentStyle>
                <h1 className="title">{title}</h1>
                <span className="subtitle">- DETAILS -</span>
              </ContentStyle>
            </CategoryItemStyle>
          )
        })}
      </TileLayoutStyle>
    </CategoryPreviewStyle>
  )
}

export default CategoryPreview
