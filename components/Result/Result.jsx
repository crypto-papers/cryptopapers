// @flow

import React from 'react';

import Download from 'static/icons/download.svg';
import { concatDate } from '_utils/conversions';

import './Result.scss';

/**
 * A paper data object
 * @typedef ResultProp
 * @type {Object}
 * @property {string} downloadUrl - Source for a downloadable PDF of the paper
 * @property {number} id - Unique identifier
 * @property {Object=} image - Image data (with properties url and alt)
 * @property {Object} pubDate - Publication date info (with properties day, month, and year)
 * @property {string} title - The title of a paper
 * @memberof Result
 */
export type ResultProp = {
  downloadUrl: string,
  id: number,
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
};

/**
 * JSX component that renders a single paper result.
 * @namespace Result
 * @param {ResultProp} result - A paper data object
 */
const Result = ({ result }: { result: ResultProp }) => {
  const { downloadUrl, image, pubDate, title } = result;
  const coverImage = image && image.url ? image.url : '/static/placeholder.svg';
  const coverAlt = image && image.alt ? image.alt : `cover of ${title}`;

  return (
    <div styleName='result'>
      <figure styleName='result-figure'>
        <img styleName='result-image' src={coverImage} alt={coverAlt} />
      </figure>
      <div styleName='result-meta'>
        <div styleName='result-text'>
          <h4 style={{ margin: '0' }}>{title}</h4>
          {pubDate && <small>Published on {concatDate(pubDate)}</small>}
        </div>
        <a download href={downloadUrl} styleName='result-download'>
          <Download />
        </a>
      </div>
    </div>
  );
};

export default Result;
