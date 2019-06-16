// @flow

import React from 'react';

import { concatDate, dateToLocale } from 'utils/conversions';

import './Featured.scss';

/**
 * @typedef FeaturedProps
 * @type {Object}
 * @property {Object} postData - A post data object
 * @property {Date} postData.added - JavaScript date object for date on which paper uploaded
 * @property {string=} postData.author - Name of paper's author
 * @property {Object} postData.image - Image data (with properties url and alt)
 * @property {Object} postData.pubDate - Publication date info (with properties day, month, and year)
 * @property {string} postData.title - The title of a paper
 * @memberof Featured
 */
type FeaturedProps = {
  postData: {
    added: Date,
    author?: string,
    image: {
      url: string,
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
 * JSX component that renders information from a featured paper.
 * @namespace Featured
 * @param {FeaturedProps} props - A post data object
 */
const Featured = ({ postData }: FeaturedProps) => {
  const { added, author, image, pubDate, title } = postData;

  return (
    <div styleName='featured-container'>
      <figure style={{ margin: '0' }}>
        <img styleName='featured-img' src={image.url} alt={image.alt || ''} />
      </figure>
      <div styleName='featured-data'>
        <h4 styleName='featured-title'>{title}</h4>
        <div styleName='featured-meta'>
          {author && <p>{author}</p>}
          <p>Published on: {concatDate(pubDate)}</p>
        </div>
        <small>Added on: {dateToLocale(added)}</small>
      </div>
    </div>
  );
};

export default Featured;
