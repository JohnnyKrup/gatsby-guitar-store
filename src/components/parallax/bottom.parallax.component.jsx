import React from "react"
import styled from "styled-components"

const PrallaxBottom = () => {
  return (
    <Wrapper>
      <Row></Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  box-sizing: border-box;
`

const Row = styled.div`
  position: relative;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 0;
  background-color: var(--mainWhite);

  ::before {
    content: "";
    display: table;
  }

  :nth-child(1) {
    padding-top: 70px;
  }

  ::after {
    clear: both;
  }
`

const Card = styled.div`
  width: 100%;
  position: relative;
  min-height: 1px;
  padding-left: 0px;
  padding-right: 0px;
  box-sizing: border-box;
  float: left;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 992px) {
    width: 50%;
    float: left;
  }

  @media (min-width: 1200px) {
    width: 33.33%;
    float: left;
  }
`

export default PrallaxBottom
