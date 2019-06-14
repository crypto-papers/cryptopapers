// @flow

import React from 'react';
import Head from 'next/head';

type Props = {
  title?: string,
};

const Meta = ({ title }: Props) => {
  const subPage = title ? ` | ${title}` : '';
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta property='og:site_name' content='Cryptopapers.info' />
      <meta property='og:type' content='website' />
      <link rel='shortcut icon' href='/static/favicon.svg' />
      <title>{`Cryptopapers${subPage}`}</title>
    </Head>
  );
};

export default Meta;
