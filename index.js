"use strict"

console.log("GraphQL Server")

const { graphql, buildSchema } = require("graphql")

const schema = buildSchema(`
type Schema {
  query: Query
}

type Query {
  id: ID,
  title: String,
  description: String,
  duration: Int,
  completed: Boolean
}
`)

const resolvers = {
  id: () => "1",
  title: () => "Hello Earth",
  description: () => "A life-changing documentary serius about Earth.",
  duration: () => 365,
  completed: () => true
}

const query = `
query callMovie {
  id
  title
  description
  duration
  completed
}
`

graphql(schema, query, resolvers)
  .then(result => console.log(result))
  .catch(error => console.error(error))
