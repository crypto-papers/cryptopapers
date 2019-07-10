import { graphql } from 'react-relay';

export const pagesQuery = graphql`
  query pagesQuery {
    paper {
      id
    }
  }
`;
