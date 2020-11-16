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
  plugins: [
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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,    
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL,
        //apiURL: 'https://strapi-guitar-store.herokuapp.com',
        queryLimit: 5000, // Default to 100
        contentTypes: [`brand`, `category`, `product`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //    identifier: "Billi",
        //    password: "123456",
        //  },
      },
    },
  ],
}
