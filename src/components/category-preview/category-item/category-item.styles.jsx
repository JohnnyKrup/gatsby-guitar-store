import styled from "styled-components"

export const CategoryItemStyle = styled.div`
  min-width: 30%;
  /* height: ${({ isImageLarge }) => (isImageLarge ? "380px" : "600px")}; */
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

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    & .content {
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
  @media screen and (max-width: 600px) {
    height: 200px;
  }
`

export const CategoryBackgroundImageStyle = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ fluid }) => `url(${fluid})`};
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
