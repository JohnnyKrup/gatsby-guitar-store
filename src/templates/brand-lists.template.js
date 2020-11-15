import React from 'react'

import Layout from '../components/layout.component'
import GridList from '../components/grid-list/grid-list.component'
import HeroProduct from '../components/hero/hero-product.component'

import {HeroBarContainerStyle, HeroBarTableStyle, HeroBarTableCellStyle, HeroBarTableCellInnerStyle, HeroBarTitleWrapperStyle, HeroBarTitleStyle, BreadcrumbContainerStyle, BreadcrumbLinkStyle, BrandListContainerStyle} from './template.styles'
import SearchButtons from '../components/search-buttons/search-buttons-component'

const BrandListsTemplate = ({data: {allStrapiProduct: { nodes }}, pageContext}) => {    

  // console.log({nodes})    
  // console.log(pageContext)
  
  // get only the products that match the pageContexts categorySlug
  const filteredProducts = []
  nodes.forEach(node => 
    node.categories.forEach(cat => 
      cat.slug === pageContext.categorySlug ? filteredProducts.push(node) : null
    )
  )

  /**
   * Since the products need to be filtered and reset
   * we use a useState for the displayed products in the grid
   */
  const [products, setProducts] = React.useState(filteredProducts)
    
  // reset functionality
  const setBackToAll = () => {
    setProducts(filteredProducts)
  }
  

  return (
    <Layout>
      <HeroProduct>
        <HeroBarContainerStyle>
          <HeroBarTableStyle>
            <HeroBarTableCellStyle>
              <HeroBarTableCellInnerStyle>
                <HeroBarTitleWrapperStyle>
                  <HeroBarTitleStyle>{pageContext.brandTitle}</HeroBarTitleStyle>
                </HeroBarTitleWrapperStyle>
                <BreadcrumbContainerStyle>
                  <BreadcrumbLinkStyle to={`/shop`}>shop</BreadcrumbLinkStyle>
                  <span>&nbsp; / &nbsp;</span>
                  <BreadcrumbLinkStyle to={`/shop/${pageContext.categorySlug}`}>{pageContext.categorySlug}</BreadcrumbLinkStyle>
                  <span>&nbsp; / &nbsp;</span>
                  <span>{pageContext.brandTitle}</span>
                </BreadcrumbContainerStyle>
              </HeroBarTableCellInnerStyle>
            </HeroBarTableCellStyle>
          </HeroBarTableStyle>
        </HeroBarContainerStyle>
      </HeroProduct>      
      
      <SearchButtons 
        products={filteredProducts}
        setProducts={setProducts} 
        setBackToAll={setBackToAll}
      />
        
      <BrandListContainerStyle>
        <GridList products={products} key={products.strapiId} categorySlug={pageContext.categorySlug}/>
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
      soldBadge
      newBadge
      orderedBadge
      brand {
        brandLogo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        id
        slug
        brandTitle: title
      }
      categories {
        slug
        title
      }
      tags{
        tag
      }
    }
  }
}
`

export default BrandListsTemplate
