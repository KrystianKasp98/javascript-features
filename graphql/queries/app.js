const { createServer } = require("@graphql-yoga/node");
const { parse } = require("graphql");
let schema = require("./src/schema.graphql.js");
let quries = require("./src/queries.graphql.js");

schema = parse(schema);
quries = parse(schema);

const moviesList = [
  { id: 1, title: "Peaceful Warrior", duration: 3600, director_id: 1 },
  { id: 2, title: "Gone in Sixty Seconds", duration: 60, director_id: 2 },
  { id: 3, title: "Matrix", duration: 404, director_id: 3 },
];

const directors = [
  { id: 1, name: "Victor Salva" },
  { id: 2, name: "H.B. Halicki" },
  { id: 3, name: "Lilly Wachowski" },
];

const server = createServer({
  schema: {
    typeDefs: schema,
    resolvers: {
      Query: {
        directors: () => directors,
        movies: () => moviesList,
        movie: (parent, args, context, info) => {
          return moviesList.find((movie) => movie.id == args.id);
        },
        director: (parent, args, context, info) => {
          return directors.find((movie) => directors.id == args.id);
        },
      },
      Movie: {
        duration: ({ duration }, args) => {
          if (args.unit == "MINUTES") return Math.round(duration / 60);
          if (args.unit == "HOURS") return Math.round(duration / 3600);

          return duration;
        },
        director: (parent, args, context, info) => {
          return directors.find(
            (director) => director.id == parent.director_id
          );
        },
      },
      Director: {
        movies: (parent, args, context, info) => {
          return moviesList.filter((movie) => movie.director_id == parent.id);
        },
      },
    },
  },
});

server.start();