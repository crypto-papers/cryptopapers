// @flow

import React from 'react';
import dynamic from 'next/dynamic';
import { QueryRenderer } from 'react-relay';

import environment from '_schema/environment';
import Layout from '_components/Layout/Layout';
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
const Asset = dynamic(() =>
  import(
    /* webpackChunkName: "asset" */
    '_components/Asset/Asset'
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

        if (!props) return <Loader />;
        const { currencies }: { currencies: Array } = props;

        return (
          <div>
            {currencies.map(asset => {
              return <Asset key={asset.id} data={asset} />;
            })}
          </div>
        );
      }}
    />
  </Layout>
);

export default Assets;
