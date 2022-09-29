// define types for Query, String! means that type of returned value must be string
// String without "!" allows to return null or string
// movies- arr of Movie objects
// type Movie - define Movie object
// movie - one movie which has id as passed as argument
module.exports = `
type Query {
  hello: String!
  movies: [Movie!]
  movie(id: ID!): Movie
  song(id: ID!): Song
  directors: [Director!]
  director(id: ID!): Director
}

type Mutation {
  createMovie(title: String!): Movie!
}

interface Media {
  id: ID!
  title: String!
}

type Movie{
  id: ID!
  title: String!
  director: Director!
}

type Director {
  id: ID!
  name: String!
  movies: [Movie!]
}

type Song{
  id: ID!
  title: String!
  artist: String!
}
`;
