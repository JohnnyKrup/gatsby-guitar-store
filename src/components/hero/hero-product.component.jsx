import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { BackgroundImageStyle } from "./hero-product.styles"

const query = graphql`
  {
    file(relativePath: { eq: "bgHeaderWhite.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HeroProduct = ({ img, className, children, bgHeight, dark, topMargin }) => {
  const data = useStaticQuery(query)
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data
  return (
    <BackgroundImageStyle
      className={className}
      fluid={img || fluid}
      bgHeight={bgHeight}
      dark={dark}
      topMargin={topMargin}
    >
      {children}
    </BackgroundImageStyle>
  )
}

export default HeroProduct
