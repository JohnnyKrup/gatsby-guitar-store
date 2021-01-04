import React, { useContext } from "react"

import { NavigationContext } from "../../../context/NavigationContext"

import styled from "styled-components"
import { SVGIcon } from "../navbar.styles"
import cancelBtn from "../../../images/cancel-thin.svg"
import searchBtn from "../../../images/search-thin.svg"

const SearchbarMobile = () => {
  const { isMobileSearchHidden, toggleMobileSearch } = useContext(
    NavigationContext
  )

  return (
    <SearchBarMobile isMobileSeachActive={!isMobileSearchHidden}>
      <SearchBarMobileInner className="searchbar-mobile-inner">
        <HeaderSearchContainer className="searchbar-mobile__search">
          <HeaderSearchForm>
            <HeaderSearchInputContainer>
              <HeaderSearchBtn>
                <SVGIcon
                  src={searchBtn}
                  alt="search"
                  style={{ width: "24px", height: "24px" }}
                />
              </HeaderSearchBtn>
              <HeaderSearchInput
                type="search"
                placeholder="SUCHE (z.B. 'Martin 000')"
              />
            </HeaderSearchInputContainer>
          </HeaderSearchForm>
          <MobileSearchCancelBtn
            onClick={() => {
              toggleMobileSearch()
            }}
          >
            <SVGIcon
              src={cancelBtn}
              alt="search"
              style={{ width: "24px", height: "24px" }}
            />
          </MobileSearchCancelBtn>
        </HeaderSearchContainer>
      </SearchBarMobileInner>
    </SearchBarMobile>
  )
}

const SearchBarMobile = styled.div`
  display: ${props => (props.isMobileSeachActive ? "block" : "none")};
  background: #fff;
  width: 100%;
  position: relative;
  max-width: 2000px;

  @media (min-width: 992px) {
    display: none;
  }
`

const SearchBarMobileInner = styled.div`
  padding: 5px 5px 5px 15px;
  margin: 0 auto;
`

const HeaderSearchContainer = styled.span`
  display: flex;
  width: 100%;
`

const HeaderSearchForm = styled.form`
  width: 100%;
  display: flex;
  border-radius: 2px;
  position: relative;
  margin: 0;

  div {
    color: white;
    border: 1px solid #000;
  }

  @media (max-width: 992px) {
    width: 90%;
  }
`

const HeaderSearchInputContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  position: relative;
`

const HeaderSearchBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  width: 45px;
  color: #000;
  background-color: #fff;
  border-radius: 0 1px 1px 0;
  font-weight: 300;
  line-height: 1.4;
  cursor: pointer;
  border: none;
`

const HeaderSearchInput = styled.input`
  text-transform: uppercase;
  color: #6d7288;
  width: 100%;

  font-weight: 400;
  height: 45px;
  background: #fff;
  border: 0;
  outline: 0;
  padding: 0 16px 0 2px;
  flex: 1 0 0;
  border-radius: 1px 0 0 1px;
  font-size: 16px;
`

const MobileSearchCancelBtn = styled(HeaderSearchBtn)`
  position: relative;
  float: right;
  /* left: 5px; */
`

export default SearchbarMobile
