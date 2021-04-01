import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Hero from "../components/hero/hero.component"

import Layout from "../components/layout.component"
import styled from "styled-components"

const query = graphql`
  {
    file(relativePath: { eq: "Guitar_Hero4.jpg" }) {
      cis: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const AboutPage = () => {
  const data = useStaticQuery(query)

  console.log({ data })

  const {
    file: {
      cis: { fluid },
    },
  } = data

  return (
    <Layout>
      <Hero img={fluid} home>
        <AboutSectionStyle>
          <SectionTitleStyle>Über dieGitarre.ch</SectionTitleStyle>
          <AboutParagraphStyle>
            Vor über 25 Jahren wurde dieGitarre von Jury Roten gegründet. Was
            anfänglich eine kleine Werkstatt für klassische Akustikgitarren war,
            ist mittlerweilen zum grössten Fachgeschäft für akustische Gitarren
            herangewachsen. Wir danken an dieser Stelle allen, die seit 1984 bei
            «dieGitarre.ch» mitgearbeitet und mitgeholfen haben unser Geschäft
            zu dem zu machen, was es heute darstellt: Das grösste Fachgeschäft
            für akustische Gitarren in der Schweiz und im Süddeutschen Raum.
          </AboutParagraphStyle>

          <SectionTitleStyle>
            Alles rund um die akustische Gitarre
          </SectionTitleStyle>
          <AboutParagraphStyle>
            In unseren ruhigen und gemütlichen Räumlichkeiten finden Sie eine
            riesige Auswahl an Gitarren in allen Preislagen. Von der Kinder- und
            Schülergitarre bis zur handgebauten Konzertgitarre. Von der
            einfachen Western – bis zur exklusiven Steelstring-Custom. Vom
            Plektrum bis zum Luxuskoffer. Unsere Ausstellungsräume beherbergen
            ca. 300 von unseren Gitarrenbauern kontrollierte und eingestellte
            Instrumente.
          </AboutParagraphStyle>

          <VideoFrameContainer>
            <VideoFrame
              title="dieGitarre.ch"
              src="https://www.youtube.com/embed/Oz5lKvcCogk?feature=oembed"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></VideoFrame>
          </VideoFrameContainer>

          <AboutParagraphStyle>
            Auch als Fachgeschäft sind wir nicht teurer als andere Anbieter. Oft
            sogar günstiger, weil wir sehr kleine Administrationskosten haben.
            Etliche Gitarren importieren wir direkt vom Hersteller. Viele
            Instrumente können wir mit Aktionspreisen anbieten. Seit 1989
            beschäftigen wir uns mit akustischen Gitarren. Mit unserer als
            Gitarrenbauer erworbenen Fachkenntnis und jahrelanger Erfahrung,
            können wir Sie umfassend beraten. Unser Geschäft befindet sich in
            der Altstadt von Winterthur und ist zu Fuss in kürzester Zeit vom
            Bahnhof und den umliegenden Parkhäusern erreichbar.
          </AboutParagraphStyle>
        </AboutSectionStyle>
      </Hero>
    </Layout>
  )
}

export const AboutSectionStyle = styled.section`
  width: var(--smallWidth);
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 4rem 0;
`
export const SectionTitleStyle = styled.h1`
  font-size: 2rem;
  text-transform: none;
  letter-spacing: var(--mainSpacing);
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 1.25rem;
  color: var(--offWhite);
`

export const AboutParagraphStyle = styled.p`
  line-height: 2rem;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  color: var(--mainWhite);
`

const VideoFrameContainer = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  width: 100%;
`

const VideoFrame = styled.iframe`
  width: 500px;
  height: 281px;

  @media (max-width: 600px) {
    width: auto;
  }
`

export default AboutPage
