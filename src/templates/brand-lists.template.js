import React from 'react'

import Layout from '../components/layout.component'
import GridList from '../components/grid-list/grid-list.component'
import HeroProduct from '../components/hero/hero-product.component'

import {HeroBarContainerStyle, HeroBarTableStyle, HeroBarTableCellStyle, HeroBarTableCellInnerStyle, HeroBarTitleWrapperStyle, HeroBarTitleStyle, BreadcrumbContainerStyle, BreadcrumbLinkStyle, BrandListContainerStyle} from './template.styles'


const BrandListsTemplate = ({data: {
    allStrapiProduct: { nodes: products },
  }, pageContext}) => {                    
    // console.log({products})    
    // console.log(pageContext)

    const {title} = products[0].brand
    const filteredProducts = []
    products.forEach(product => 
      product.categories.forEach(cat => cat.slug === pageContext.categorySlug ? filteredProducts.push(product) : null)
    )    

  return (
    <Layout>
      <HeroProduct>
        <HeroBarContainerStyle>
          <HeroBarTableStyle>
            <HeroBarTableCellStyle>
              <HeroBarTableCellInnerStyle>
                <HeroBarTitleWrapperStyle>
                  <HeroBarTitleStyle>{title}</HeroBarTitleStyle>
                </HeroBarTitleWrapperStyle>
                <BreadcrumbContainerStyle>
                  <BreadcrumbLinkStyle to={`/shop`}>shop</BreadcrumbLinkStyle>
                  <span>&nbsp; / &nbsp;</span>
                  <BreadcrumbLinkStyle to={`/shop/${pageContext.categorySlug}`}>{pageContext.categorySlug}</BreadcrumbLinkStyle>
                  <span>&nbsp; / &nbsp;</span>
                  <span>{title}</span>
                </BreadcrumbContainerStyle>
              </HeroBarTableCellInnerStyle>
            </HeroBarTableCellStyle>
          </HeroBarTableStyle>
        </HeroBarContainerStyle>
      </HeroProduct>      
      
        
      <BrandListContainerStyle>
        <GridList products={filteredProducts} key={products.strapiId} categorySlug={pageContext.categorySlug}/>
      </BrandListContainerStyle>
    </Layout>
  )
}

export const query = graphql`
  query BrandLists($slug: String!) {
  allStrapiProduct(filter: {brand: {slug: {eq: $slug}}}) {
    nodes {
      price
      product_image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slug
      strapiId
      title
      brand {
        BrandLogo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        id
        slug
        title
      }
      categories {
        slug
        title
      }
    }
  }
}
`

export default BrandListsTemplate
