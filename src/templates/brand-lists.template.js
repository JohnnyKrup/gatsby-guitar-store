import React from 'react'

import Layout from '../components/layout.component'
import GridList from '../components/grid-list/grid-list.component'
import HeroProduct from '../components/hero/hero-product.component'

import {HeroBarContainerStyle, HeroBarTableStyle, HeroBarTableCellStyle, HeroBarTableCellInnerStyle, HeroBarTitleWrapperStyle, HeroBarTitleStyle, BreadcrumbContainerStyle, BreadcrumbLinkStyle, BrandListContainerStyle} from './template.styles'


const BrandListsTemplate = ({data: {
    allStrapiProduct: { nodes: products },
  }}) => {        
    const {BrandLogo: {childImageSharp: {fluid}}, title} = products[0].brand
    const {slug} = products[0].categories[0]
    console.log(slug)

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
                  <BreadcrumbLinkStyle to={`/shop/${slug}`}>{slug}</BreadcrumbLinkStyle>
                  <span>&nbsp; / &nbsp;</span>
                  <span>{title}</span>
                </BreadcrumbContainerStyle>
              </HeroBarTableCellInnerStyle>
            </HeroBarTableCellStyle>
          </HeroBarTableStyle>
        </HeroBarContainerStyle>
      </HeroProduct>      
      
        
      <BrandListContainerStyle>
        <GridList products={products} key={products.strapiId} categorySlug={slug}/>
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
