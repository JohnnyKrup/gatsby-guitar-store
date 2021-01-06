import React, { useContext, useState } from "react"
import { BsChevronUp, BsChevronDoubleUp } from "react-icons/bs"
import styled from "styled-components"
import { UtilityContext } from "../../context/Utility.Context"

const ScrollButton = () => {
  const [isHover, setIsHover] = useState(false)
  const { windowHeight } = useContext(UtilityContext)
  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <ScrollButtonStyle
      show={windowHeight}
      isHover={isHover}
      onClick={scrollBackToTop}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {!isHover ? <BsChevronUp /> : <BsChevronDoubleUp />}
    </ScrollButtonStyle>
  )
}

const ScrollButtonStyle = styled.button`
  position: fixed;
  width: 45px;
  right: 25px;
  bottom: 25px;
  margin: 0;
  backface-visibility: hidden;
  background: var(--mainBlack);
  color: ${({ isHover }) =>
    isHover ? "var(--mainWhite)" : "var(--lightGray)"};
  z-index: ${({ show }) => (show > 100 ? 10000 : -100)};
  visibility: ${({ show }) => (show > 100 ? "visible" : "hidden")};
  opacity: ${({ show }) => (show > 100 ? 1 : 0)};
  border: 0;
  font-size: 1.5rem;
  line-height: 0;
  padding: 10px 12px;
  cursor: pointer;

  transition: opacity 0.5s ease-out, color 0.2s ease-in, visibility 0.2s ease-in;
`

export default ScrollButton
