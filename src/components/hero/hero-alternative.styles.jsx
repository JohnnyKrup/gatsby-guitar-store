import BackgroundImage from "gatsby-background-image"

import styled from "styled-components"

export const BackgroundImageStyle = styled(BackgroundImage)`
  top: 90px;
  min-height: ${({ fullscreen }) =>
    fullscreen ? "calc(100vh - 90px)" : "25vh"};
  width: 100%;
  background: ${props =>
    props.fullscreen
      ? "linear-gradient(rgba(256, 256, 256, 1), rgba(256, 256, 256, 0.7))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
