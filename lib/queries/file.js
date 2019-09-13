// @flow

import { graphql } from 'react-relay';

export const fileQuery = graphql`
  query fileQuery($id: ID!) {
    file(id: $id) {
      id
      coverImage
      latest
      pageNum
      pubDate
      source
      url
      version
      createAt
    }
  }
`;
