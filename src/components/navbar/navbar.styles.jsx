import styled from "styled-components"
import { Link } from "gatsby"

export const SVGIcon = styled.img`
  width: 1em;
  height: 1em;
  display: inline-flex;
  align-items: center;
  margin: 0 4px;
  flex: 0 0 auto;
`

export const NavbarStyle = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 100px;
  background: #fff;

  -webkit-box-shadow: 0px -3px 3px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -3px 3px 3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -3px 3px 3px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 768px) {
    height: 68px;
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
    padding-top: 3px;
  }
`

export const LinksStyle = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    /* li {
      transition: var(--mainTransition);
      height: 0;
      overflow: hidden;

      div {
        padding-top: 0;
      }

      & .inactive {
        color: var(--lightGray);
        cursor: default;
      }
    }     
    */
  }
`

export const LinkListItemStyle = styled.li`
  @media screen and (min-width: 800px) {
    transition: var(--mainTransition);
    height: 0;
    /* overflow: hidden; */

    div {
      padding-top: 0;
    }

    & .inactive {
      color: var(--lightGray);
      cursor: default;
    }
  }
`

export const LinkStyle = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;
  color: var(--darkGray);
  cursor: pointer;

  &:hover {
    color: var(--mainBlack);
  }
`

export const LoginLinkStyle = styled(Link)`
  padding: 36px 15px 0 15px;
  text-transform: uppercase;
  color: var(--darkGray);
  cursor: pointer;

  &:hover {
    color: var(--mainBlack);
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`

export const MenuButtonStyle = styled.button`
  width: 3.5rem;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: transparent;
  color: var(--mainBlack);
  transition: var(--mainTransition);
  background-color: var(--mainWhite);
  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }
`

export const CartListItemStyle = styled.div`
  padding-top: 37px;

  @media (max-width: 800px) {
    padding-top: 18px;
  }
`

export const ProfileContainerStyle = styled.div`
  padding-top: 37px;
  justify-content: center;

  @media (max-width: 800px) {
    padding-top: 18px;
  }
`
