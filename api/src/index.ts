import { ApolloServer } from 'apollo-server-koa';
import cors from '@koa/cors';
import Koa from 'koa';
import koaBody from 'koa-body';
import Router from '@koa/router';

import db from './mockdata';
import resolvers from './resolvers/_resolvers';
import typeDefs from './typeDefs';
import uploadFile from './utils/google-cloud';

const app = new Koa();

const router = new Router();

const graphQL = new ApolloServer({ context: { db }, resolvers, typeDefs });

router.post('/upload', koaBody({ formLimit: '100mb', multipart: true }), ctx => {
  const req = ctx.request.body;

  console.log(req);

  // UploadFile('Hello World!');
});

app.use(cors());
app.use(router.routes()).use(graphQL.getMiddleware());
app.use(router.allowedMethods());

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${graphQL.graphqlPath}`)
);
