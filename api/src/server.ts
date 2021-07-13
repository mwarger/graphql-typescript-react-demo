require('dotenv').config();
import { ApolloServer } from 'apollo-server-express';
import MovieDataSource from './datasources/movies';

import typeDefs from './schema';
import resolvers from './resolvers/resolvers';
import express from 'express';
const app = express();

export interface Context {
  dataSources: {
    movieDataSource: MovieDataSource;
  };
}

const dataSources = (): Context['dataSources'] => ({
  movieDataSource: new MovieDataSource(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  dataSources,
});

server.applyMiddleware({ app });

app.listen(process.env.PORT || 4000, () => {
  console.log(`graphQL running at port 4000`);
});
