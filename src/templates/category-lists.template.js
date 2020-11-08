import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout.component"
import ZGridList from "../components/z-grid-list/z-grid-list.component"
import HeroProduct from '../components/hero/hero-product.component'

import {HeroBarContainerStyle, HeroBarTableStyle, HeroBarTableCellStyle, HeroBarTableCellInnerStyle, HeroBarTitleWrapperStyle, HeroBarTitleStyle, BreadcrumbContainerStyle, BreadcrumbLinkStyle, CategoryListContainerStyle, CategoryListRowStyle, GridListTitleStyle} from './template.styles'

const categoryListsTemplate = ({
  data: {
    allStrapiProduct: { products },
    allStrapiCategory: {nodes}
  },
  pageContext,
}) => {  
  const cat = products[0].categories.filter(c => c.slug === pageContext.slug) 
  // console.log({nodes})
  // console.log({products})

  return (
    <Layout>
      <HeroProduct>
        <HeroBarContainerStyle>
          <HeroBarTableStyle>
            <HeroBarTableCellStyle>
              <HeroBarTableCellInnerStyle>
                <HeroBarTitleWrapperStyle>
                  <HeroBarTitleStyle>{cat[0].catTitle}</HeroBarTitleStyle>
                </HeroBarTitleWrapperStyle>
                <BreadcrumbContainerStyle>
                  <BreadcrumbLinkStyle to={`/shop`}>shop</BreadcrumbLinkStyle>
                  <span>&nbsp; / &nbsp;</span>                  
                  <span>{cat[0].catTitle}</span>
                </BreadcrumbContainerStyle>
              </HeroBarTableCellInnerStyle>
            </HeroBarTableCellStyle>
          </HeroBarTableStyle>
        </HeroBarContainerStyle>
      </HeroProduct> 


      <CategoryListContainerStyle>
      {
        nodes[0].brands.map((brand, idx) => {
          const prods = products.filter(product => product.brand.slug === brand.slug)
          
          return (
            <CategoryListRowStyle key={idx}>
              {/* <GridListTitleStyle>
                <Link to={`/shop/${pageContext.slug}/${brand.slug}`}>{brand.title}</Link>
                </GridListTitleStyle> */}
              <ZGridList products={prods} categorySlug={pageContext.slug} showTitle linkUrl={`/shop/${pageContext.slug}/${brand.slug}`} titleName={brand.title} />
            </CategoryListRowStyle>
          )
        })        
      }
      </CategoryListContainerStyle>      
    </Layout>
  )
}

export const query = graphql`
  query CategoryLists($slug: String!) {
    allStrapiProduct(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      products: nodes {
        categories {
          catTitle: title
          slug
          image_header {
            childImageSharp {
              catImg: fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        strapiId
        title
        price
        slug
        brand {
          brandTitle: title
          slug
        }
        gallery_images {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        product_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    allStrapiCategory(filter: {slug: {eq: $slug}}) {
      nodes {
        slug
        brands {
          title
          slug
        }
      }
    }
  }
`

export default categoryListsTemplate
