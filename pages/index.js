// @flow

import React from 'react';
import dynamic from 'next/dynamic';
import { QueryRenderer } from 'react-relay';

import Featured from '_components/Featured/Featured';
import Layout from '_components/Layout/Layout';

import environment from '_schema/environment';
import { mockPost, mockResults } from '../mockdata/mockdata';
import { pagesQuery } from '_lib/queries/pages';

const ErrorMessage = dynamic(() =>
  import(
    /* webpackChunkName: "errorMessage" */
    '_components/ErrorMessage/ErrorMessage'
  )
);
const Loader = dynamic(() =>
  import(
    /* webpackChunkName: "loader" */
    '_components/Loader/Loader'
  )
);
const ResultsGrid = dynamic(() =>
  import(
    /* webpackChunkName: "resultsGrid" */
    '_components/ResultsGrid/ResultsGrid'
  )
);

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
            <ErrorMessage
              customMessage={'Apologies, we seem to be having trouble with that request'}
              error={error}
            />
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
