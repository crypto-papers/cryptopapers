import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { QueryRenderer } from 'react-relay';
import { useRouter } from 'next/router';
import { Loader } from '@cryptopapers/ui';

import environment from 'schema/environment';
import Layout from 'components/Layout/Layout';
import PaperResult from 'components/PaperResult/PaperResult';
import { paperByPidQuery } from 'lib/queries/paperByPid';
import type { PaperData } from 'types/customTypes';

const ErrorMessage = dynamic(() =>
  import(
    /* webpackChunkName: "errorMessage" */
    'components/ErrorMessage/ErrorMessage'
  )
);

const Paper = () => {
  const router = useRouter();
  const { id } = router.query;

  if (id) {
    return (
      <Layout>
        <QueryRenderer
          environment={environment}
          query={paperByPidQuery}
          variables={{ prettyId: id }}
          render={({ error, props }) => {
            if (error) {
              return (
                <ErrorMessage
                  customMessage={'Apologies, we seem to be having trouble with that request'}
                  error={error}
                />
              );
            }

            if (props && props.paperByPid) {
              const { paperByPid }: { paperByPid: PaperData } = props;
              return (
                <Fragment>
                  {paperByPid.title && (
                    <Head>
                      <title>{`CryptoPapers | ${paperByPid.title}`}</title>
                    </Head>
                  )}
                  <PaperResult paper={paperByPid} />
                </Fragment>
              );
            }

            return <div>No such paper</div>;
          }}
        />
      </Layout>
    );
  }
  return <Loader />;
};

export default Paper;
