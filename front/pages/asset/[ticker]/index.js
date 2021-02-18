import React from 'react';
import dynamic from 'next/dynamic';
import { QueryRenderer } from 'react-relay';
import { useRouter } from 'next/router';

import AssetResult from '_components/AssetResult/AssetResult';
import environment from '_schema/environment';
import Layout from '_components/Layout/Layout';
import { assetByTickerQuery } from '_lib/queries/assetByTicker';
import type { AssetData } from '_types/customTypes';

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
    const allCapsTicker = ticker.toUpperCase();
    return (
      <Layout title={allCapsTicker}>
        <QueryRenderer
          environment={environment}
          query={assetByTickerQuery}
          variables={{ ticker: allCapsTicker }}
          render={({ error, props }) => {
            if (error) {
              return (
                <ErrorMessage
                  customMessage={'Apologies, we seem to be having trouble with that request'}
                  error={error}
                />
              );
            }

            if (props && props.assetByTicker) {
              const { assetByTicker }: { assetByTicker: AssetData } = props;
              return <AssetResult asset={assetByTicker} />;
            }

            return <div>No such asset</div>;
          }}
        />
      </Layout>
    );
  }
  return <Loader />;
};

export default Asset;
