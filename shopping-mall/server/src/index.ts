import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import resolvers from "./resolvers";

(async () => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  });

  const port = 8000;
  const app = express();
  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
    cors: {
      origin: ["http://localhosts:3000", "https://studio.apollographql.com"],
      credentials: true,
    },
  });
  await app.listen(port, async () => {
    console.log(`server listening on ${port}`);
  });
})();
