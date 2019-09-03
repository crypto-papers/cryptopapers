// @flow

import { graphql } from 'react-relay';

export const papersQuery = graphql`
  query papersQuery {
    papers {
      id
      # author
      # description
      excerpt
      title
      createAt
    }
  }
`;
