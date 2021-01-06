import styled from "styled-components"
import Img from "gatsby-background-image"

export const CategoryPreviewStyle = styled.section`
  background: ${({ bgLight }) => (bgLight ? "white" : "#f7f7f7")};
  padding: 5rem 0;
  /* margin-top: 70px; */
  width: 100%;
`
export const TileLayoutStyle = styled.div`
  margin-top: 2rem;
  display: grid;
  width: 90vw;
  max-width: var(--fullWidth);
  margin: 0 auto;
  grid-template-rows: auto auto;
  grid-auto-rows: auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 250px 250px 250px 250px 250px 250px 250px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 220px 220px 220px 220px 220px 220px 250px;
    grid-auto-rows: auto;
    grid-template-areas:
      "a b c"
      "d e f"
      "g h i"
      "j k l"
      "m m m";

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
    .item-9 {
      grid-area: i;
    }
    .item-10 {
      grid-area: j;
    }
    .item-11 {
      grid-area: k;
    }
    .item-12 {
      grid-area: l;
    }
    .item-13 {
      grid-area: m;
    }
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-rows: 450px 450px 450px 450px 450px 450px 300px;
    grid-auto-rows: auto;
    grid-template-areas:
      "a b c"
      "a e c"
      "d e f"
      "g h i"
      "g k i"
      "j k l"
      "m m m";
  }
`
export const CategoryItemStyle = styled.article`
  min-width: 30%;
  /* height: ${({ isImageLarge }) => (isImageLarge ? "380px" : "600px")}; */
  /* height: 360px; */
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  /* thanks to this property the scale effect cannot become
  bigger than the size of the this container */
  overflow: hidden;

  .content {
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
  }

  &:hover {
    cursor: pointer;

    & .content {
      opacity: 0.9;
    }
  }

  /* &.large {
    height: 380px;
  } */

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

  @media screen and (min-width: 992px) {
    height: auto;
  }

  /* @media screen and (min-width: 1200px) {
    height: ${({ isImageLarge }) =>
    isImageLarge ? "380px" : "600px"};
  } */

  @media screen and (min-width: 1200px) {
    height: auto;
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
