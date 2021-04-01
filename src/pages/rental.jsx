import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout.component"
import BreadCrumb from "../components/breadcrumb/breadcrumb.component"

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
  LinkColor,
  ContentAside,
  AsidePanel,
} from "../styles/pages.styles"

const query = graphql`
  {
    file(relativePath: { eq: "Guitar_Hero3.jpg" }) {
      cis: childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    contract: file(relativePath: { eq: "Mietvertrag-dieGitarre.ch_2021.pdf" }) {
      publicURL
    }
  }
`

const Rental = () => {
  const {
    file: {
      cis: { fluid },
    },
    contract: { publicURL },
  } = useStaticQuery(query)

  return (
    <Layout bgColor="#ececec">
      <BreadCrumb title="Miete" />

      <PageStyle>
        <HeaderImageContainer>
          <ImageStyle fluid={fluid}>
            <ColumnContainerInner>
              <TitleWrapper>
                <h6>Noch nicht sicher, welche Gitarre zu dir passt?</h6>
                <h1>Miete</h1>
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
                      Wir verfügen über ein Lager von mehr als 300 Mietgitarren
                      in allen Mensurgrössen von 40cm bis 65cm. Die günstigen
                      monatlichen Mieten und dazu eine grosszügige
                      Mietanrechnung beim Neukauf eines Instruments sollte eine
                      überaus attraktive Variante für Sie darstellen.
                    </p>
                    <p>
                      Ist ein Kind noch im Wachstum, ist es sinnvoll, zuerst ein
                      kleineres Instrument zu mieten, um beim Kauf dann auf die
                      nächstgrössere, passende Mensur umzusteigen. So kann das
                      Instrument nach der Hand und der Grösse des Kindes
                      abgestimmt werden. Sie können im Verlauf der Miete die
                      Grösse des Instrumentes auch wechseln. So hat Ihr Kind
                      immer die optimale Mensurgrösse der Gitarre.
                    </p>
                    <p>
                      Auch Erwachsene können bei uns ihre erste Gitarre mieten
                      um herauszufinden, ob ihnen das Gitarrenspiel überhaupt
                      zusagt.
                    </p>
                    <p>
                      Wir wünschen Ihnen viel Spass und Ausdauer beim Einstieg
                      in dieses neue Abenteuer!
                    </p>
                    <p>
                      Den Mietvertrag kannst du{" "}
                      <a href={publicURL} target="_blank" rel="noreferrer">
                        <LinkColor>hier</LinkColor>
                      </a>{" "}
                      anschauen.
                    </p>
                  </ContentArticle>
                </Content>
              </ContentMain>
              <ContentAside>
                <AsidePanel>
                  <p>
                    Wir vermieten Gitarren in verschiedenen Grössen für Kinder,
                    Schüler und Erwachsene zu folgenden Konditionen:
                  </p>
                  <p>
                    <strong>Monatliche Miete: CHF 25.-</strong>
                    <br /> Mindestmiete 6 Monate
                  </p>
                  <p>
                    <strong>Verlängerung: CHF 25.- / Monat</strong>
                    <br /> jeweils 3 oder 6 Monate
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

export default Rental
