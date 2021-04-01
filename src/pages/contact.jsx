import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout.component"
import BreadCrumb from "../components/breadcrumb/breadcrumb.component"
import FormInput from "../components/form-input/form-input.component"
import FormTextarea from "../components/form-input/form-textarea.component"
import CustomButton from "../components/custom-button/custom-button.component"

import {
  PageStyle,
  HeaderImageContainer,
  ImageStyle,
  ContentContainer,
  ColumnContainerInner,
  TitleWrapper,
  ContentContainerInner,
  ContentGrid,
  ContentMain,
  Content,
  ContentArticle,
  ContentAside,
  AsidePanel,
  ContactFormStyle,
} from "../styles/pages.styles"

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

export default Contact
