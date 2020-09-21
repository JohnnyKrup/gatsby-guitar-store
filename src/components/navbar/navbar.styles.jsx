import styled from "styled-components"
import { Link } from "gatsby"

export const NavbarStyle = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 100px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`

export const LogoStyle = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  img {
    width: 48px;
    height: 48px;
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
