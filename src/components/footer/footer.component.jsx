import React, { useState } from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import GoogleMap from "../maps/maps.component"

import plus from "../../images/plus-thin.svg"
import minus from "../../images/minus-thin.svg"
import { maintenance, store } from "../../utils/URL"

const Footer = () => {
  const [isAccordionFirmaHidden, setIsAccordionFirmaHidden] = useState(true)
  const [isAccordionServiceHidden, setIsAccordionServiceHidden] = useState(true)
  const [isAccordionMoreHidden, setIsAccordionMoreHidden] = useState(true)

  const handleAccordion = type => {
    if (type === "firma") {
      setIsAccordionFirmaHidden(!isAccordionFirmaHidden)
    } else if (type === "service") {
      setIsAccordionServiceHidden(!isAccordionServiceHidden)
    } else if (type === "more") {
      setIsAccordionMoreHidden(!isAccordionMoreHidden)
    }
  }

  return (
    <FooterWrapper>
      <FooterInnerWrapper>
        <FooterContainer>
          <FooterMapWrapper>
            <FooterMapTitleContainer>
              <h3>Wo wir sind</h3>
              <h6>Kommt vorbei in unserem neuen Shop in Winterthur</h6>
            </FooterMapTitleContainer>
            <GoogleMap />
          </FooterMapWrapper>

          <FooterLinksWrapper>
            <FooterLinkMenu>
              <FooterLinkMenuTitle onClick={() => handleAccordion("firma")}>
                Geschäft
                <MobileMenuListBtnIcon
                  src={isAccordionFirmaHidden ? plus : minus}
                  alt={`Menu öffnen`}
                />
              </FooterLinkMenuTitle>
              <FooterMenuAccordionFirma
                isAccordionFirmaHidden={isAccordionFirmaHidden}
              >
                <FooterMenuAccordionList>
                  {store &&
                    store.map((link, idx) => {
                      return (
                        <FooterMenuAccordionListItem key={idx}>
                          <FooterLink to={`/${link.url}`}>
                            {link.name}
                          </FooterLink>
                        </FooterMenuAccordionListItem>
                      )
                    })}
                </FooterMenuAccordionList>
              </FooterMenuAccordionFirma>
            </FooterLinkMenu>
            <FooterLinkMenu>
              <FooterLinkMenuTitle onClick={() => handleAccordion("service")}>
                Service
                <MobileMenuListBtnIcon
                  src={isAccordionServiceHidden ? plus : minus}
                  alt={`Menu öffnen`}
                />
              </FooterLinkMenuTitle>
              <FooterMenuAccordionService
                isAccordionServiceHidden={isAccordionServiceHidden}
              >
                <FooterMenuAccordionList>
                  {maintenance &&
                    maintenance.map((link, idx) => {
                      return (
                        <FooterMenuAccordionListItem key={idx}>
                          <FooterLink to={`/${link.url}`}>
                            {link.name}
                          </FooterLink>
                        </FooterMenuAccordionListItem>
                      )
                    })}
                </FooterMenuAccordionList>
              </FooterMenuAccordionService>
            </FooterLinkMenu>
            <FooterLinkMenu>
              <FooterLinkMenuTitle onClick={() => handleAccordion("more")}>
                Mehr entdecken
                <MobileMenuListBtnIcon
                  src={isAccordionMoreHidden ? plus : minus}
                  alt={`Menu öffnen`}
                />
              </FooterLinkMenuTitle>
              <FooterMenuAccordionMore
                isAccordionMoreHidden={isAccordionMoreHidden}
              >
                <FooterMenuAccordionList>
                  <FooterMenuAccordionListItem>
                    <FooterLink to="/">News</FooterLink>
                  </FooterMenuAccordionListItem>
                  <FooterMenuAccordionListItem>
                    <FooterLink to="/">Konzerte</FooterLink>
                  </FooterMenuAccordionListItem>
                  <FooterMenuAccordionListItem>
                    <FooterLink to="/">Angebote</FooterLink>
                  </FooterMenuAccordionListItem>
                </FooterMenuAccordionList>
              </FooterMenuAccordionMore>
            </FooterLinkMenu>
          </FooterLinksWrapper>
        </FooterContainer>
      </FooterInnerWrapper>
      <FooterBottomWrapper>
        <FooterBottomContainer>
          <FooterMore>
            <FooterMoreList>
              <FooterMoreItem>
                <FooterBottomLink to="/">AGB</FooterBottomLink>
              </FooterMoreItem>
              <FooterMoreItem>
                <FooterBottomLink to="/">Privacy Policy</FooterBottomLink>
              </FooterMoreItem>
              <FooterMoreItem>
                <FooterBottomLink to="/">Cookie Settings</FooterBottomLink>
              </FooterMoreItem>
            </FooterMoreList>
          </FooterMore>
          <FooterEnd>
            <FooterEndCopy>
              © dieGitarre.ch SA {new Date().getFullYear()}
            </FooterEndCopy>
          </FooterEnd>
        </FooterBottomContainer>
      </FooterBottomWrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  bottom: 0;
  position: relative;
  /* margin-top: 0; */
  background: var(--mainBlack);
  color: var(--mainWhite);
  display: block;
  width: 100%;
  height: auto;
`

const FooterInnerWrapper = styled.div`
  padding-top: 35px;
  height: 90%;

  @media (min-width: 880px) {
    padding: 85px 0 55px 0;
  }
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;

  max-width: 1080px;
  height: calc(100% - 80px);

  @media (min-width: 480px) {
    width: calc(100% - 80px);
  }

  @media (min-width: 960px) {
    flex-direction: row;
    height: calc(100% - 30px);
    max-width: 1080px;
  }
`

const FooterMapWrapper = styled.div`
  /* padding: 0 20px; */
  max-width: 100%;
  height: 100%;

  @media (min-width: 480px) {
    padding: 0 20px;
  }

  @media (min-width: 880px) {
    flex: 0 0 55%;
    padding-left: 0;
    padding-right: 40px;
    max-width: 600px;
  }
`

const FooterMapTitleContainer = styled.div`
  padding-left: 20px;

  @media (min-width: 480px) {
    padding: 0;
  }
`

const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  width: 100%;
  height: 100%;

  @media (min-width: 480px) {
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    margin-top: 50px;
  }

  @media (min-width: 880px) {
    justify-content: space-between;
    /* flex: 0 0 45%; */
    margin-top: 12px;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
    /* flex: 0 0 55%; */
    flex-wrap: nowrap;
  }
`

const FooterLinkMenu = styled.div`
  width: 100%;

  @media (min-width: 880px) {
    flex: 0 1 auto;
    width: calc(50% - 15px);
  }

  :first-child {
    margin-left: 0;
  }
`

const FooterLinkMenuTitle = styled.h3`
  position: relative;
  font-family: "Roboto-Condensed", Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 1.4;
  margin-bottom: 0;

  border-top: 1px solid rgba(146, 146, 146, 0.5);
  padding: 15px 20px;

  @media (min-width: 480px) {
    margin-bottom: 0.6rem;
  }

  @media (min-width: 960px) {
    font-size: 15px;
    border-top: unset;
    padding: unset;
  }
`

const MobileMenuListBtnIcon = styled.img`
  width: 1em;
  height: 1em;
  display: inline-flex;
  align-items: center;
  margin: 0 4px;
  flex: 0 0 auto;
  color: white;

  position: absolute;
  right: 10px;
  top: 19px;

  @media (min-width: 480px) {
    display: none;
  }
`

const FooterMenuAccordionFirma = styled.div`
  height: ${props => (props.isAccordionFirmaHidden ? "0px" : "auto")};
  overflow: hidden;
  transition: height 0.4s ease-in-out;

  @media (min-width: 880px) {
    height: auto !important;
  }
`

const FooterMenuAccordionService = styled.div`
  height: ${props => (props.isAccordionServiceHidden ? "0px" : "auto")};
  overflow: hidden;
  transition: height 0.4s ease-in-out;

  @media (min-width: 880px) {
    height: auto !important;
  }
`

const FooterMenuAccordionMore = styled.div`
  height: ${props => (props.isAccordionMoreHidden ? "0px" : "auto")};
  overflow: hidden;
  transition: height 0.4s ease-in-out;

  @media (min-width: 880px) {
    height: auto !important;
  }
`

const FooterMenuAccordionList = styled.ul`
  overflow: hidden;
`

const FooterMenuAccordionListItem = styled.li`
  margin-bottom: 15px;
  padding: 0 20px;

  @media (min-width: 480px) {
    padding: 0 40px;
  }

  @media (min-width: 880px) {
    padding: 0;
    margin-bottom: 10px;
  }
`

const FooterLink = styled(Link)`
  color: var(--mainWhite);
  font-family: "Roboto-Condensed", Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 300;
`

const FooterBottomWrapper = styled.div`
  border-top: 1px solid rgba(146, 146, 146, 0.5);
  padding-bottom: 15px;

  @media (min-width: 880px) {
    border-top: 1px solid var(--lightBlack);
    padding-top: 12px;
  }
`

const FooterBottomContainer = styled.div`
  margin: 0 auto;
  position: relative;
  /* width: calc(100% - 40px); */
  /* max-width: 90vw; */

  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    width: calc(100% - 80px);
  }

  @media (min-width: 880px) {
    flex-direction: row;
    justify-content: space-between;
    width: calc(100% - 84px);
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    width: calc(100% - 120px);
    max-width: 1080px;
  }
`

const FooterMore = styled.div`
  border-bottom: 1px solid rgba(146, 146, 146, 0.5);
  margin-bottom: 15px;
  padding: 12px 0;

  @media (min-width: 480px) {
    margin-bottom: 10px;
  }

  @media (min-width: 880px) {
    border: none;
  }

  @media (min-width: 1200px) {
    border: none;
    margin-bottom: 0;
    padding: 12px 0;
  }
`

const FooterMoreList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  @media (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: unset;
  }

  @media (min-width: 1200px) {
    justify-content: flex-start;
    padding-left: unset;
  }
`

const FooterMoreItem = styled.li`
  margin-top: 12px;

  :first-child {
    margin-left: 0;
  }

  @media (min-width: 480px) {
    margin-left: 20px;
  }

  @media (min-width: 880px) {
    margin-top: 0;
  }
`

const FooterBottomLink = styled(FooterLink)`
  color: var(--lightGray);
  text-transform: uppercase;
`

const FooterEnd = styled.div`
  align-items: center;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;

  @media (min-width: 480px) {
    justify-content: center;
    padding: 0 40px;
  }

  @media (min-width: 880px) {
    padding: 12px 60px;
  }

  @media (min-width: 1200px) {
    text-align: left;
    padding: 12px 0;
  }
`

const FooterEndCopy = styled.span`
  opacity: 0.6;
  font-size: 10px;
  line-height: 1.5;
  font-family: "Roboto-Condensed", Arial, Helvetica, sans-serif;
`

export default Footer
