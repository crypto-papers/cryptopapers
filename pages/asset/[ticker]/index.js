// @flow

import React from 'react';
import dynamic from 'next/dynamic';
import { QueryRenderer } from 'react-relay';
import { useRouter } from 'next/router';

import environment from '_schema/environment';
import Layout from '_components/Layout/Layout';
import AssetResult from '_components/PaperResult/PaperResult';
import { assetByTicker } from '_lib/queries/assetByTicker';

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

const Asset = () => {
  const router = useRouter();
  const { ticker } = router.query;

  if (ticker) {
    return (
      <Layout>
        <QueryRenderer
          environment={environment}
          query={assetByTicker}
          variables={{ ticker }}
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
            if (props && props.assetByTicker) {
              return <AssetResult asset={props.assetByTicker} />;
            }
            /* eslint-enable react/prop-types */

            return <div>No such asset</div>;
          }}
        />
      </Layout>
    );
  }
  return <Loader />;
};

export default Asset;
