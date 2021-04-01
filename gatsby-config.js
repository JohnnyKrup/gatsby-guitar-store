/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "dieGitarre.ch",
    description:
      "Die grösste Auswahl an akustischen Gitarren in der Schweiz, seit über 25 Jahren.",
    siteUrl: "localhost:8000",
    author: { name: "Franco" },
    organization: {
      name: "dieGitarre.ch SA",
      url: "localhost:8000",
      logo: `${__dirname}/src/images/LogoClose_128.svg`,
    },
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `datafiles`,
        path: `${__dirname}/src/datafiles`,
      },
    },
    {
      resolve: "gatsby-plugin-snipcart-advanced",
      options: {
        publicApiKey: process.env.GATSBY_SNIPCART_APIKEY,
        defaultLang: "de",
        currency: "chf",
        openCartOnAdd: true,
        useSideCart: true,
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "products",
        engine: "flexsearch",
        engineOptions: "speed",
        query: `
          {
            allStrapiProduct {
              nodes {
                slug
                title
                category {
                  slug
                }
                brand {
                  slug
                }                
              }
            }
          }
        `,
        ref: "slug",
        index: ["title"],
        store: ["title", "path"],
        normalizer: ({ data }) =>
          data.allStrapiProduct.nodes.map(prod => ({
            slug: prod.slug,
            title: prod.title,
            path: `/shop/${prod.category.slug}/${prod.brand.slug}/${prod.slug}`,
          })),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL,
        queryLimit: 5000, // Default to 100
        contentTypes: [`brand`, `category`, `product`, `employee`, `menu`],
      },
    },
  ],
}
