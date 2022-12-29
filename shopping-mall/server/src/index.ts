import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import resolvers from "./resolvers";
import { DBField, readDB } from "./dbController";

(async () => {
  const port = 8000;

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  });

  const app = express();
  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
    cors: {
      origin: ["http://localhost:5173", "https://studio.apollographql.com"],
      credentials: true,
    },
  });
  await app.listen({ port });

  console.log(`server listening on ${port}...`);
})();
