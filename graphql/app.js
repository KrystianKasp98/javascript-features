const { createServer } = require("@graphql-yoga/node");
const { parse } = require("graphql");
let schema = require('./src/schema.graphql.js');

schema = parse(schema); // not sure if required
const randomGreetings = ['hi there', 'welcome', 'it s pleasure to meet you', 'have a nice day'];

const getRandomGreeting=()=> randomGreetings[Math.floor(Math.random()*randomGreetings.length)]

const server = createServer({
  schema: {
    typeDefs: schema,
    resolvers: {
      Query: {
        hello: () => getRandomGreeting(),
      },
    },
  },
});

server.start();
