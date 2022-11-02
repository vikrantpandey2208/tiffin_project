const fs = require("fs");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();

const about = require("./about.js");

const GraphQLDate = require("./graphql_date.js");
const tiffin = require("./tiffin.js");

const resolvers = {
  Query: {
    about: about.getMessage,
    tiffinList: tiffin.list,
  },
  Mutation: {
    setAboutMessage: about.setAboutMessage,
    tiffinAdd: tiffin.add,
  },
  GraphQLDate,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync("schema.graphql", "utf-8"),
  resolvers,

  formatError: (error) => {
    console.log(error, "Here");
    return error;
  },
});

async function installHandler(app) {
  const enableCors = (process.env.ENABLE_CORS || "true") === "true";
  await server.start();
  server.applyMiddleware({ app, path: "/graphql", cors: enableCors });
}

module.exports = { installHandler };
