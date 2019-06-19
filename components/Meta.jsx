// @flow

import React from 'react';
import Head from 'next/head';

/**
 * JSX component that dynamically generate meta fields and renders the page head tags.
 * @namespace Meta
 * @param {string=} title - The page title
 */
const Meta = ({ title }: { title?: string }) => {
  const subPage = title ? ` | ${title}` : '';
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta property='og:site_name' content='Cryptopapers.info' />
      <meta property='og:type' content='website' />
      <link rel='shortcut icon' href='/static/favicon.ico' />
      <title>{`Cryptopapers${subPage}`}</title>
    </Head>
  );
};

export default Meta;
