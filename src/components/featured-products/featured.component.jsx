import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styled from "styled-components"

import GridList from "../grid-list/grid-list.component"
import Title from "../title/title.component"

const FeaturedProducts = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProduct: { nodes: products },
  } = data

  //console.log({data})

  return (
    <FeaturedSectionStyle>
      <Title title="Winter Special" />
      <FeaturedArticleStyle>
        <h3>Jetzt 20% auf ausgewählte Modelle</h3>
        <p>
          Seht euch die Herbst-Specials an, die Aktion ist noch gültig bis zum
          28. Februar, das ist die Gelegenheit für die Schnäppchenjäger unter
          euch ;)
        </p>
      </FeaturedArticleStyle>
      <GridList products={products} showPrice={true} />
    </FeaturedSectionStyle>
  )
}

export const FeaturedSectionStyle = styled.section`
  background: var(--mainWhite);
  padding: 5rem 0;
  margin-top: 70px;
  width: 100%;
`

export const FeaturedArticleStyle = styled.article`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
`

const query = graphql`
  {
    allStrapiProduct(filter: { featured: { eq: true } }) {
      nodes {
        strapiId
        title
        slug
        price
        featured
        product_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        brand {
          brandTitle: title
          brandSlug: slug
          id
          brandLogo {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        category {
          categorySlug: slug
        }
      }
    }
  }
`

export default FeaturedProducts
