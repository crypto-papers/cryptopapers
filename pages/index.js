// @flow

import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { QueryRenderer } from 'react-relay';

import Featured from '_components/Featured/Featured';
import Layout from '_components/Layout/Layout';

import environment from '_schema/environment';
import { featureLatestQuery } from '_lib/queries/featureLatest';
import { papersQuery } from '_lib/queries/papers';
import type { ResultProp } from '_components/Result/Result';

const ErrorMessage = dynamic(() =>
  import(
    /* webpackChunkName: "errorMessage" */
    '_components/ErrorMessage/ErrorMessage'
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
    <QueryRenderer
      environment={environment}
      query={featureLatestQuery}
      render={({ error, props }) => {
        if (props && props.featureLatest) {
          return (
            <Fragment>
              <h2>Featured Paper:</h2>
              <Featured
                paperId={props.featureLatest.paper}
                promoted={props.featureLatest.promoted}
              />
            </Fragment>
          );
        }

        if (error) {
          return (
            <ErrorMessage
              customMessage={'Apologies, we seem to be having trouble with that request'}
              error={error}
            />
          );
        }

        return null;
      }}
    />
    <QueryRenderer
      environment={environment}
      // variables={{ count: 6 }}
      query={papersQuery}
      render={({ error, props }) => {
        /* eslint-disable react/prop-types */
        if (props && props.papers && props.papers.length > 0) {
          const { papers }: { papers: Array<ResultProp> } = props;
          return (
            <Fragment>
              <h2 style={{ marginBottom: '0' }}>Latest Uploads:</h2>
              <ResultsGrid results={papers} type='results' />
            </Fragment>
          );
        }
        /* eslint-enable react/prop-types */

        if (error) {
          return (
            <ErrorMessage
              customMessage={'Apologies, we seem to be having trouble with that request'}
              error={error}
            />
          );
        }

        return null;
      }}
    />
  </Layout>
);

export default Homepage;
