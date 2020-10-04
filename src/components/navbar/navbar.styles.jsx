import styled from "styled-components"
import { Link } from "gatsby"

export const NavbarStyle = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 1000000000000000000000;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 100px;
  background: #fff;

  -webkit-box-shadow: 0px -3px 3px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -3px 3px 3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -3px 3px 3px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`

export const LogoStyle = styled(Link)`
  height: 100%;
  width: 70px;
  padding-top: 15px;

  img {
    width: 42px;
    height: 42px;
  }

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`

export const LinksStyle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  li {
    transition: var(--mainTransition);
    height: 0;
    /* overflow: hidden; */

    div {
      padding-top: 0;
    }

    & .inactive {
      color: gray;
      cursor: default;
    }
  }

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`
export const LinkStyle = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
`
