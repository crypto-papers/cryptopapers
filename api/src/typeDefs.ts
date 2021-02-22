import { mergeTypeDefs } from '@graphql-tools/merge';

import _schema from './schema/_schema.graphql';
import asset from './schema/asset.graphql';
import author from './schema/author.graphql';
import feature from './schema/feature.graphql';
import file from './schema/file.graphql';
import paper from './schema/paper.graphql';
import user from './schema/user.graphql';

export default mergeTypeDefs([_schema, asset, author, feature, file, paper, user]);
