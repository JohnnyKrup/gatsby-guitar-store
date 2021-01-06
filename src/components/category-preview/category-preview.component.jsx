import React from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"

import Title from "../title/title.component"

import { compareValues } from "../../utils/helpers"

import {
  CategoryPreviewStyle,
  TileLayoutStyle,
  CategoryItemStyle,
  CategoryBackgroundImageStyle,
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

const CategoryPreview = ({ title, hideTitle, bgLight }) => {
  const data = useStaticQuery(query)
  const {
    allStrapiCategory: { categories },
  } = data

  return (
    <CategoryPreviewStyle bgLight={bgLight}>
      {!hideTitle && <Title title={title || `Shop`} />}
      <TileLayoutStyle>
        {categories.sort(compareValues("title")).map((category, idx) => {
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
            // <Link to={`/shop/${slug}`}>
            <CategoryItemStyle
              key={id}
              className={`item-${idx + 1}`}
              onClick={() => navigate(`/shop/${slug}`)}
              isImageLarge={isImageLarge}
            >
              <CategoryBackgroundImageStyle
                fluid={isImageLarge ? header : fluid}
              />
              <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">- DETAILS -</span>
              </div>
            </CategoryItemStyle>
            // </Link>
          )
        })}
      </TileLayoutStyle>
    </CategoryPreviewStyle>
  )
}

export default CategoryPreview
