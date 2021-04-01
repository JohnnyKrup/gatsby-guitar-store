import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout.component"
import BreadCrumb from "../components/breadcrumb/breadcrumb.component"
import styled from "styled-components"
import BGI from "gatsby-background-image"

import Img from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "OurTeam_1920.jpg" }) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allStrapiEmployee {
      emps: nodes {
        strapiId
        name
        position
        email
        text
        url
        image {
          cis: childImageSharp {
            empImg: fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Team = () => {
  const data = useStaticQuery(query)

  const {
    file: {
      childImageSharp: { fluid },
    },
    allStrapiEmployee: { emps },
  } = data

  // console.log(emps)

  return (
    <Layout>
      <BreadCrumb title="Team" />
      <Content>
        <ContentHolder>
          <ParallaxWrapper fluid={fluid}>
            <ColumnContainer>
              <ColumnContainerInner>
                <TitleWrapper>
                  <h6>Was dein Gitarrenherz begehrt, wir helfen dir gerne</h6>
                  <h1>Unser Team</h1>
                </TitleWrapper>
              </ColumnContainerInner>
            </ColumnContainer>
          </ParallaxWrapper>

          <ParallaxMobileWrapper fluid={fluid}>
            <ColumnContainer>
              <ColumnContainerInner>
                <TitleWrapper>
                  <h6>Was dein Gitarrenherz begehrt, wir helfen dir gerne</h6>
                  <h1>Unser Team</h1>
                </TitleWrapper>
              </ColumnContainerInner>
            </ColumnContainer>
          </ParallaxMobileWrapper>

          {emps.map((emp, idx) => {
            const {
              name,
              position,
              text,
              email,
              url,
              image: {
                cis: { empImg },
              },
            } = emp
            return (
              <>
                <RowContainer key={idx}>
                  <RowContent>
                    <ImageContainer isRightAligned={(idx + 1) % 2 === 0}>
                      <ImageContent fluid={empImg} />
                    </ImageContainer>
                    <TextContainer isRightAligned={(idx + 1) % 2 === 0}>
                      <span>{position}</span>
                      <h2>{name}</h2>
                      <p dangerouslySetInnerHTML={{ __html: text }} />
                      <p>
                        <a href={`https://${url}`} target="_blank">
                          {url}
                        </a>
                      </p>
                      <p>
                        <span>{email}</span>
                      </p>
                    </TextContainer>
                  </RowContent>
                </RowContainer>
                <RowDivider />
              </>
            )
          })}
        </ContentHolder>
      </Content>
    </Layout>
  )
}

const Content = styled.div`
  width: 100%;
  display: flex;
`
const ContentHolder = styled.div`
  padding-left: 0;
  padding-right: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  /* float: left; */
  width: 100%;
`

const ParallaxWrapper = styled(BGI)`
  padding: 0;
  background-color: var(--mainGray);
  margin-bottom: 0;
  position: static;
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  background-size: 1920px 800px;
  overflow: hidden;
  min-height: 1px;
  height: 350px;

  @media (max-width: 400px) {
    display: none;
  }
`

const ParallaxMobileWrapper = styled(BGI)`
  padding: 0;
  background-color: var(--mainGray);
  margin-bottom: 0;
  position: static;
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  background-size: 1050px 520px;
  overflow: hidden;
  min-height: 1px;
  height: 300px;

  @media (min-width: 400px) {
    display: none;
  }
`

const ColumnContainer = styled.div`
  width: 100%;
  position: relative;
  min-height: 1px;
  padding-left: 0px;
  padding-right: 0px;

  @media (min-width: 768px) {
    float: left;
    width: 100%;
  }
`

const ColumnContainerInner = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`

const TitleWrapper = styled.div`
  margin-top: 150px;
  text-align: center;
  color: var(--mainWhite);

  @media (max-width: 400px) {
    margin-top: 100px;
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

const RowContainer = styled.div`
  /* margin: 0 -15px; */
  padding: 100px 0 50px;
  width: auto;
  margin: 0 auto;

  @media (max-width: 400px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 992px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 1100px;
  }
`

const RowDivider = styled.div`
  margin: 10px 0;
  vertical-align: middle;
  width: 100%;
  border-bottom-width: 0px;
  border-top-width: 1px;
  border-style: solid;
  border-color: var(--lightGray);
`

const RowContent = styled.div`
  position: relative;
  display: table;
  table-layout: fixed;
  height: 100%;
  width: 100%;
  padding: 0 40px;

  @media (max-width: 400px) {
    padding: 0;
  }
`

const ImageContainer = styled.div`
  position: relative;
  display: table-cell;
  height: 100%;
  width: 50%;
  vertical-align: middle;
  float: ${props => (props.isRightAligned ? "right" : "left")};

  @media (max-width: 880px) {
    display: block;
    width: 100%;
    float: unset;
    height: auto;
  }
`

const ImageContent = styled(Img)`
  max-width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    width: 100vw;
  }
`

const TextContainer = styled.div`
  position: relative;
  display: table-cell;
  height: 100%;
  width: 50%;
  vertical-align: middle;
  padding-left: ${props => (props.isRightAligned ? "0" : "48px")};
  padding-right: ${props => (props.isRightAligned ? "48px" : "0")};
  float: ${props => (props.isRightAligned ? "left" : "right")};
  white-space: pre-line;

  @media (max-width: 880px) {
    display: block;
    width: 100vw;
    padding: 50px 15px 0;
    float: none;
  }

  span {
    font-family: Dosis, sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 6px;
    display: block;
    text-transform: uppercase;
    color: #000;
    letter-spacing: 0.2em;
  }

  h2 {
    font-family: Dosis, sans-serif;
    text-transform: uppercase;
    margin-bottom: 25px;
    font-weight: 200;
    font-size: 35px;
    color: var(--mainBlack);
    line-height: 1.3em;
    letter-spacing: 0.1em;
  }

  p {
    margin: 10px 0;
    font-weight: 300;
    font-family: Roboto, sans-serif;
    width: 100%;

    span {
      color: var(--primaryColor);
      text-transform: none;
      font-weight: 400;
      font-size: 16px;
    }
  }
`

export default Team
