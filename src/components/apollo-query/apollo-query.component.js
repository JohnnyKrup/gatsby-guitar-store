import React from "react"
import { useQuery } from "@apollo/client"

const ApolloQuery = ({ children, query }) => {
  const { data, loading, error } = useQuery(query, {
    fetchPolicy: "cache-first",
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>

  return children({ data })
}

export default ApolloQuery
