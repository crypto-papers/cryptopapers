import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { QueryRenderer } from 'react-relay';
import { ErrorMessage } from '@cryptopapers/ui';
import Featured from 'components/Featured/Featured';
import Layout from 'components/Layout/Layout';
import environment from 'schema/environment';
import { featureLatestQuery } from 'lib/queries/featureLatest';
import { papersQuery } from 'lib/queries/papers';
import type { FeatureData, PaperData } from 'types/customTypes';

const ResultsGrid = dynamic(
  async () =>
    await import(
      /* WebpackChunkName: "resultsGrid" */
      'components/ResultsGrid/ResultsGrid'
    )
);

const Homepage = () => (
  <Layout>
    <QueryRenderer
      environment={environment}
      query={featureLatestQuery}
      render={({ error, props }) => {
        if (props && props.featureLatest) {
          const { featureLatest }: { featureLatest: FeatureData } = props;

          return (
            <Fragment>
              <h2>Featured Paper:</h2>
              <Featured paperId={featureLatest.paper} promoted={featureLatest.promoted} />
            </Fragment>
          );
        }

        if (error) {
          return (
            <ErrorMessage
              customMessage="Apologies, we seem to be having trouble with that request"
              error={error}
            />
          );
        }

        return null;
      }}
    />
    <QueryRenderer
      environment={environment}
      // Variables={{ count: 6 }}
      query={papersQuery}
      render={({ error, props }) => {
        if (props && props.papers && props.papers.length > 0) {
          const { papers }: { papers: PaperData[] } = props;

          return (
            <Fragment>
              <h2 style={{ marginBottom: '0' }}>Latest Uploads:</h2>
              <ResultsGrid results={papers} type="results" />
            </Fragment>
          );
        }

        if (error) {
          return (
            <ErrorMessage
              customMessage="Apologies, we seem to be having trouble with that request"
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
