import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

export const ItemStyle = styled.div`
  width: 90%;
  height: 450px;  
  padding: 10px;

  /* flex: 1 1 auto; */
  justify-self: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;  
  
   @media (max-width: 600px) {
    height: 300px;
    padding: 0px;
  }

  @media (min-width: 768px) {
    height: 350px;
    margin-bottom: 10px;
    width: 100%;
  }

  @media (min-width: 992px) {
    
  }

  @media (min-width: 1200px) {
    height: 550px;
  }
`

export const BGImageStyle = styled(BackgroundImage)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HoverStyle = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: .25;

  & :hover {
    opacity: 0;
  }
`

export const BadgeStyle = styled.div`
  position: absolute;
  top: -11px;
  right: 0;  
  background: var(--lightBlack);
  color: #fff;
  text-transform: capitalize;
  padding: 5px 10px;

  @media screen and (max-width: 600px){
    top: -1px;
    right: 10px;
  }
`

export const TextStyle = styled.div`
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

  & :hover{
    opacity: 1;
  }

  & .brand {
    text-align: center;
    text-transform: uppercase;
  }

  & .title {
    font-weight: 700;
    text-align: center;
  }
`
