// @flow

import { graphql } from 'react-relay';

export const featureLatestQuery = graphql`
  query featureLatestQuery {
    featureLatest {
      id
      paper
      promoted
      sponsor
      createAt
    }
  }
`;
