import { graphql } from 'react-relay';

export const pagesQuery = graphql`
  query pagesQuery {
    papers {
      id
    }
  }
`;
