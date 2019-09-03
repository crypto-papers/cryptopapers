// @flow

import { graphql } from 'react-relay';

export const paperQuery = graphql`
  query paperQuery($id: ID!) {
    paper(id: $id) {
      id
      # author
      description
      excerpt
      title
      createAt
    }
  }
`;
