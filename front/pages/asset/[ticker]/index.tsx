import React from 'react';
import dynamic from 'next/dynamic';
import { QueryRenderer } from 'react-relay';
import { useRouter } from 'next/router';
import { ErrorMessage, Loader } from '@cryptopapers/ui';
import AssetResult from 'components/AssetResult/AssetResult';
import environment from 'schema/environment';
import Layout from 'components/Layout/Layout';
import { assetByTickerQuery } from 'lib/queries/assetByTicker';
import type { AssetData } from 'types/customTypes';

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
          render={({ error, props }) => {
            if (error) {
              return (
                <ErrorMessage
                  customMessage="Apologies, we seem to be having trouble with that request"
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
          variables={{ ticker: allCapsTicker }}
        />
      </Layout>
    );
  }

  return <Loader />;
};

export default Asset;
