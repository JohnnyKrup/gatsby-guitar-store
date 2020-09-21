import React from "react"
import {
  BannerParagraphStyle,
  BannerStyle,
  BannerSubTitleStyle,
  BannerTitleStyle,
} from "./banner.styles"

const Banner = ({ title, subtitle, info, children }) => {
  return (
    <BannerStyle>
      <BannerSubTitleStyle>{subtitle}</BannerSubTitleStyle>
      <BannerTitleStyle>{title}</BannerTitleStyle>
      <BannerParagraphStyle>{info}</BannerParagraphStyle>
      {children}
    </BannerStyle>
  )
}

export default Banner
