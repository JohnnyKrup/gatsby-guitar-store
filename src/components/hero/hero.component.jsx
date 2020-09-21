import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { BackgroundImageStyle } from "./hero.styles"

const query = graphql`
  {
    file(relativePath: { eq: "Guitar_Hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = ({ img, className, children, home }) => {
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
      home={home}
    >
      {children}
    </BackgroundImageStyle>
  )
}

export default Hero
