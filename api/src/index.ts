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

app.use(koaBody({ formLimit: '10mb', multipart: true }));

router.post('/upload', ctx => {
  const req = <IRequest>ctx.request;

  const file = req.files?.file;

  if (file) {
    uploadFile(file.path, file.name)
      .then(() => console.log('Success'))
      .catch(err => console.error(err));
  }
});

app.use(cors());
app.use(router.routes()).use(graphQL.getMiddleware());
app.use(router.allowedMethods());

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${graphQL.graphqlPath}`)
);

interface IFile {
  size: number;
  path: string;
  name: string;
  type: string;
  lastModifiedDate?: Date;
  hash?: string;
  toJSON: () => unknown;
}

interface IRequest extends Koa.BaseRequest {
  body?: unknown;
  files?: {
    file?: IFile;
  };
}
