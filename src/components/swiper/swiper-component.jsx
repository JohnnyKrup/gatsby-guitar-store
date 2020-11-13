import React from 'react'
import styled from 'styled-components'

import SwiperCore, {Virtual} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

import ZGridListItem from '../z-grid-list-item/z-grid-list-item.component'

SwiperCore.use([Virtual])

const SwiperControl = ({products}) => {  
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      virtual
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={()=> console.log('slide changed')}
    >
      {
        products.map((product, index) => {
          return <SwiperSlide key={product.strapiId} virtualIndex={index}>
            <ZGridListItem product={product} />            
          </SwiperSlide>
        })
      }      
    </Swiper>
  )
}

export default SwiperControl
