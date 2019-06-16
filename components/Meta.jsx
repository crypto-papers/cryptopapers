// @flow

import React from 'react';
import Head from 'next/head';

/**
 * Values passed to dynamically update page metadata.
 * @typedef MetaProps
 * @type {Object}
 * @property {string=} title - The page title
 * @memberof Meta
 */
type MetaProps = {
  title?: string,
};

/**
 * JSX component that renders the page head tags.
 * @namespace Meta
 * @param {MetaProps} props - Values to dynamically generate meta fields
 */
const Meta = ({ title }: MetaProps) => {
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
