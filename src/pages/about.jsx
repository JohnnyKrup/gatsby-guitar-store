import React from "react"
import Hero from "../components/hero/hero.component"

import Layout from "../components/layout.component"
import {
  AboutSectionStyle,
  SectionTitleStyle,
  AboutParagraphStyle,
} from "../styles/about.styles"

const AboutPage = () => {
  return (
    <Layout>
      <Hero home={true}>
        <AboutSectionStyle>
          <SectionTitleStyle>Über dieGitarre.ch</SectionTitleStyle>
          <AboutParagraphStyle>
            Vor über 25 Jahren wurde dieGitarre von Jury Roten gegründet. Was
            anfänglich eine kleine Werkstatt für klassiche Akustikgitarren war,
            ist mittlerweilen zum grössten Fachgeschäft für akustische Gitarren
            herangewachsen. Wir danken an dieser Stelle allen, die seit 1984 bei
            «dieGitarre.ch» mitgearbeitet und mitgeholfen haben unser Geschäft
            zu dem zu machen, was es heute darstellt: Das grösste Fachgeschäft
            für akustische Gitarren in der Schweiz und im Süddeutschen Raum.
          </AboutParagraphStyle>
        </AboutSectionStyle>
      </Hero>
    </Layout>
  )
}

export default AboutPage
