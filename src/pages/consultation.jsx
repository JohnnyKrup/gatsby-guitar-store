import React from "react"
import { useStaticQuery } from "gatsby"

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
  ContentAside,
  AsidePanel,
  PageList,
  PageListItem,
} from "../styles/pages.styles"

const query = graphql`
  {
    file(relativePath: { eq: "Guitar_Hero5.jpg" }) {
      cis: childImageSharp {
        fluid(grayscale: false) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Consultation = () => {
  const data = useStaticQuery(query)
  const {
    file: {
      cis: { fluid },
    },
  } = data

  return (
    <Layout bgColor="#ececec">
      <BreadCrumb title="Beratung & Grantie" />

      <PageStyle>
        <HeaderImageContainer>
          <ImageStyle fluid={fluid}>
            <ColumnContainerInner>
              <TitleWrapper>
                <h6>
                  Damit du sicher bist, dass du das passende Intrument bekommst
                </h6>
                <h1>Beratung</h1>
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
                      <strong>
                        Eine gute Beratung gehört zu unserer Stärke
                      </strong>
                    </p>
                    <PageList>
                      <PageListItem>
                        Möchten Sie sich ausführlich über Qualitätsunterschiede
                        und Preise beraten lassen?
                      </PageListItem>
                      <PageListItem>
                        Suchen Sie eine günstige Aktionsgitarre?… eine
                        handgebaute Konzertgitarre?… oder eine
                        Custom-Steelstring?
                      </PageListItem>
                      <PageListItem>
                        Haben Sie kleine Hände oder Probleme mit der linken
                        Hand?
                      </PageListItem>
                      <PageListItem>
                        Wollen Sie Ihre Gitarre klangverstärken lassen? … oder
                        einfach nur mal reinschauen und sich informieren?
                      </PageListItem>
                    </PageList>
                    <p>
                      Wir nehmen uns immer Zeit für Ihre Anliegen und haben als
                      Gitarrenbauer genügend Erfahrung, Ihnen mit Rat und Tat
                      zur Seite zu stehen. Wenn Sie eine Gitarre suchen nehmen
                      wir uns so viel Zeit, wie Sie brauchen, um mit Ihnen das
                      geeignete Instrument in der passenden Preislage zu finden.
                      Viele Gitarrenlehrer aus der ganzen Schweiz schicken ihre
                      Schüler zu uns, und viele Musiker zählen weltweit zu
                      unseren Kunden.
                    </p>
                    <PageList>
                      <PageListItem>
                        Garantie: Mindestens 2 Jahre auf alle bei uns neu
                        gekauften Produkte
                      </PageListItem>
                      <PageListItem>
                        Service: Ein guter Service ist bei uns
                        selbstverständlich
                      </PageListItem>
                    </PageList>
                  </ContentArticle>
                </Content>
              </ContentMain>
              <ContentAside>
                <AsidePanel>
                  <p>
                    Hier wirst du nicht von Verkäufern, sondern von &nbsp;
                    <strong>Musikern</strong> beraten
                  </p>

                  <p>
                    Möchten Sie sicher sein, dass Sie das richtige Instrument
                    gewählt haben?
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

export default Consultation
