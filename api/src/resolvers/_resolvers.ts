import {paper, papers} from './paper';

/* eslint-disable @typescript-eslint/naming-convention --
   Allow for uppercase Query/Mutation per graphql conventions */

const resolvers = {
  Query: {
    paper,
    papers,
  },
};
/* eslint-enable */

export default resolvers;