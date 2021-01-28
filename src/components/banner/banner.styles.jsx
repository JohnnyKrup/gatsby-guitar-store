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

  @media screen and (max-width: 420px) {
    width: 30%;
    font-size: 0.7rem;
  }

  @media screen and (min-width: 768px) {
    width: 40%;
    font-size: 1rem;
  }
`

export const BannerTitleStyle = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
  letter-spacing: 6px;
  text-transform: ${props => (props.isLowerCase ? "none" : "uppercase")};

  @media screen and (max-width: 420px) {
    font-size: 3rem;
    padding: 0 auto;
    letter-spacing: 4px;
  }
`

export const BannerParagraphStyle = styled.p`
  width: 85%;
  margin: 0 auto;
  margin-bottom: 2rem;

  @media screen and (max-width: 420px) {
    width: 80%;
    font-size: 1rem;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
    font-size: 1.2rem;
  }
`
