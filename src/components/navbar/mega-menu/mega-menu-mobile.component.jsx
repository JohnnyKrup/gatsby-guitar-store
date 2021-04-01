import React, { useState, useContext } from "react"
import { Link, navigate } from "gatsby"

import { UtilityContext } from "../../../context/Utility.Context"
import { NavigationContext } from "../../../context/NavigationContext"

import styled from "styled-components"
import { store, maintenance } from "../../../utils/URL"

import chevronRight from "../../../images/chevronRight.svg"

const MegaMenuMobile = () => {
  const [activeMenu, setActiveMenu] = useState("")
  const [activeCategory, setActiveCategory] = useState("")
  const [activeCategorySlug, setActiveCategorySlug] = useState("")
  const { windowWidth } = useContext(UtilityContext)
  const {
    menus,
    isMobileMenuHidden,
    toggleMobileMenu,
    loadActiveCategories,
    loadActiveBrands,
    activeCategories,
    activeBrands,
  } = useContext(NavigationContext)

  return (
    <Wrapper>
      <NavDropdownMobile
        id="burgerMenuContent"
        isDropdownActive={windowWidth < 992 && !isMobileMenuHidden}
      >
        <NavDropdownMobileInner hasActiveCategory={activeCategory !== ""}>
          <MobileMenuContainer>
            <div>
              <MobileMenuContainerHeader>
                {menus &&
                  menus.length > 0 &&
                  menus.map(menu => {
                    return (
                      <MobileMenuBtnHeader
                        isMenuActive={activeMenu === menu.title}
                        key={menu.strapiId}
                        onClick={() => {
                          setActiveMenu(menu.title)
                          loadActiveCategories(menu.categories)
                        }}
                      >
                        {menu.title}
                      </MobileMenuBtnHeader>
                    )
                  })}
              </MobileMenuContainerHeader>
              <MobileMenuContainerList>
                <MobileMenuList>
                  {
                    // category -list
                    activeCategories &&
                      activeCategories.length > 0 &&
                      activeCategories.map((cat, idx) => {
                        return (
                          <MobileMenuListBtn
                            key={idx}
                            onClick={() => {
                              loadActiveBrands(cat.brands)
                              setActiveCategory(cat.catTitle)
                              setActiveCategorySlug(cat.catSlug)
                            }}
                          >
                            {cat.catTitle}
                            <MobileMenuListBtnIcon
                              src={chevronRight}
                              alt={`Alle ${cat.catTitle} - Marken`}
                            />
                          </MobileMenuListBtn>
                        )
                      })
                  }
                  {/* MobileLinkLists - Maybe can be added to Strapi as a component */}
                  <LinkTitle>Service</LinkTitle>
                  {maintenance &&
                    maintenance.map((link, idx) => {
                      return (
                        <MobileMenuLink
                          to={`/${link.url}`}
                          key={idx}
                          onClick={toggleMobileMenu}
                        >
                          {link.name}
                        </MobileMenuLink>
                      )
                    })}
                  <LinkTitle>Geschäft</LinkTitle>
                  {store &&
                    store.map((link, idx) => {
                      return (
                        <MobileMenuLink
                          to={`/${link.url}`}
                          key={idx}
                          onClick={toggleMobileMenu}
                        >
                          {link.name}
                        </MobileMenuLink>
                      )
                    })}
                  {/* MobileLinkLists - Maybe can be added to Strapi as a component */}
                </MobileMenuList>
              </MobileMenuContainerList>
            </div>
          </MobileMenuContainer>
          <MobileMenuContainer>
            <BrandListContainer hasActiveCategory={activeCategory !== ""}>
              {
                // brand - list - header
                activeBrands && (
                  <MobileBrandListHeaderBtn
                    onClick={() => {
                      setActiveCategory("")
                      setActiveCategorySlug("")
                    }}
                  >
                    <MobileMenuListBtnIconBack
                      src={chevronRight}
                      alt={`Zurück zu allen Kategorien`}
                    />
                    {activeCategory}
                  </MobileBrandListHeaderBtn>
                )
              }
              {
                // brands - list
                activeBrands &&
                  activeBrands.length > 0 &&
                  activeBrands.map((brand, idx) => {
                    let brandLink = `/shop/${activeCategorySlug}/${brand.brandSlug}`

                    return (
                      <MobileMenuListBtn
                        key={idx}
                        onClick={() => {
                          toggleMobileMenu()
                          navigate(brandLink)
                        }}
                      >
                        {brand.brandTitle}
                        <MobileMenuListBtnIcon
                          src={chevronRight}
                          alt={`Alle ${brand.brandTitle} - Produkte`}
                        />
                      </MobileMenuListBtn>
                    )
                  })
              }
              <MobileMenuLink
                to={`/shop/${activeCategorySlug}`}
                onClick={() => toggleMobileMenu()}
              >
                Alle {activeCategory}
              </MobileMenuLink>
            </BrandListContainer>
          </MobileMenuContainer>

          <MobileMenuContainer />
          <MobileMenuContainer />
        </NavDropdownMobileInner>
      </NavDropdownMobile>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const NavDropdownMobile = styled.nav`
  margin: 0;
  padding: 0;
  height: 101vh;
  width: 100vw;
  display: ${props => (props.isDropdownActive ? "block" : "none")};
  background-color: #ffffff;
  color: #000000;

  z-index: ${props => (props.isDropdownActive ? "802" : "unset")};
  overflow-y: ${props => (props.isDropdownActive ? "auto" : "unset")};
  overflow-x: ${props => (props.isDropdownActive ? "hidden" : "unset")};
  position: ${props => (props.isDropdownActive ? "absolute" : "unset")};
  transform: ${props => (props.isDropdownActive ? "translateZ(0)" : "unset")};
`

const NavDropdownMobileInner = styled.div`
  display: flex;
  flex-direction: row;
  will-change: transform;
  transition: transform cubic-bezier(0.23, 1, 0.32, 1) 0.35s 0s;
  transform: ${props =>
    props.hasActiveCategory ? "translateX(-100%)" : "translateX(0%)"};
  width: 100vw;
`

const MobileMenuContainer = styled.div`
  width: 100vw;
  overflow-x: hidden;
  flex-shrink: 0;
`

const MobileMenuContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid #36415d;
`

const MobileMenuContainerList = styled.div`
  display: flex;
  flex-direction: row;
  will-change: transform;
  transition: transform cubic-bezier(0.23, 1, 0.32, 1) 0.35s 0s;
  transform: translate(0);
`

const MobileMenuBtnHeader = styled.button`
  width: 100px;
  margin: 10px;
  color: #fff;
  text-transform: capitalize;
  font-size: 18px;
  border-bottom: 3px solid transparent;
  background-color: transparent;

  color: ${props => (props.isMenuActive ? "#000" : "#5d5d5d")};
  font-weight: ${props => (props.isMenuActive ? "600" : "300")};
  text-transform: uppercase;
  line-height: 22px;
  border: 0;
  border-bottom: none;
`

const MobileMenuList = styled.div`
  width: 100vw;
  padding-bottom: 200px;
  flex-shrink: 0;
  background-color: #ffffff;
`

const MobileMenuListBtn = styled.button`
  padding: 16px 20px;
  font-size: 16px;
  width: 100%;
  text-align: left;
  position: relative;
  display: block;
  border: 0;
  background-color: transparent;

  color: #000000;
  border-bottom: 1px solid #36415d;
  line-height: 22px;
  font-weight: 400;
`

const MobileMenuListBtnIcon = styled.img`
  width: 1em;
  height: 1em;
  display: inline-flex;
  align-items: center;
  margin: 0 4px;
  flex: 0 0 auto;

  position: absolute;
  right: 10px;
  top: 19px;
`

const MobileMenuLink = styled(Link)`
  border-bottom: 2px solid #36415d;
  padding: 16px 20px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  text-align: left;
  position: relative;
  display: block;

  color: #000000;
  border-bottom: 1px solid #36415d;
  line-height: 22px;
  font-weight: 400;

  border: none;
  font-size: 14px;
`

const BrandListContainer = styled.div`
  display: ${props => (props.hasActiveCategory ? "block" : "none")};
  width: 100vw;
  padding-bottom: 200px;
  background-color: #fff;
`

const MobileBrandListHeaderBtn = styled(MobileMenuListBtn)`
  text-align: center;
  margin-top: 15px;
  margin-left: 0;
`

const MobileMenuListBtnIconBack = styled(MobileMenuListBtnIcon)`
  transform: rotateY(180deg);
  left: 15px;
`

const LinkTitle = styled.h3`
  margin: 15px 0 0 20px;
`

export default MegaMenuMobile
