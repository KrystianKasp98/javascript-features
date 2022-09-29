module.exports = `
type Query {
  movies: [Movie!]
  movie(id: ID!): Movie
  directors: [Director!]
  director(id: ID!): Director
} 

type Movie {
  id: ID!
  title: String!
  duration(unit: TimeUnit = SECONDS): Int!
  director: Director!
}

type Director {
  id: ID!
  name: String!
  movies: [Movie!]
}

enum TimeUnit {
  SECONDS
  MINUTES
  HOURS
}
`;
