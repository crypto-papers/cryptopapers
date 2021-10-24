import React from 'react';
import dynamic from 'next/dynamic';
import { QueryRenderer } from 'react-relay';
import { ErrorMessage, Loader } from '@cryptopapers/ui';
import environment from 'schema/environment';
import Layout from 'components/Layout/Layout';
import { assetsQuery } from 'lib/queries/assets';
import type { AssetData } from 'types/customTypes';

const ResultsGrid = dynamic(
  async () =>
    await import(
      /* WebpackChunkName: "resultsGrid" */
      'components/ResultsGrid/ResultsGrid'
    )
);

const Assets = () => (
  <Layout>
    <QueryRenderer
      environment={environment}
      query={assetsQuery}
      render={({ error, props }) => {
        if (error) {
          return (
            <ErrorMessage
              customMessage="Apologies, we seem to be having trouble with that request"
              error={error}
            />
          );
        }

        if (props && props.assets) {
          const { assets }: { assets: AssetData } = props;

          return <ResultsGrid results={assets} type="assets" />;
        }

        return <Loader />;
      }}
    />
  </Layout>
);

export default Assets;
