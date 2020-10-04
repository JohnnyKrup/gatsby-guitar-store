import styled from "styled-components"
import Img from "gatsby-background-image"

export const CategoryPreviewStyle = styled.section`
  background: var(--mainGray);
  padding: 5rem 0;
  margin-top: 70px;
  width: 100%;
`
export const TileLayoutStyle = styled.div`
  margin-top: 2rem;
  display: grid;
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  gap: 1rem;
  /* safari workaround */
  grid-gap: 1rem;
  grid-template-rows: auto auto;
  grid-auto-rows: auto;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-auto-rows: auto;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-areas:
      "a b c"
      "d d d"
      "e e e"
      "f g h";

    .item-1 {
      grid-area: a;
    }
    .item-2 {
      grid-area: b;
    }
    .item-3 {
      grid-area: c;
    }
    .item-4 {
      grid-area: d;
    }
    .item-5 {
      grid-area: e;
    }
    .item-6 {
      grid-area: f;
    }
    .item-7 {
      grid-area: g;
    }
    .item-8 {
      grid-area: h;
    }
  }
`
export const CategoryItemStyle = styled.article`
  min-width: 30%;
  height: ${({ isImageLarge }) => (isImageLarge ? "380px" : "600px")};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  /* thanks to this property the scale effect cannot become
  bigger than the size of the this container */
  overflow: hidden;

  &:hover {
    cursor: pointer;

    /* & ${CategoryBackgroundImageStyle} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    } */

    & ${ContentStyle} {
      opacity: 0.9;
    }
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  /* Media Queries have a higher specificity 
  than anything else within the same space */
  @media screen and (max-width: 800px) {
    height: 300px;
  }
`

/* background-image: ${({ fluid }) => `url(${fluid})`}; */
export const CategoryBackgroundImageStyle = styled(Img)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`

export const ContentStyle = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  opacity: 0.7;
  /* thanks to this positioning the content div remains in the middle of the 
  parent container no matter what */
  position: absolute;
  background: #fff;

  .title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  .subtitle {
    font-weight: lighter;
    font-size: 16px;
  }
`
