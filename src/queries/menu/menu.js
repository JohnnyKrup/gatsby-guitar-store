import { gql } from "@apollo/client"

const MENU_QUERY = gql`
  query Menus {
    menus {
      name
      title
      categories {
        slug
        title
        image {
          url
          name
          formats
        }
        isImageLarge
        products {
          slug
          title
          description
          price
          featured
          soldBadge
          orderedBadge
          newBadge
        }
      }

      brands {
        slug
        title
        brandSortID
        brandInfo
        products {
          slug
          title
          description
          price
          featured
          soldBadge
          orderedBadge
          newBadge
        }
      }
    }
  }
`
export default MENU_QUERY
