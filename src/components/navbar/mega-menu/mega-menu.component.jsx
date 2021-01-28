import React, { useEffect, useState } from "react"
import { Link, navigate } from "gatsby"
import Img from "gatsby-image"

import { NavigationContext } from "../../../context/NavigationContext"

import styled from "styled-components"
import cancel from "../../../images/cancel-thin.svg"
import chevronRight from "../../../images/chevronRight.svg"

const MegaMenu = () => {
  const [activeBrand, setActiveBrand] = useState(null)
  const [activeBrandSlug, setActiveBrandSlug] = useState(null)
  const {
    isMegamenuHidden,
    toggleMegamenu,
    activeCategories,
    activeCategory,
    setActiveCategory,
    activeCategorySlug,
    setActiveCategorySlug,
    activeBrands,
    loadActiveBrands,
    activeProducts,
    loadActiveProducts,
  } = React.useContext(NavigationContext)

  // disbale scrolling while the megamenu is open
  useEffect(() => {
    isMegamenuHidden
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden")
  }, [isMegamenuHidden])

  return (
    <Wrapper>
      <DimBackground isMegamenuHidden={isMegamenuHidden} />
      <DesktopDropdownWrapper isMegamenuHidden={isMegamenuHidden}>
        <DropdownTopMenu>
          {activeCategories &&
            activeCategories.length > 0 &&
            activeCategories.map((category, idx) => {
              return (
                <DropdownTopMenuItem
                  isActiveCategory={activeCategory === category.catTitle}
                  key={idx}
                  onClick={() => {
                    setActiveCategory(category.catTitle)
                    setActiveCategorySlug(category.catSlug)
                    loadActiveBrands(category.brands)
                  }}
                >
                  {category.catTitle}
                </DropdownTopMenuItem>
              )
            })}
        </DropdownTopMenu>
        <DropDownCloseBtn onClick={() => toggleMegamenu()}>
          <SVGCancelIcon src={cancel} />
        </DropDownCloseBtn>
        <MainMenuContainer>
          <MainMenuNavContainer>
            <MainMenuNav>
              {activeBrands && activeBrands.length > 0 && (
                <MenuNavItem
                  onClick={() => {
                    navigate("/shop/" + activeCategorySlug)
                    toggleMegamenu()
                  }}
                >
                  {`Alle ${activeCategory}`}{" "}
                  <MenuNavItemIcon src={chevronRight} />
                </MenuNavItem>
              )}
              {activeBrands &&
                activeBrands.length > 0 &&
                activeBrands.map((brand, idx) => {
                  return (
                    <MenuNavItem
                      isBrandActive={activeBrand === brand.brandTitle}
                      key={idx}
                      onClick={() => {
                        loadActiveProducts(brand.brandTitle, activeCategory)
                        setActiveBrand(brand.brandTitle)
                        setActiveBrandSlug(brand.brandSlug)
                      }}
                    >
                      {brand.brandTitle} <MenuNavItemIcon src={chevronRight} />
                    </MenuNavItem>
                  )
                })}
            </MainMenuNav>
            <MainMenuNavEmpty />
          </MainMenuNavContainer>
          <MainMenuNavProduct>
            {activeProducts && activeProducts.length > 0 && (
              <MenuProductItemContainer style={{ cursor: "pointer" }}>
                <MenuProductItemLink
                  to={`/shop/${activeCategorySlug}/${activeBrandSlug}`}
                  onClick={() => {
                    toggleMegamenu()
                  }}
                >
                  <MenuNavItemIcon
                    src={chevronRight}
                    style={{ right: "unset" }}
                  />
                  <span
                    style={{ marginLeft: "33px" }}
                  >{`Alle ${activeBrand}`}</span>
                </MenuProductItemLink>
              </MenuProductItemContainer>
            )}
            {activeProducts &&
              activeProducts.length > 0 &&
              activeProducts.map(prod => {
                const {
                  product_image: {
                    childImageSharp: { fluid },
                  },
                } = prod
                return (
                  <MenuProductItemContainer
                    onClick={() => toggleMegamenu()}
                    key={prod.strapiId}
                  >
                    <MenuProductItemLink
                      to={`/shop/${prod.category.slug}/${prod.brand.slug}/${prod.slug}`}
                    >
                      <Img
                        fluid={fluid}
                        style={{
                          height: "28px",
                          width: "28px",
                          marginRight: "5px",
                        }}
                      />
                      <span>{prod.title}</span>
                    </MenuProductItemLink>
                  </MenuProductItemContainer>
                )
              })}
          </MainMenuNavProduct>
        </MainMenuContainer>
      </DesktopDropdownWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const DimBackground = styled.div`
  position: absolute;
  top: 100px;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(2, 17, 53, 0.6);
  z-index: 2;
  display: none;

  @media (min-width: 992px) {
    display: ${props => (props.isMegamenuHidden ? "none" : " block")};
    background-color: rgba(0, 0, 0, 0.6);
  }
`

const DesktopDropdownWrapper = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: ${props => (props.isMegamenuHidden ? "none" : " block")};
    width: 100%;
    background-color: #ffffff;
    position: absolute;
    left: 0;
    z-index: 3;
    padding-bottom: 20px;
    top: 100px;
  }
`

const DropdownTopMenu = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  border-top: 2px solid #6d7288;
  margin: 0 auto;
  max-width: 1902px;
  position: relative;

  background-color: #ffffff;
  border-top: none;
  border-bottom: 1px solid #000;
`

const DropdownTopMenuItem = styled.li`
  background-color: #ffffff;
  color: #000000;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin: 8px 15px;
  padding-top: 3px;
  cursor: pointer;

  border-bottom: ${props =>
    props.isActiveCategory ? "1px solid #000" : "1px solid transparent"};
`

const DropDownCloseBtn = styled.button`
  border: none;
  background: none;
  padding: 0;

  line-height: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  top: 70px;
  right: 20px;
  position: absolute;
  background-color: #e0e1e7;
  color: #6d7288;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`

const SVGCancelIcon = styled.img`
  width: 1em;
  height: 1em;
  display: inline-flex;
  align-items: center;
  margin: 0 4px;
  flex: 0 0 auto;
`

const MainMenuContainer = styled.div`
  display: flex;
  padding-top: 20px;
  padding-left: 30px;
  margin: 0 auto;
  max-width: 1902px;
  max-height: 600px;
`

const MainMenuNavContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-left: 3px solid #f2f2f2;
  margin-left: 24px;
  padding-left: 24px;
  border-left: 1px solid #000000;

  &:first-child {
    border-left: none;
    margin-left: 0;
    padding-left: 0;
  }
`

const MainMenuNav = styled.ul`
  width: 250px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-left: 3px solid #f2f2f2;
  margin-left: 24px;
  padding-left: 24px;

  &:first-child {
    border-left: none;
    margin-left: 0;
    padding-left: 0;
  }
`

const MainMenuNavEmpty = styled.ul`
  margin-top: 32px;
  position: relative;
`

const MenuNavItem = styled.li`
  cursor: pointer;
  font-weight: 400;
  padding: 7px 23px 7px 10px;
  position: relative;

  background-color: ${props =>
    props.isBrandActive ? "#efeee9" : "transparent"};
  border-radius: ${props => (props.isBrandActive ? "2px" : "0px")};
`

const MenuNavItemIcon = styled.img`
  width: 1em;
  height: 1em;
  display: inline-flex;
  align-items: center;
  margin: 0 4px;
  flex: 0 0 auto;
  color: #000000;
  top: calc(50% - 8px);
  right: 8px;
  position: absolute;
`

const MainMenuNavProduct = styled(MainMenuNav)`
  width: 325px;
`

const MenuProductItemContainer = styled.li`
  padding: 5px 15px 5px 5px;
  position: relative;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #efeee9;
  }
`

const MenuProductItemLink = styled(Link)`
  display: flex;
  align-items: center;
  align-content: space-between;
`

export default MegaMenu
