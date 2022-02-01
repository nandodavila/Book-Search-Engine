const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Books {
    _id: ID!
    authors: String!
    description: String!
    password: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }


  type Query {
    user: [User]
    books: [Books]
  }

`;

module.exports = typeDefs;
