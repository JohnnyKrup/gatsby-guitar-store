import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout.component"
import BreadCrumb from "../components/breadcrumb/breadcrumb.component"
import GatsbyImage from "gatsby-image"

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
  GalleryContainer,
  ImageContainer,
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
    contract: file(relativePath: { eq: "Reparaturpreisliste.pdf" }) {
      publicURL
    }
    allFile(filter: { relativeDirectory: { eq: "workshop" } }) {
      galleryPhotos: nodes {
        cis: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

const Workshop = () => {
  const {
    file: {
      cis: { fluid },
    },
    contract: { publicURL },
    allFile: { galleryPhotos },
  } = useStaticQuery(query)

  // const photos = galleryPhotos.map(photo => {
  //   console.log({ photo })
  //   return photo.childImageSharp.fluid
  // })

  // console.log({ photos })

  return (
    <Layout bgColor="#ececec">
      <BreadCrumb title="Reparaturen" />

      <PageStyle>
        <HeaderImageContainer>
          <ImageStyle fluid={fluid}>
            <ColumnContainerInner>
              <TitleWrapper>
                <h6>Lass deine Gitarre von Profis reparieren</h6>
                <h1>Reparaturen</h1>
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
                      Reparaturen führen wir in unserer Werkstatt an fast allen
                      Saiteninstrumenten in der Regel innert 2 bis 3 Wochen aus
                      (Gitarren, Mandolinen u.a.m.). Wir erstellen Expertisen
                      und beraten Sie bez. Reparatur, Wertverlust oder Kauf
                      eines neuen Instrumentes.
                    </p>
                    <GalleryContainer>
                      {galleryPhotos &&
                        galleryPhotos.map((photo, idx) => {
                          const {
                            cis: { fluid },
                          } = photo
                          return (
                            <ImageContainer key={idx}>
                              <GatsbyImage fluid={fluid} />
                            </ImageContainer>
                          )
                        })}
                    </GalleryContainer>
                    <p>
                      <strong>Spezialanfertigungen:</strong>
                      <br />
                      Wir lassen für Sie aber auch bei anderen Gitarrenbauern
                      Instrumente spezialanfertigen:
                    </p>
                    <PageList>
                      <PageListItem>Hals</PageListItem>
                      <PageListItem>Saitenabstand</PageListItem>
                      <PageListItem>Griffbrettbreite</PageListItem>
                      <PageListItem>div. Mensurgrössen</PageListItem>
                      <PageListItem>Holzwahl</PageListItem>
                      <PageListItem>Verzierungen</PageListItem>
                    </PageList>
                    <p>
                      Wir wünschen dir viel Spass mit deiner neu reparierten
                      Gitarre!
                    </p>
                  </ContentArticle>
                </Content>
              </ContentMain>
              <ContentAside>
                <AsidePanel>
                  <p>
                    Willst du dein Instrument wieder einaml einstellen oder
                    kontrollieren lassen?
                  </p>
                  <p>Ist dir eine fachkundige Beratung wichtig?</p>
                  <p>
                    Die Reparaturliste für die Schätzung der ausstehenden Kosten
                    kannst du{" "}
                    <a href={publicURL} target="_blank" rel="noreferrer">
                      <LinkColor>hier</LinkColor>
                    </a>{" "}
                    anschauen.
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

export default Workshop
