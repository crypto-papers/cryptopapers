// @flow

import React from 'react';
import { QueryRenderer } from 'react-relay';

import Download from '_static/icons/download.svg';
import environment from '_schema/environment';
import { isoToLocale } from '_utils/conversions';
import { fileQuery } from '_lib/queries/file';

import './Result.scss';

/**
 * A paper data object
 * @typedef ResultProp
 * @type {Object}
 * @property {string} downloadUrl - Source for a downloadable PDF of the paper
 * @property {string} id - Unique identifier
 * @property {Object=} image - Image data (with properties url and alt)
 * @property {Object} pubDate - Publication date info (with properties day, month, and year)
 * @property {string} title - The title of a paper
 * @memberof Result
 */
export type ResultProp = {
  downloadUrl: string,
  id: string,
  image?: {
    url?: string,
    alt?: string,
  },
  prettyId: number,
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
  const { latestVersion, prettyId, title } = result;

  return (
    <QueryRenderer
      environment={environment}
      query={fileQuery}
      variables={{ id: latestVersion }}
      render={({ error, props }) => {
        const hasFile = !error && props && props.file;
        const file = hasFile ? props.file : {};

        const coverImage = file.coverImage ? file.coverImage : '/static/placeholder.svg';
        const coverAlt = `cover of ${title}`;
        const pubDate = file.pubDate ? isoToLocale(file.pubDate) : null;

        return (
          <div styleName='result'>
            <a href={`/paper/${prettyId}`}>
              <figure styleName='result-figure'>
                <img styleName='result-image' src={coverImage} alt={coverAlt} />
              </figure>
            </a>
            <div styleName='result-meta'>
              <a href={`/paper/${prettyId}`}>
                <div styleName='result-text'>
                  <h4 style={{ margin: '0' }}>{title}</h4>
                  {pubDate && <small>Published on {pubDate}</small>}
                </div>
              </a>
              {file.url && (
                <a download href={file.url} styleName='result-download'>
                  <Download />
                </a>
              )}
            </div>
          </div>
        );
      }}
    />
  );
};

export default Result;
