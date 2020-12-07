import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { BackgroundImageStyle } from "./hero-alternative.styles"

const query = graphql`
  {
    file(relativePath: { eq: "GuitarPlayer2.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HeroAlternative = ({ img, className, children, fullscreen }) => {
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
      fullscreen={fullscreen}
    >
      {children}
    </BackgroundImageStyle>
  )
}

export default HeroAlternative
