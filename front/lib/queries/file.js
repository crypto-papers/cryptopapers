import { graphql } from 'react-relay';

export const fileQuery = graphql`
  query fileQuery($id: ID!) {
    file(id: $id) {
      id
      coverImage
      filename
      latest
      pageNum
      pubDate
      source
      version
      createAt
    }
  }
`;
