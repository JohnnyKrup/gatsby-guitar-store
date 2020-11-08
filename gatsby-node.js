/**
 * documentation
 * https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/#creating-pages
 *
 * this file is needed to setup pages programmatically
 *
 */

const path = require(`path`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  console.log("@@@@@@@@@@@@@@")
  console.log(`You are running this application in ${process.env.NODE_ENV}-mode.`)
  console.log("@@@@@@@@@@@@@@")

  console.log("******************************")
  console.log(page.path)
  console.log("******************************")
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    console.log("########################")
    console.log(page)
    console.log("########################")
    page.matchPath = "/app/*"
    // Update the page.
    createPage(page)
  }
}

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
          categories {
            slug
          }
          brand {
            slug
          }
        }
      }

      all: allStrapiCategory {
        categories: nodes {
          cSlug: slug
          brands {
            bSlug: slug
          }
        }
      }
    }
  `)

  /**
   * Creation of product pages and category lists
   */
  console.log(data)

  data && 
    data.all.categories.forEach(category => {
      category.brands.forEach(brand => {
        createPage({
          path: `shop/${category.cSlug}/${brand.bSlug}`,
          component: path.resolve('./src/templates/brand-lists.template.js'),
          context: {slug: brand.bSlug},
        })
      })
    })

  data &&
    data.allStrapiCategory.categories.forEach(category => {
      createPage({
        path: `shop/${category.slug}`,
        component: path.resolve("./src/templates/category-lists.template.js"),
        context: { slug: category.slug },
      })
    })

  data && 
    data.allStrapiProduct.products.forEach(product => {
      product.categories.forEach(category => {
        createPage({
          path: `shop/${category.slug}/${product.brand.slug}/${product.slug}`,
          component: path.resolve("./src/templates/product.template.js"),
          context: { slug: product.slug },
        })
      })
    })

  // data &&
  //   data.allStrapiProduct.products.forEach(product => {
  //     createPage({
  //       path: product.slug,
  //       component: path.resolve("./src/templates/product.template.js"),
  //       context: { slug: product.slug },
  //     })
  //   })

    
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

  let multiImages = node.gallery_images

  //console.log("node.internal.type: ", node.internal.type)
  if (node.internal.type === "StrapiProduct") {
    //console.log("#####")
    if (multiImages.length > 0) {
      //console.log("images.length: ", multiImages.length)
      multiImages.forEach(image => console.log(image))
      const images = await Promise.all(
        multiImages.map(img =>
          createRemoteFileNode({
            //url: `https://strapi-guitar-store.herokuapp.com${img.url}`,
            // url: `localhost/1337${img.url}`,
            url: `${process.env.GATSBY_API_URL}${img.url}`,
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
