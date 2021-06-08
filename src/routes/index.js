// const express = require('express');
// const router = express.Router();
// const { ApolloServer } = require('apollo-server-express');
const member = require('./graphql/member')

const typeDefs = [
  member.typeDefs
]

const resolvers = [
  member.resolvers
]

// const server = new ApolloServer({ typeDefs, resolvers });

// const app = express();
// server.applyMiddleware({ app });

// app.listen({ port: 4000 }, () =>
//   console.log('Now browse to http://localhost:4000' + server.graphqlPath)
// );
module.exports = {typeDefs, resolvers}
