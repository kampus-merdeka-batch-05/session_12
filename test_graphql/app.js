const express = require("express")
const app = express()
const PORT = 3000
const axios = require("axios")

const { graphqlHTTP } = require("express-graphql")
const { buildSchema } = require("graphql")

// schema base
const schema = buildSchema(
  `
    type company {
      name: String
      bs: String
    }

    type user {
      id: ID
      name: String
      email: String
      company: company
    }

    type responseAddUser {
      id: ID
      name: String
      email: String
    }

    input inputUser{
      name: String!
      email: String!
    }

    type Query {
      hello: String
      getAllUsers: [user]
      getUserById(id: Int): user
    }

    type Mutation {
      addUser(data: inputUser ) :responseAddUser
    }
  `
)

const root = {
  hello: () => {
    return "Hello from graphql"
  },

  getAllUsers: async () => {
    try {

      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")

      return data
      
    } catch (error) {
      return error
    }
  },

  getUserById: async (args) => {
    try {

      const { id } = args

      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/" + id)

      return data
      
    } catch (error) {
      return error
    }
  },

  addUser: (args) => {
    try {
      const {
        data
      } = args

      // insert into database

      return {
        id: 15,
        name: data.name,
        email: data.email
      }

    } catch (error) {
      return error
    }
  }
}

app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  context: ({req}) => {
    // token / authorization
  }
}))

app.listen(PORT, () => {
  console.log("This app running on port: ", PORT);
})