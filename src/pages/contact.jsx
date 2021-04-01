import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackImg from "gatsby-background-image"
import styled from "styled-components"

import Layout from "../components/layout.component"
import BreadCrumb from "../components/breadcrumb/breadcrumb.component"
import FormInput from "../components/form-input/form-input.component"
import FormTextarea from "../components/form-input/form-textarea.component"
import CustomButton from "../components/custom-button/custom-button.component"

const query = graphql`
  {
    file(relativePath: { eq: "Message_1150.jpg" }) {
      cis: childImageSharp {
        fluid(maxWidth: 1120, quality: 90, grayscale: false) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    contract: file(relativePath: { eq: "Mietvertrag-dieGitarre.ch_2021.pdf" }) {
      publicURL
    }
  }
`

const Contact = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  let isEmpty = !email || !message || !username

  const {
    file: {
      cis: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Layout bgColor="#ececec">
      <BreadCrumb title="Kontakt" />

      <PageStyle>
        <HeaderImageContainer>
          <ImageStyle fluid={fluid}>
            <ColumnContainerInner>
              <TitleWrapper>
                <h6>Message in a bottle... Sendet uns eine Nachricht</h6>
                <h1>Kontakt</h1>
              </TitleWrapper>
            </ColumnContainerInner>
          </ImageStyle>
        </HeaderImageContainer>

        <ContentContainer>
          <ContentContainerInner>
            <ContentGrid>
              <ContentMain>
                <Content>
                  <ContentArticle>
                    <p>
                      Du möchtest dich über eine bestimmte Gitarre, Pickup,
                      Zubehör oder auch Konzerte genauer informieren lassen?
                      Dann sende uns mittels untenstehendem Formular eine
                      Nachricht, wir werden so rasch wie möglich antworten.
                    </p>

                    <ContactFormStyle>
                      <h2 className="title">Kontaktformular</h2>
                      <span>
                        Name, Email und deine Nachricht eingeben, dann kannst du
                        deine Anfrage senden
                      </span>
                      <form
                        name="contact"
                        method="post"
                        action="/thanks"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                      >
                        <input type="hidden" name="form-name" value="contact" />
                        {/* <p style={{ display: "none" }}>
                          <input name="bot-field" />
                        </p> */}
                        <FormInput
                          type="text"
                          name="username"
                          value={username}
                          label="Name"
                          onChange={event => setUsername(event.target.value)}
                          required
                        />
                        <FormInput
                          type="email"
                          name="email"
                          value={email}
                          label="Email"
                          onChange={event => setEmail(event.target.value)}
                          required
                        />
                        <FormTextarea
                          type="text-area"
                          name="message"
                          value={message}
                          label="Nachricht"
                          rows="6"
                          onChange={event => setMessage(event.target.value)}
                          required
                        />
                        {isEmpty ? null : (
                          <CustomButton type="submit">SENDEN</CustomButton>
                        )}
                      </form>
                    </ContactFormStyle>
                  </ContentArticle>
                </Content>
              </ContentMain>
              <ContentAside>
                <AsidePanel>
                  <p>
                    <strong>Öffnungszeiten</strong>
                    <br /> Di - Fr: 09:00 - 12:00
                    <br /> Di - Fr: 13:30 - 18:30
                    <br /> Sa: &nbsp; &nbsp; &nbsp; 09:00 - 16:00
                    <br /> So - Mo: Geschlossen
                  </p>
                  <p>
                    <strong>Kontakt</strong>
                    <br /> dieGitarre.ch
                    <br /> Tösstalstrasse 3
                    <br /> 8400 Winterthur
                    <br />
                    <br /> +41 52 213 00 00
                    <br /> info@diegitarre.ch
                  </p>
                </AsidePanel>
              </ContentAside>
            </ContentGrid>
          </ContentContainerInner>
        </ContentContainer>
      </PageStyle>
    </Layout>
  )
}

const PageStyle = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 0 1px rgb(47 49 53 / 3%), 0 1px 2px rgb(47 49 53 / 4%);
  background-color: var(--mainWhite);

  @media (min-width: 768px) {
    max-width: 980px;
    margin: 35px auto;
  }

  @media (min-width: 1200px) {
    max-width: 1150px;
    margin: 70px auto;
  }
`

const HeaderImageContainer = styled.div`
  position: relative;
  min-height: 400px;
  height: 400px;
  width: 100%;
`

const ImageStyle = styled(BackImg)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`

const ContentContainer = styled.div`
  padding-bottom: 70px;
`

const ColumnContainerInner = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`

const TitleWrapper = styled.div`
  padding-top: 150px;
  text-align: center;
  color: var(--mainWhite);

  @media (max-width: 400px) {
    padding-top: 100px;
  }

  h1 {
    font-size: 80px;
    font-weight: 400;
    line-height: 1.1em;
    letter-spacing: 0.1em;
    margin-bottom: 0;

    @media (max-width: 400px) {
      font-size: 40px;
    }
  }

  h6 {
    font-size: 16px;
    line-height: 1.6em;
    font-weight: 700;

    @media (max-width: 400px) {
      font-size: 12px;
    }
  }
`

const ContentContainerInner = styled.div`
  max-width: 100%;
  width: 100%;

  ::before {
    content: "";
    display: table;
  }

  ::after {
    clear: both;
  }

  @media (min-width: 768px) {
    max-width: 980px;
    margin: 0 auto;
    padding: 0 35px;
  }

  @media (min-width: 1200px) {
    max-width: 1150px;
    margin: 0 auto;
    padding: 0 70px;
  }
`

const ContentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 40px 0 0;
  list-style: none;

  ::before {
    content: "";
    display: block;
    overflow: hidden;
  }

  ::after {
    clear: both;
  }
`

const ContentMain = styled.div`
  /* float: left; */
  margin: 0;
  width: 100%;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1200px) {
    /* padding-left: 35px; */
  }
`

const Content = styled.main`
  display: block;
  margin-bottom: 0px;
`

const ContentArticle = styled.article`
  margin-bottom: 35px;

  p {
    margin: 20px 0;
    text-align: justify;
  }
`

const LinkColor = styled.span`
  color: darkorange;
`

const ContentAside = styled.aside`
  margin: 20px 0 0;
  width: 100%;

  @media (min-width: 768px) {
    width: 30%;
    padding-left: 35px;
  }

  @media (min-width: 1200px) {
    padding-left: 35px;
  }
`

const AsidePanel = styled.div`
  background-color: var(--mainGray);
  color: var(--mainBlack);
  padding: 30px;
  border: 1px solid var(--lightGray);

  p {
    margin: 20px 0;
  }

  p:first-child {
    margin: 0 0 20px;
  }

  p:last-child {
    margin: 20px 0 0;
  }
`
const ContactFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 800px) {
    width: 80vw;
  }

  .title {
    margin: 10px 0;
  }
`
export default Contact
