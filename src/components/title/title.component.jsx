import React from "react"

import { TitleContainerStyle } from "./title.styles"

const Title = ({ title }) => {
  return (
    <TitleContainerStyle>
      <h2>
        {/* <span>/</span> {title} */}
        {title}
      </h2>
    </TitleContainerStyle>
  )
}

export default Title
