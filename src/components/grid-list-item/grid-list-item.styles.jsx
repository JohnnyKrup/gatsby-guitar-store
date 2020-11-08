import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

export const ItemStyle = styled.div`
  width: 90%;
  height: 450px;  
  /* padding: 0px 4% 15px 4%; */

  /* flex: 1 1 auto; */
  justify-self: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  
   @media (max-width: 600px) {
    height: 300px;
    
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

  & .brand {
    text-align: center;
    text-transform: uppercase;
  }

  & .title {
    font-weight: 700;
    text-align: center;
  }
`
