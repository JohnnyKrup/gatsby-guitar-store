import React from "react"

import styled, { css } from "styled-components"

const FormTextarea = ({ label, onChange, ...otherProps }) => {
  return (
    <CustomTextAreaContainerStyle>
      <CustomTextAreaStyle onChange={onChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-textarea-label`}
        >
          {label}
        </label>
      ) : null}
    </CustomTextAreaContainerStyle>
  )
}

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: black;
`
const CustomTextAreaContainerStyle = styled.div`
  position: relative;
  margin: 45px 0;

  .form-textarea-label {
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

const CustomTextAreaStyle = styled.textarea`
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

  &:focus ~ .form-textarea-label {
    ${shrinkLabel};
  }
`

export default FormTextarea
