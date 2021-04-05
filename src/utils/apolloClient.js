import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  HttpLink,
} from "@apollo/client"
import fetch from "cross-fetch"

const link = createHttpLink({
  fetch,
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
})

export const apolloClient = new ApolloClient({
  uri: link,
  cache: new InMemoryCache(),
})

export const aClient = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
})

export const apolloEmptiClient = ""

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
    fetch,
  }),
  cache: new InMemoryCache(),
})
