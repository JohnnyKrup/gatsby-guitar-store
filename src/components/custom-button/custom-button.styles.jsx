import styled, { css } from "styled-components"

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: 1px solid #4285f4;

  &:hover {
    background-color: #357ae8;
    border: 1px solid #357ae8;
  }
`

const centeredButtonStyles = css`
  margin: auto;
`

const getButtonAlignmentStyles = props => {
  if (props.isCentered) {
    return centeredButtonStyles
  }
}

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles
  }

  return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonStyle = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: Dosis, sans-serif;
  font-weight: 400;
  word-spacing: normal;
  letter-spacing: .2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
  ${getButtonAlignmentStyles}

  @media screen and (max-width: 800px) {
    min-width: 120px;
    font-size: 12px;
  }
`
