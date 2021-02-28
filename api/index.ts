import { ApolloServer } from 'apollo-server';

import db from './mockdata';
import resolvers from './src/resolvers/_resolvers';
import typeDefs from './src/typeDefs';

const server = new ApolloServer({ context: { db }, resolvers, typeDefs });

server
  .listen()
  .then(({ url }: {url: string}) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch( err => console.error(err));
