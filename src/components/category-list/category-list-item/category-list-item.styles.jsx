import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import CustomButton from "../../custom-button/custom-button.component"

export const ListItemStyle = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.3);

  &:hover {
    ${ListItemImageStyle} {
      opacity: 1;

      &:after {
        opacity: 1;
      }
    }

    ${ListItemButtonStyle} {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      ${ListItemImageStyle} {
        opacity: unset;

        &:after {
          opacity: unset;
        }
      }

      ${ListItemButtonStyle} {
        opacity: unset;
        display: flex;
      }
    }
  }
`

export const ListItemImageStyle = styled(BackgroundImage)`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  &:after {
    content: "\A";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: all 0.8s;
  }
`

export const ListItemButtonStyle = styled(CustomButton)`
  width: 80%;
  opacity: 0;
  position: absolute;
  top: 255px;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 5px;
    font-size: 14px;
    width: 90%;
  }
`

export const ListItemFooterStyle = styled.div`
  width: 100%;
  height: 9%;
  display: flex;
  /* justify-content: space-between; */
  font-size: 18px;

  .name {
    width: 70%;
    padding-left: 10px;
  }

  .price {
    width: 30%;
    text-align: right;
    padding-right: 10px;
  }

  @media screen and (max-width: 800px) {
    font-size: 12px;
    margin-top: 5px;

    .name {
      padding-left: 10%;
    }

    .price {
      padding-right: 10%;
    }
  }
`
