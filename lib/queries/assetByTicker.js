// @flow

import { graphql } from 'react-relay';

export const assetByTickerQuery = graphql`
  query assetByTickerQuery($ticker: String!) {
    assetByTicker(ticker: $ticker) {
      id
      logo
      name
      ticker
      createAt
    }
  }
`;
