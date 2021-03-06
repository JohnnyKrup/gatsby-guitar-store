import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import CategoryPreview from "../components/category-preview/category-preview.component"
import HeroAlternative from "../components/hero/hero-alternative.component"

import Layout from "../components/layout.component"
import Title from "../components/title/title.component"

const query = graphql`
  {
    file(relativePath: { eq: "shop_bg.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ShopPage = props => {
  const data = useStaticQuery(query)
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data

  console.log({ props })

  return (
    <Layout>
      <HeroAlternative img={fluid}>
        <Title title="Shop" />
      </HeroAlternative>

      <CategoryPreview hideTitle={true} bgLight={true} />
    </Layout>
  )
}

export default ShopPage
