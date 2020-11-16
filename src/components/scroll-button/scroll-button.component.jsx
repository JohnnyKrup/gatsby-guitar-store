import React, { useContext } from "react"
import { BsChevronUp } from "react-icons/bs"
import styled from "styled-components"
import { UtilityContext } from "../../context/Utility.Context"

const ScrollButton = () => {
  const { windowHeight } = useContext(UtilityContext)
  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <ScrollButtonStyle show={windowHeight} onClick={scrollBackToTop}>
      <BsChevronUp />
    </ScrollButtonStyle>
  )
}

const ScrollButtonStyle = styled.button`
  position: fixed;
  right: 0px;
  bottom: 3rem;
  background: var(--mainWhite);
  color: var(--darkGray);
  z-index: ${({ show }) => (show > 100 ? 100 : -100)};
  opacity: ${({ show }) => (show > 100 ? 1 : 0)};       
  border-style: solid;     
  border-color: var(--darkGray);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-right-style: none;
  font-size: 1.5rem;
  line-height: 0;
  padding: 0.4rem 0.5rem;
  cursor: pointer;
  
`

// const ShowScrollButtonStyle = styled.button`
//   z-index: 100;
//   opacity: 1;  
// `

// const fadeInRight = keyframes`
// 0% {right: -2rem;}
//         33% {right: -0.66rem;}
//         66% {right: -0.33rem;}
//         100% {right: 0px;}
// `

// const getButtonStyle = props => {
//   if (props.show) {
//     return ShowScrollButtonStyle
//   }
// }

export default ScrollButton
