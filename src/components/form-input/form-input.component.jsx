import React from "react"
import styled, { css } from "styled-components"

const FormInput = ({ label, onChange, ...otherProps }) => {
  return (
    <CustomInputContainerStyle>
      <CustomInputStyle onChange={onChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </CustomInputContainerStyle>
  )
}

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: black;
`
export const CustomInputContainerStyle = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: gray;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      ${shrinkLabel};
    }
  }
`

export const CustomInputStyle = styled.input`
  background: none;
  background-color: transparent;
  color: gray;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid gray;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    ${shrinkLabel};
  }
`

export default FormInput
