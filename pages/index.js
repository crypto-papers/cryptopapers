// @flow

import React from 'react';
import dynamic from 'next/dynamic';
import { QueryRenderer } from 'react-relay';

import Featured from '_components/Featured/Featured';
import Layout from '_components/Layout/Layout';

import environment from '_schema/environment';
import { papersQuery } from '_lib/queries/papers';
import { type ResultProp } from '_components/Result/Result';

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
    <Featured paperId='df33420d-8cf6-4102-a14f-e83a3ba23b24' />
    <h2 style={{ marginBottom: '0' }}>Latest Uploads:</h2>
    <QueryRenderer
      environment={environment}
      // variables={{ count: 6 }}
      query={papersQuery}
      render={({ error, props }) => {
        if (error) {
          return (
            <ErrorMessage
              customMessage={'Apologies, we seem to be having trouble with that request'}
              error={error}
            />
          );
        }

        /* eslint-disable react/prop-types */
        if (props && props.papers) {
          const { papers }: { papers: Array<ResultProp> } = props;
          return <ResultsGrid results={papers} type='results' />;
        }
        /* eslint-enable react/prop-types */

        return <Loader />;
      }}
    />
  </Layout>
);

export default Homepage;
