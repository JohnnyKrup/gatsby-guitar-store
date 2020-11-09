import { navigate } from "gatsby"
import React from "react"

import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"


const ZGridListItem = ({ product, categorySlug }) => {
  const {
    strapiId,
    price,
    title,
    slug,
    product_image: {
      childImageSharp: { fluid },
    },
    brand: { brandTitle, slug: brandSlug },
  } = product
   //console.log({product})

  return (
    <ListItemStyle>
    <ItemStyle key={strapiId} onClick={() => navigate(`/shop/${categorySlug}/${brandSlug}/${slug}`)}>
      <BGImageStyle fluid={fluid}>
        <TextStyle>
          <div className="brand">- {brandTitle} -</div>
          <div className="title">{title}</div>
          <div className="title">CHF {price}</div>
        </TextStyle>
      </BGImageStyle>
    </ItemStyle>
    </ListItemStyle>
  )
}

const ListItemStyle = styled.article`
  display: list-item;
  max-width: 100%;
  flex-basis: 100%;
  padding-left: 6px;
  padding-right: 6px;
  scroll-snap-align: start;
  /* this makes the overflow possible */
  flex-shrink: 0;

  @media screen and (max-width: 600px){
    max-width: 90%;
    flex-basis: 90%;
  }

  @media screen and (min-width: 768px){
    /* max-width: 33%;
    flex-basis: 33%; */
    padding-left: 8px;
    padding-right: 8px;
  }
`

const ItemStyle = styled.div`
  width: 100%;
  height: 450px;  
  /* padding: 0px 4% 15px 4%; */  

  /* flex: 1 1 auto; */
  justify-self: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  width: calc(100vw / 5);
  
   @media (max-width: 600px) {
    height: 300px;    
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 350px;
    margin-bottom: 10px;    
  }

  @media (min-width: 992px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    height: 550px;
    width: 100%;
  }
`

const BGImageStyle = styled(BackgroundImage)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const TextStyle = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  opacity: 0.85;
  /* thanks to this positioning the content div remains in the middle of the 
  parent container no matter what */
  position: absolute;
  background: #fff;

  & .brand {
    text-align: center;
    text-transform: uppercase;
  }

  & .title {
    font-weight: 700;
    text-align: center;
  }
`


export default ZGridListItem
