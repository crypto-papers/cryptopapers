// @flow

import { graphql } from 'react-relay';

export const paperByPidQuery = graphql`
  query paperByPidQuery($prettyId: Int!) {
    paperByPid(prettyId: $prettyId) {
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
