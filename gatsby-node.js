/**
 * documentation
 * https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/#creating-pages
 *
 * this file is needed to setup pages programmatically
 *
 */

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allStrapiCategory {
        categories: nodes {
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
}

/**
 * Workaround to create a node that contains the strapi multiple images
 * https://medium.com/@iliashaddad/how-to-gatsby-image-in-strapi-multiple-image-4b7b3da600e6
 */
// exports.onCreateNode = async ({
//   node, actions, store, cache, createNodeId
// }) => {
//   const {createNode} = actions

//   let multiImages = node.images

//   if(node.internal.type === 'allStrapiProduct'){
//     if(multiImages.length > 0){
//       multiImages.forEach(image => console.log(image))
//       const images = await Promise.all(
//         multiImages.map(img => createRemoteFileNode({
//           url: `http://localhost:1337/${img.url}`,
//           parentNodeId: node.id,
//           store,
//           cache,
//           createNode,
//           createNodeId
//         }))
//       )
//       multiImages.forEach((image, idx) => {
//         image.localFile___NODE = images[idx].id
//       })
//     }
//   }
// }
