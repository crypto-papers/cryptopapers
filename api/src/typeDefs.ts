import { join } from 'path';

import type { GraphQLSchema } from 'graphql';
import { JsonFileLoader } from '@graphql-tools/json-file-loader';
import { loadSchema } from '@graphql-tools/load';

/**
 * Converts the generated introspection schema into an executable GraphQL schema.
 * @returns {GraphQLSchema}
 */
const generateSchema = async (): Promise<GraphQLSchema> => {
  const jsonSchema = await loadSchema(join(__dirname, './generated/graphql.schema.json'), {
    loaders: [new JsonFileLoader()],
  });

  return jsonSchema;
};

export default generateSchema;
