const { createServer } = require("@graphql-yoga/node");
const { parse } = require("graphql");
let schema = require('./src/schema.graphql.js');

schema = parse(schema); // not sure if required
const randomGreetings = ['hi there', 'welcome', 'it s pleasure to meet you', 'have a nice day'];

// director_id is primary key for directors
const moviesList = [
  { id: 1, title: "Peaceful Warrior", duration: 0, director_id: 1 },
  { id: 2, title: "Gone in Sixty Seconds", duration: 60, director_id: 2 },
  { id: 3, title: "Matrix", duration: 404, director_id: 3 },
  { id: 4, title: "Matrix 2d", duration: 144, director_id: 3 },
  { id: 5, title: "bejz", duration: 120, director_id: 1 },
];

const directors = [
  { id: 1, name: "Victor Salva" },
  { id: 2, name: "H.B. Halicki" },
  { id: 3, name: "Lilly Wachowski" },
];

const songsList = [
  { id: 1, title: "Heart of courage" },
  { id: 2, title: "For the Win" },
  { id: 3, title: "Immortal" },
];


// if we use basic scalar types(ID, Strng...), we don't need declare resolvers for these types but for object types like Director it's required

const getRandomGreeting=()=> randomGreetings[Math.floor(Math.random()*randomGreetings.length)]

const server = createServer({
  schema: {
    typeDefs: schema,
    resolvers: {
      Query: {
        hello: () => getRandomGreeting(),
        directors: () => directors,
        movies: () => moviesList, // returns list of movies
        movie: (parent, args, context, info) => {
          // console.log(context); //exist untill request exists, returns info about querry
          // console.log(info); // contains info about query
          return moviesList.find((movie) => movie.id == args.id);
        },
        song: (parent, args) => songsList.find((song) => song.id == args.id),
        director: (parent, args, context, info) => {
          return directors.find((movie) => directors.id == args.id);
        },
      },
      // set relations between Movie and Director
      Movie: {
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
      Mutation: {
        createMovie: (parent, args) => {
          const id = moviesList.length + 1;
          console.log(args);
          const movie = { id: id, title: args.title };
          moviesList.push(movie);
          return movie;
        },
      },
    },
  },
});

server.start();
