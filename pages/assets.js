// @flow

import React from 'react';
import dynamic from 'next/dynamic';
import { QueryRenderer } from 'react-relay';

import environment from '_schema/environment';
import Layout from '_components/Layout/Layout';
import { type AssetProp } from '_components/Asset/Asset';
import { assetsQuery } from '_lib/queries/assets';

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

const Assets = () => (
  <Layout>
    <QueryRenderer
      environment={environment}
      query={assetsQuery}
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
        if (props && props.assets) {
          const { assets }: { assets: AssetProp } = props;
          return <ResultsGrid results={assets} type='assets' />;
        }
        /* eslint-enable react/prop-types */

        return <Loader />;
      }}
    />
  </Layout>
);

export default Assets;
