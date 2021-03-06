import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"
import { UtilityContext } from "../../context/Utility.Context"

import styled from "styled-components"

import ZGridListItem from "../z-grid-list-item/z-grid-list-item.component"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"

import "swiper/swiper-bundle.css"

SwiperCore.use([Navigation])

const ZGridList = ({
  products,
  categorySlug,
  showTitle,
  linkUrl,
  titleName,
}) => {
  const { windowWidth } = useContext(UtilityContext)

  let itemsPerView = 3
  useEffect(() => {
    windowWidth <= 600 ? (itemsPerView = 1) : (itemsPerView = 3)
    console.log({ windowWidth })
  }, [windowWidth])

  console.log({ products })

  return (
    <>
      {showTitle && (
        <ListTitleStyle>
          <Link to={linkUrl || `/`}>
            {` ${titleName} ` || `Home`}
            <span>mehr</span>
          </Link>
        </ListTitleStyle>
      )}

      <SwiperStyle
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        spaceBetween={0}
        slidesPerView={itemsPerView}
      >
        {products.map(product => {
          return (
            <SwiperSlide key={product.strapiId} tag="li">
              <ZGridListItem product={product} categorySlug={categorySlug} />
            </SwiperSlide>
          )
        })}
      </SwiperStyle>
    </>
  )
}

const SwiperStyle = styled(Swiper)`
  padding-left: 10%;

  & .swiper-button-prev {
    color: black;
    left: 40px;
  }

  & .swiper-button-next {
    color: black;
    right: 40px;
  }

  & .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    & .swiper-button-prev {
      left: 10px;
    }

    & .swiper-button-next {
      right: 10px;
    }
  }

  /* @media (min-width: 768px) {      
  }

  @media (min-width: 992px) {    
  }

  @media (min-width: 1200px) {
  } */
`

const ListTitleStyle = styled.h1`
  padding-left: 10%;
  padding-right: 3%;
  font-size: 2rem;

  & span {
    text-transform: none;
    border-bottom: 0.3px solid black;
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    font-size: 1.3rem;
    & span {
      font-size: 0.8rem;
    }
  }

  /* @media screen and (min-width: 480px){
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
  } */
`

//  const ListContainerStyle = styled.ul`
//   display: flex;
//   white-space: nowrap;
//   margin: 0;
//   scroll-padding-left: 160px;
//   scroll-behavior: smooth;
//   scroll-snap-type: x mandatory;
//   width: 100%;
//   flex-wrap: nowrap;
//   overflow-x: hidden;
//   list-style: none;

//   @media screen and (min-width: 480px){
//     padding-left: 18px;
//     padding-right: 18px;
//   }

//   @media screen and (min-width: 768px){
//     padding-left: 24px;
//     padding-right: 24px;
//   }

//   @media screen and (min-width: 1024px){
//     padding-left: 28px;
//     padding-right: 28px;
//   }

//   @media screen and (min-width: 1280px){
//     padding-left: calc(50vw - 608px);
//     padding-right: calc(50vw - 608px);
//   }
// `
export default ZGridList
