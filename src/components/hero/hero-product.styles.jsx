import BackgroundImage from "gatsby-background-image"

import styled from "styled-components"

export const BackgroundImageStyle = styled(BackgroundImage)`
  top: ${({topMargin}) => (topMargin ? `${topMargin}px` : '70px')};
  min-height: ${({ bgHeight }) => (bgHeight ? `${bgHeight}px` : "100px")};
  width: 100%;
  background: ${props =>
    props.dark
      ? "linear-gradient(rgba(64, 64, 64, 0.9), rgba(0, 0, 0, 0.7))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;

  /* -webkit-box-shadow: inset 0px -15px 5px -16px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px -15px 5px -16px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px -15px 5px -16px rgba(0, 0, 0, 0.75); */
`
