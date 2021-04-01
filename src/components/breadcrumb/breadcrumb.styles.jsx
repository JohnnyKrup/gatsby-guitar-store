import styled from "styled-components"
import { Link } from "gatsby"

// SHADE Style header with breadcrumb

export const HeroBarContainerStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  display: inline-block;
  vertical-align: center;
  background-color: var(--mainWhite);
`
export const HeroBarTableStyle = styled.div`
  position: relative;
  display: table;
  table-layout: fixed;
  height: 100%;
  width: 100%;
  /* border-top: 1px solid var(--darkGray); */
  border-bottom: 1px solid var(--darkGray);
`
export const HeroBarTableCellStyle = styled.div`
  position: relative;
  display: table-cell;
  height: 100%;
  width: 100%;
  vertical-align: middle;
`
export const HeroBarTableCellInnerStyle = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 35px 0;

  @media screen and (max-width: 1200px) {
    width: 950px;
  }

  @media screen and (max-width: 1024px) {
    width: 768px;
  }

  @media screen and (max-width: 800px) {
    width: 600px;
  }

  @media screen and (max-width: 680px) {
    width: 420px;
    padding: 35px 10px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    padding: 20px 10px;
  }
`
export const HeroBarTitleWrapperStyle = styled.div`
  width: 99%;
  display: table-cell;
  vertical-align: center;

  @media screen and (max-width: 1024px) {
    display: block;
    width: 100%;
  }
`
export const HeroBarTitleStyle = styled.h1`
  margin: 0;
  color: var(--mainBlack);
  font-size: 23px;
  font-weight: 300;
  letter-spacing: 0.1em;
  line-height: 1.1em;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    line-height: 32px;
    padding-bottom: 12px;
    letter-spacing: 0.05em;
    font-size: 20px;
  }
`

export const BreadcrumbContainerStyle = styled.div`
  width: 1%;
  text-align: right;
  white-space: nowrap;
  display: table-cell;
  vertical-align: center;
  color: var(--lightGray);

  span {
    font-size: 18px;
    font-style: italic;
    display: inline-block;
    vertical-align: center;
    color: var(--lightGray);

    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1024px) {
    display: block;
    width: 100%;
    white-space: pre-line;
    text-align: unset;
  }
`
export const BreadcrumbLinkStyle = styled(Link)`
  cursor: pointer;
  font-size: 18px;
  font-style: italic;
  display: inline-block;
  vertical-align: center;
  color: var(--lightGray);
  text-transform: capitalize;

  &:hover {
    color: var(--mainBlack);
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`
