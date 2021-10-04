import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import Koa from 'koa';
import Router from '@koa/router';
import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  sendResult,
  shouldRenderGraphiQL,
} from 'graphql-helix';

import db from './mockdata';
import resolvers from './resolvers/_resolvers';
import typeDefs from './typeDefs';
import uploadFile from './utils/google-cloud';

const PORT = 4000;

const app = new Koa();

app.use(bodyParser());

app.use(async ctx => {
  const request = {
    body: ctx.request.body,
    headers: ctx.req.headers,
    method: ctx.request.method,
    query: ctx.request.query,
  };

  if (shouldRenderGraphiQL(request)) {
    ctx.body = renderGraphiQL({});
  } else {
    const { operationName, query, variables } = getGraphQLParameters(request);

    const result = await processRequest({
      operationName,
      query,
      variables,
      request,
      typeDefs,
    });

    sendResult(result, ctx.res);
  }
});

// Const router = new Router();

// router.post('/upload', ctx => {
//   const req = <IRequest>ctx.request;

//   const file = req.files?.file;

//   if (file) {
//     uploadFile(file.path, file.name)
//       .then(() => console.log('Success'))
//       .catch(err => console.error(err));
//   }
// });

// app.use(cors());
// app.use(router.allowedMethods());

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at ${PORT}`));

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
