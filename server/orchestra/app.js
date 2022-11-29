if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const user = require("./schemas/user");
const item = require("./schemas/item");

const server = new ApolloServer({
  typeDefs: [user.typeDefs, item.typeDefs],
  resolvers: [user.resolvers, item.resolvers],
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`server ready at: ${url}`);
});
