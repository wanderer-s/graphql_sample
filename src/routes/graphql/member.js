const { gql } = require('apollo-server-express')
const {getMember} = require('../../controller/member')

const typeDefs = gql`
  type Query {
    member(id: ID): Member
    feet(id: ID): Feet
  }

  type Member {
      _id: ID
      name: Name
      socialType: String
      socialId : String
      loginId : String
      gender : String
      averageSize: Int
      agreements: [Agreement]
      lastAccessedAt: String
      createdAt: String
      updatedAt: String
      feets: [Feet]
  }

  type Feet {
    feetId: ID!
    leftLength: Int
    leftWidthBall: Int
    leftHeight: Int
    rightLength: Int
    rightWidthBall: Int
    rightHeight: Int
    averageSize: Int!
    gender: String
    nickname: String!
    measuredAt: String!
    activated: Boolean!
  }

  type Agreement {
    type: String
    name: String
    agreed: Boolean
    uri: String
    date: String
  }

  type Name {
    ko: String!
  }
  `
  
const resolvers = {
  Query: {
    member: async (parant, args, context, info) => {
      return await getMember(args.id)
    }
  }
}

module.exports = {
  typeDefs,
  resolvers
}