import React from "react"
import Gallery from "react-photo-gallery"

const PhotoGallery = ({ photos, columnLayout }) => {
  return (
    <>
      {columnLayout ? (
        <Gallery photos={photos} direction={"column"} />
      ) : (
        <Gallery photos={photos} />
      )}
    </>
  )
}

export default PhotoGallery
