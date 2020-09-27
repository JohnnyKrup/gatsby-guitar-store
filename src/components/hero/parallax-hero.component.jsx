import React from "react"

import BackgroundImage from "gatsby-background-image"
import { Parallax } from "react-scroll-parallax"

import styled from "styled-components"

const PrallaxHero = ({ img, className, children }) => {
  return (
    <ParallaxStyle y={[0, 100]}>
      <BackgroundImageStyle className={className} fluid={img}>
        {children}
      </BackgroundImageStyle>
    </ParallaxStyle>
  )
}

export const ParallaxStyle = styled(Parallax)`
  width: 100%;
  min-height: 25vh;
`

export const BackgroundImageStyle = styled(BackgroundImage)`
  min-height: 25vh;
  width: 100%;
  background: linear-gradient(rgba(200, 200, 200, 0.9), rgba(0, 0, 0, 0.7));
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default PrallaxHero
