// @flow

import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Featured from 'components/Featured/Featured';
import Layout from 'components/Layout/Layout';
import Loader from 'components/Loader/Loader';
import ResultsGrid from 'components/ResultsGrid/ResultsGrid';

import environment from 'schema/environment';
import { mockPost, mockResults } from '../mockdata/mockdata';

const pagesQuery = graphql`
  query pagesQuery {
    paper {
      id
    }
  }
`;

const Homepage = () => (
  <Layout>
    <h2>Featured Paper:</h2>
    <Featured paperData={mockPost} />
    <h2 style={{ marginBottom: '0' }}>Latest Uploads:</h2>
    <QueryRenderer
      environment={environment}
      // variables={{ count: 6 }}
      query={pagesQuery}
      render={({ error, props }) => {
        if (error) {
          return (
            <ErrorMessage customMessage={'Apologies, we seem to be having trouble with that request'} error={error} />
          );
        } else if (props) {
          <ResultsGrid results={mockResults} />;
        }
        return <Loader />;
      }}
    />
  </Layout>
);

export default Homepage;
