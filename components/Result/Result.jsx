// @flow

import React from 'react';

import Download from 'static/icons/download.svg';
import { concatDate } from 'utils/conversions';

import './Result.scss';

/**
 * @typedef ResultProp
 * @type {Object}
 * @property {Object} result - A paper data object
 * @property {string} result.downloadUrl - Source for a downloadable PDF of the paper
 * @property {Object=} result.image - Image data (with properties url and alt)
 * @property {Object} result.pubDate - Publication date info (with properties day, month, and year)
 * @property {string} result.title - The title of a paper
 * @memberof Result
 */
type ResultProp = {
  result: {
    downloadUrl: string,
    image?: {
      url?: string,
      alt?: string,
    },
    pubDate: {
      day?: number,
      month?: string,
      year?: number,
    },
    title: string,
  },
};

/**
 * JSX component that renders a single paper result.
 * @namespace Result
 * @param {ResultProp} props - A paper data object
 */
const Result = ({ result }: ResultProp) => {
  const { downloadUrl, image, pubDate, title } = result;
  const coverImage = image && image.url ? image.url : '/static/placeholder.svg';
  const coverAlt = image && image.alt ? image.alt : `cover of ${title}`;

  return (
    <div styleName='result'>
      <figure style={{ textAlign: 'center' }}>
        <img style={{ height: '250px' }} src={coverImage} alt={coverAlt} />
      </figure>
      <div styleName='result-meta'>
        <div>
          <h4 style={{ margin: '0' }}>{title}</h4>
          <small>Published on {concatDate(pubDate)}</small>
        </div>
        <a download href={downloadUrl} styleName='result-download'>
          <Download />
        </a>
      </div>
    </div>
  );
};

export default Result;
