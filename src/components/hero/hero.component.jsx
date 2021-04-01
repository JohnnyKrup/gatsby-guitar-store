import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const query = graphql`
  {
    file(relativePath: { eq: "Guitar_Hero.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90, grayscale: false) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Hero = ({ img, className, children, home }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log({ fluid })

  return (
    <BackgroundImageStyle
      className={className}
      fluid={img || fluid}
      home={home}
    >
      <Gradient home={home}>{children}</Gradient>
    </BackgroundImageStyle>
  )
}

const BackgroundImageStyle = styled(BackgroundImage)`
  min-height: ${props => (props.home ? "calc(100vh - 70px)" : "45vh")};
  width: 100%;
  background-position: center;
  background-size: cover;

  box-shadow: inset 0px -15px 5px -16px rgba(0, 0, 0, 0.75);
`

const Gradient = styled.div`
  min-height: ${props => (props.home ? "calc(100vh - 70px)" : "45vh")};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .95))"
      : "none"};
`

export default Hero
