import { graphql } from 'react-relay';

export const assetsQuery = graphql`
  query assetsQuery {
    assets {
      id
      name
      ticker
      createAt
    }
  }
`;
