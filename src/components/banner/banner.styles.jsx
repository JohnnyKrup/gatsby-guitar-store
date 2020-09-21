import styled from "styled-components"

export const BannerStyle = styled.div`
  text-align: center;
  letter-spacing: var(--mainSpacing);
  color: var(--mainWhite);
`

export const BannerSubTitleStyle = styled.span`
  text-transform: uppercase;
  margin: 0 auto;
  width: 50%;
  font-size: 1.5rem;

  @media screen and (max-width: 800px) {
    width: 30%;
    font-size: 0.8rem;
  }
`

export const BannerTitleStyle = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
  letter-spacing: 6px;

  @media screen and (max-width: 800px) {
    font-size: 3.3rem;
  }
`

export const BannerParagraphStyle = styled.p`
  width: 85%;
  margin: 0 auto;
  margin-bottom: 2rem;

  @media screen and (max-width: 800px) {
    width: 70%;
  }
`
