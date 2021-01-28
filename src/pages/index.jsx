import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout.component"
import Hero from "../components/hero/hero.component"
import Banner from "../components/banner/banner.component"
import CustomButton from "../components/custom-button/custom-button.component"
import CategoryPreview from "../components/category-preview/category-preview.component"
import FeaturedProducts from "../components/featured-products/featured.component"

const HomePage = () => {
  return (
    <Layout>
      <Hero home={true}>
        <Banner
          title="dieGitarre.ch"
          subtitle="seit über 25 jahren"
          info="das grösste Fachgeschäft für akustische Gitarren in der Schweiz"
          isLowerCase={true}
        >
          <CustomButton onClick={() => navigate("/shop")} isCentered inverted>
            Zum Shop
          </CustomButton>
        </Banner>
      </Hero>
      <FeaturedProducts />
      <CategoryPreview hideTitle={false} />
    </Layout>
  )
}

export default HomePage
