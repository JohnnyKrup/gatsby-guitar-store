import BackgroundImage from "gatsby-background-image"

import styled from "styled-components"

export const BackgroundImageStyle = styled(BackgroundImage)`
  min-height: ${({ home }) => (home ? "calc(100vh - 85px)" : "35vh")};
  width: 100%;
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(64, 64, 64, 0.9), rgba(0, 0, 0, 0.7))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
