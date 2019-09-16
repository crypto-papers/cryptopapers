// @flow

import { graphql } from 'react-relay';

export const paperQuery = graphql`
  query paperQuery($id: ID!) {
    paper(id: $id) {
      id
      description
      excerpt
      latestVersion
      prettyId
      subTitle
      title
      createAt
    }
  }
`;
