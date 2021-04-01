import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

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
      <Gradient fullscreen={fullscreen}>{children}</Gradient>
    </BackgroundImageStyle>
  )
}

const BackgroundImageStyle = styled(BackgroundImage)`
  min-height: ${({ fullscreen }) =>
    fullscreen ? "calc(100vh - 103px)" : "25vh"};
  width: 100%;
  background-position: center;
  background-size: cover;
`

const Gradient = styled.div`
  min-height: ${({ fullscreen }) =>
    fullscreen ? "calc(100vh - 103px)" : "25vh"};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props =>
    props.fullscreen
      ? "linear-gradient(rgba(256, 256, 256, 1), rgba(256, 256, 256, 0.7))"
      : "none"};
`

export default HeroAlternative
