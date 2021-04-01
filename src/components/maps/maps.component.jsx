import React from "react"
import styled from "styled-components"

const addressUrl =
  "https://maps.google.com/maps?q=dieGitarre.ch&t=&z=19&ie=UTF8&iwloc=&output=embed"

const Maps = () => {
  return (
    <MapWrapper>
      <MapFrame src={addressUrl} scrolling="no"></MapFrame>
    </MapWrapper>
  )
}

const MapWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  margin: 0 auto;
  text-align: center;
`

const MapFrame = styled.iframe`
  width: 100%;
  /* height: 100%; */
  height: 200px;
  max-height: 500px;
  border: none;

  @media (min-width: 480px) {
    height: 250px;
  }

  @media (min-width: 880px) {
    height: 300px;
  }
`

export default Maps
