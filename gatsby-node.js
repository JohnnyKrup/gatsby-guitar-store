/**
 * documentation
 * https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/#creating-pages
 *
 * this file is needed to setup pages programmatically
 *
 */

const path = require(`path`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allStrapiCategory {
        categories: nodes {
          slug
        }
      }

      allStrapiProduct {
        products: nodes {
          slug
        }
      }
    }
  `)

  console.log(data)

  data &&
    data.allStrapiCategory.categories.forEach(category => {
      createPage({
        path: category.slug,
        component: path.resolve("./src/templates/category-lists.template.js"),
        context: { slug: category.slug },
      })
    })

  data &&
    data.allStrapiProduct.products.forEach(product => {
      createPage({
        path: product.slug,
        component: path.resolve("./src/templates/product.template.js"),
        context: { slug: product.slug },
      })
    })
}

/**
 * Workaround to create a node that contains the strapi multiple images
 * https://medium.com/@iliashaddad/how-to-gatsby-image-in-strapi-multiple-image-4b7b3da600e6
 */
exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
}) => {
  const { createNode } = actions

  let multiImages = node.images

  //console.log("node.internal.type: ", node.internal.type)
  if (node.internal.type === "StrapiProduct") {
    //console.log("#####")
    if (multiImages.length > 0) {
      //console.log("images.length: ", multiImages.length)
      multiImages.forEach(image => console.log(image))
      const images = await Promise.all(
        multiImages.map(img =>
          createRemoteFileNode({
            url: `http://localhost:1337${img.url}`,
            parentNodeId: node.id,
            store,
            cache,
            createNode,
            createNodeId,
          })
        )
      )
      multiImages.forEach((image, idx) => {
        image.localFile___NODE = images[idx].id
      })
    }
  }
}
