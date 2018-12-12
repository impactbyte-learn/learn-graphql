"use strict"

console.log("GraphQL Server")

const { graphql, buildSchema } = require("graphql")

const schema = buildSchema(`
type Schema {
  query: Query
}

type Query {
  hello: String
}
`)

const resolvers = {
  hello: () => "Hello World"
}

const query = `
query callHelloWorld {
  hello
}
`

graphql(schema, query, resolvers)
  .then(result => console.log(result))
  .catch(error => console.error(error))
