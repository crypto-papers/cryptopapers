import { graphql } from 'react-relay';

export const currenciesQuery = graphql`
  query currenciesQuery {
    currencies {
      id
      name
      ticker
    }
  }
`;
