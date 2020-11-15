import React, { useState } from "react"

import Img from "gatsby-image"
import styled from "styled-components"

const ImageGallery = ({ images, imgWidth }) => {
  const [mainImage, setMainImage] = useState(null)
  const len = images.length
  // console.log({ imgWidth })

  return (
    <>
      {len > 0 && (
        <ArticleImageStyle>
          <MainImageContainerStyle imgWidth={imgWidth}>
            <MainImageStyle
              fluid={mainImage === null ? images[0] : mainImage}
              imgWidth={imgWidth}
            />
          </MainImageContainerStyle>
          <ThumbnailsContainerStyle len={len} imgWidth={imgWidth}>
            {images.map((image, idx) => {
              return (
                <div key={idx} onClick={() => setMainImage(image)}>
                  <ThumbnailStyle fluid={image} />
                </div>
              )
            })}
          </ThumbnailsContainerStyle>
        </ArticleImageStyle>
      )}
    </>
  )
}

export const ArticleImageStyle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainImageContainerStyle = styled.div`
  width: ${({ imgWidth }) => imgWidth || "300px"};
  border: 1px solid #000;
  margin-bottom: 20px;
  padding: 10px;
`

export const MainImageStyle = styled(Img)`
  height: ${({ imgWidth }) => imgWidth || "300px"};
`

export const ThumbnailsContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${({ imgWidth }) => imgWidth || "300px"};
  justify-content: ${({ len }) => (len > 3 ? "space-between" : "space-evenly")};  
  
`

export const ThumbnailStyle = styled(Img)`
  width: 70px;
  border: 1px solid #000;
  margin-bottom: 10px;  
  cursor: pointer;
  opacity: 0.6;

  :hover {
    opacity: 1;
  }
`

export default ImageGallery
