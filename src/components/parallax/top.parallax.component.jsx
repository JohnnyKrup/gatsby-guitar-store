import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image-image"

const ParallaxTop = () => {
  return (
    <Wrapper>
      <BackgroundImage>
        <h2>das Team</h2>
        <p>Ein Team auf das ihr euch verlassen könnt</p>
      </BackgroundImage>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: 0 0;
  border: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  outline: 0;
  background-color: var(--mainWhite);
`

export default ParallaxTop
