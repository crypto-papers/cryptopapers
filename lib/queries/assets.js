import { graphql } from 'react-relay';

export const assetsQuery = graphql`
  query assetsQuery {
    currencies {
      id
      name
      ticker
    }
  }
`;
