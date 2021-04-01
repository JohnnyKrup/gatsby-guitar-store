import React from "react"
import styled from "styled-components"
import BI from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "OurTeam_1200.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const PrallaxImage = () => {
  const {
    data: {
      file: {
        childImageSharp: { fluid },
      },
    },
  } = useStaticQuery(query)

  return (
    <BGWrapper fluid={fluid}>
      <div>Parallax Image</div>
    </BGWrapper>
  )
}

const BGWrapper = styled(BI)`
  padding: 0;
  background-color: transparent;
  margin-bottom: 0 !important;
  position: static;
  background-repeat: no-repeat;
  background-position: center 0;
  background-attachment: fixed;
  overflow: hidden;

  background-position: 50% 134px;
  width: 100%;
  height: 500px;
  background-image: linear-gradient(rgba(64, 64, 64, 0.9), rgba(0, 0, 0, 0.7));

  div {
    margin: 0 auto;
    width: 100%;
    font-size: 33px;
    color: white;
    text-align: center;
    padding: 10% 20%;
  }
`

export default PrallaxImage
