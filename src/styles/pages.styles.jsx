import styled from "styled-components"
import BackImg from "gatsby-background-image"

export const PageStyle = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 0 1px rgb(47 49 53 / 3%), 0 1px 2px rgb(47 49 53 / 4%);
  background-color: var(--mainWhite);

  @media (min-width: 768px) {
    max-width: 980px;
    margin: 35px auto;
  }

  @media (min-width: 1200px) {
    max-width: 1150px;
    margin: 70px auto;
  }
`

export const HeaderImageContainer = styled.div`
  position: relative;
  min-height: 400px;
  height: 400px;
  width: 100%;
`

export const ImageStyle = styled(BackImg)`
  width: 100%;
  height: 100%;
`

export const ContentContainer = styled.div`
  padding-bottom: 70px;
`

export const ColumnContainerInner = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`

export const TitleWrapper = styled.div`
  padding-top: 150px;
  text-align: center;
  color: var(--mainWhite);

  @media (max-width: 400px) {
    padding-top: 100px;
  }

  h1 {
    font-size: 80px;
    font-weight: 400;
    line-height: 1.1em;
    letter-spacing: 0.1em;
    margin-bottom: 0;

    @media (max-width: 400px) {
      font-size: 40px;
    }
  }

  h6 {
    font-size: 16px;
    line-height: 1.6em;
    font-weight: 700;

    @media (max-width: 400px) {
      font-size: 12px;
    }
  }
`

export const ContentContainerInner = styled.div`
  max-width: 100%;
  width: 100%;

  ::before {
    content: "";
    display: table;
  }

  ::after {
    clear: both;
  }

  @media (min-width: 768px) {
    max-width: 980px;
    margin: 0 auto;
    padding: 0 35px;
  }

  @media (min-width: 1200px) {
    max-width: 1150px;
    margin: 0 auto;
    padding: 0 70px;
  }
`

export const ContentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 40px 0 0;
  list-style: none;

  ::before {
    content: "";
    display: block;
    overflow: hidden;
  }

  ::after {
    clear: both;
  }
`

export const ContentMain = styled.div`
  /* float: left; */
  margin: 0;
  width: 100%;

  @media (max-width: 400px) {
    padding: 0 10%;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1200px) {
    /* padding-left: 35px; */
  }
`

export const Content = styled.main`
  display: block;
  margin-bottom: 0px;
`

export const ContentArticle = styled.article`
  margin-bottom: 35px;

  p {
    margin: 20px 0;
    text-align: justify;
  }
`

export const LinkColor = styled.span`
  color: darkorange;
`

export const GalleryContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: var(--fullWidth);
  /* margin: 0 auto; */
  grid-template-rows: auto auto;
  grid-auto-rows: auto;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-row-gap: 3px;
  }

  @media (min-width: 401px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }
`

export const ImageContainer = styled.div`
  margin: 0;

  @media (min-width: 768px) {
    /* width: 50%; */
  }
`

export const ContentAside = styled.aside`
  margin: 20px 0 0;
  width: 100%;

  @media (max-width: 400px) {
    padding: 0 10%;
  }

  @media (min-width: 768px) {
    width: 30%;
    padding-left: 35px;
  }

  @media (min-width: 1200px) {
    padding-left: 35px;
  }
`

export const AsidePanel = styled.div`
  background-color: var(--mainGray);
  color: var(--mainBlack);
  padding: 30px;
  border: 1px solid var(--lightGray);

  p {
    margin: 20px 0;
  }

  p:first-child {
    margin: 0 0 20px;
  }

  p:last-child {
    margin: 20px 0 0;
  }
`

export const PageList = styled.ul`
  font-style: italic;
  list-style-type: square;
  margin-left: 15px;
`

export const PageListItem = styled.li`
  list-style-type: square;
`
