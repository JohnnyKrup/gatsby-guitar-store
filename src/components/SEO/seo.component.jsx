import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const seoQuery = graphql`
  {
    site {
      siteMetadata {
        siteDescription: description
        siteUrl
        siteTitle: title
        author {
          authorName: name
        }
        organization {
          name
          url
          logo
        }
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const {
    site: {
      siteMetadata: {
        siteDescription,
        siteUrl,
        siteTitle,
        author: { authorName },
      },
    },
  } = useStaticQuery(seoQuery)

  return (
    <Helmet>
      <title>{title || siteTitle}</title>
      <meta name="description" content={description || siteDescription} />

      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"
      />
    </Helmet>
  )
}

export default SEO
