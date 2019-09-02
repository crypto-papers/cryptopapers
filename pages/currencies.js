// @flow

import React from 'react';
import dynamic from 'next/dynamic';
import { QueryRenderer } from 'react-relay';

import environment from '_schema/environment';
import Layout from '_components/Layout/Layout';
import { currenciesQuery } from '_lib/queries/currencies';

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

const Currencies = () => (
  <Layout>
    <QueryRenderer
      environment={environment}
      query={currenciesQuery}
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
            {currencies.map(currency => {
              return <Asset key={currency.id} data={currency} />;
            })}
          </div>
        );
      }}
    />
  </Layout>
);

export default Currencies;
