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

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    // Update the page.
    createPage(page)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allStrapiBrand {
        brands: nodes {
          slug
          title
          isActive
          categories {
            isActive
            slug
          }
        }
      }

      allStrapiCategory {
        categories: nodes {
          slug
          isActive
        }
      }

      allStrapiProduct {
        products: nodes {
          slug
          brand {
            slug
            isActive
          }
          category {
            slug
            isActive
          }
        }
      }
    }
  `)

  /**
   * Creation of product pages,  category & brand lists
   */
  // Brand Pages
  data &&
    data.allStrapiBrand.brands.forEach(brand => {
      if (brand.isActive) {
        brand.categories.forEach(cat => {
          console.log({ cat })
          if (cat.isActive) {
            createPage({
              path: `shop/${cat.slug}/${brand.slug}`,
              component: path.resolve(
                "./src/templates/brand-lists.template.js"
              ),
              context: {
                slug: brand.slug,
                brandTitle: brand.title,
                categorySlug: cat.slug,
              },
            })
          }
        })
      }
    })

  // Category Pages
  data &&
    data.allStrapiCategory.categories.forEach(category => {
      if (category.isActive) {
        createPage({
          path: `shop/${category.slug}`,
          component: path.resolve("./src/templates/category-lists.template.js"),
          context: { slug: category.slug },
        })
      }
    })

  // Product Pages
  data &&
    data.allStrapiProduct.products.forEach(product => {
      if (product.brand.isActive && product.category.isActive) {
        createPage({
          path: `shop/${product.category.slug}/${product.brand.slug}/${product.slug}`,
          component: path.resolve("./src/templates/product.template.js"),
          context: { slug: product.slug },
        })
      }
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

  let multiImages = node.gallery_images

  //console.log("node.internal.type: ", node.internal.type)
  if (node.internal.type !== null && node.internal.type === "StrapiProduct") {
    //console.log("#####")
    if (multiImages.length > 0) {
      //console.log("images.length: ", multiImages.length)
      // multiImages.forEach(image => console.log(image))
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
      // multiImages.forEach((image, idx) => {
      //   image.localFile___NODE = images[idx].id
      // })

      multiImages.forEach((image, idx) => {
        image.multipleFiles___NODE = images[idx].id
      })
    }
  }
}
