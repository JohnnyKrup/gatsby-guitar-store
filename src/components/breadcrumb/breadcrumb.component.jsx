import React from "react"

import {
  HeroBarContainerStyle,
  HeroBarTableStyle,
  HeroBarTableCellStyle,
  HeroBarTableCellInnerStyle,
  HeroBarTitleWrapperStyle,
  HeroBarTitleStyle,
  BreadcrumbContainerStyle,
  BreadcrumbLinkStyle,
} from "./breadcrumb.styles"

const Breadcrumb = ({ title, categorySlug, brandSlug, isShopPage }) => {
  return (
    <HeroBarContainerStyle>
      <HeroBarTableStyle>
        <HeroBarTableCellStyle>
          <HeroBarTableCellInnerStyle>
            <HeroBarTitleWrapperStyle>
              <HeroBarTitleStyle>{title}</HeroBarTitleStyle>
            </HeroBarTitleWrapperStyle>
            <BreadcrumbContainerStyle>
              {isShopPage ? (
                <BreadcrumbLinkStyle to={`/shop`}>shop</BreadcrumbLinkStyle>
              ) : (
                <BreadcrumbLinkStyle to={`/`}>home</BreadcrumbLinkStyle>
              )}

              {categorySlug && (
                <>
                  <span>&nbsp; / &nbsp;</span>
                  <BreadcrumbLinkStyle to={`/shop/${categorySlug}`}>
                    {categorySlug}
                  </BreadcrumbLinkStyle>
                </>
              )}

              {brandSlug && (
                <>
                  <span>&nbsp; / &nbsp;</span>
                  <BreadcrumbLinkStyle
                    to={`/shop/${categorySlug}/${brandSlug}`}
                  >
                    {brandSlug}
                  </BreadcrumbLinkStyle>
                </>
              )}
              <span>&nbsp; / &nbsp;</span>
              <span>{title}</span>
            </BreadcrumbContainerStyle>
          </HeroBarTableCellInnerStyle>
        </HeroBarTableCellStyle>
      </HeroBarTableStyle>
    </HeroBarContainerStyle>
  )
}

export default Breadcrumb
