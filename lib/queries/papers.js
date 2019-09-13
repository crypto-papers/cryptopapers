// @flow

import { graphql } from 'react-relay';

export const papersQuery = graphql`
  query papersQuery {
    papers {
      id
      description
      excerpt
      latestVersion
      prettyId
      title
      createAt
    }
  }
`;
