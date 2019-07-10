// @flow

import React from 'react';
import { useRouter } from 'next/router';

import Layout from 'components/Layout/Layout';
import PaperResult from 'components/PaperResult/PaperResult';

import { mockResults } from '../../../mockdata/mockdata';

const Paper = () => {
  const router = useRouter();
  const { id } = router.query;

  const result = mockResults.filter(mock => mock.id === id);

  if (result) {
    return (
      <Layout>
        <PaperResult data={result[0]} />
      </Layout>
    );
  }

  return <div>No such paper</div>;
};

export default Paper;
