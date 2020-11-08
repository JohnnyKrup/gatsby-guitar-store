import React from "react"
import {Link} from 'gatsby'

import styled from "styled-components"

import ZGridListItem from "../z-grid-list-item/z-grid-list-item.component"


const ZGridList = ({ products, categorySlug, showTitle, linkUrl, titleName }) => {  
  console.log({ products })
  return (
    <>
      {
        showTitle && 
          <ListTitleStyle><Link to={linkUrl || `/`}>{titleName || `Home`}</Link></ListTitleStyle>
      }    
      <ListContainerStyle>
        {products.map(product => {        
            return <ZGridListItem product={product} key={product.strapiId} categorySlug={categorySlug} />        
        })}
      </ListContainerStyle>          
    </>
  )
}

const ListTitleStyle = styled.h1`
  padding-left: 3%;
  padding-right: 3%;

  @media screen and (min-width: 480px){
    padding-left: 18px;
    padding-right: 18px;    
  }

  @media screen and (min-width: 768px){
    padding-left: 24px;
    padding-right: 24px;    
  }

  @media screen and (min-width: 1024px){
    padding-left: 28px;
    padding-right: 28px;    
  }

  @media screen and (min-width: 1280px){
    padding-left: calc(50vw - 608px);
    padding-right: calc(50vw - 608px);    
  }
`

 const ListContainerStyle = styled.ul`
  display: flex;
  white-space: nowrap;
  margin: 0;
  scroll-padding-left: 160px;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;  
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: hidden;
  list-style: none;

  @media screen and (min-width: 480px){
    padding-left: 18px;
    padding-right: 18px;    
  }

  @media screen and (min-width: 768px){
    padding-left: 24px;
    padding-right: 24px;    
  }

  @media screen and (min-width: 1024px){
    padding-left: 28px;
    padding-right: 28px;    
  }

  @media screen and (min-width: 1280px){
    padding-left: calc(50vw - 608px);
    padding-right: calc(50vw - 608px);    
  }
`

//  const TileLayoutStyle = styled.div`
//   /* margin-top: 2rem; */
//   margin: 0 auto;
//   display: grid;
//   width: 100%;
//   max-width: var(--fullWidth);
//   padding: 0 2%;
//   gap: 1rem;
//   /* safari workaround */
//   grid-gap: 1rem;
//   grid-template-rows: auto auto;
//   grid-auto-rows: auto;
//   justify-items: center;

//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;        
//   }

//   @media (min-width: 768px) {
//     grid-template-columns: 1fr 1fr;
//     width: 92%;
//   }

//   @media (min-width: 992px) {
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-template-rows: auto;
//   }
// `


export default ZGridList
