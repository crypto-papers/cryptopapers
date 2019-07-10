// @flow

import React from 'react';

import { concatDate, dateToLocale } from '_utils/conversions';
import type { PaperData } from '_types/customTypes';

import './Featured.scss';

/**
 * JSX component that renders information from a featured paper.
 * @namespace Featured
 * @param {PaperData} paperData - A paper data object
 */
const Featured = ({ paperData }: { paperData: PaperData }) => {
  const { added, author, description, image, pubDate, title } = paperData;
  const authorName = author ? author : 'Unknown';
  const coverImage = image && image.url ? image.url : '/static/placeholder.svg';
  const coverAlt = image && image.alt ? image.alt : `cover of ${title}`;

  return (
    <div styleName='featured-container'>
      <figure styleName='featured-figure'>
        <img styleName='featured-img' src={coverImage} alt={coverAlt} />
      </figure>
      <div styleName='featured-data'>
        <h3 styleName='featured-title'>{title}</h3>
        <div styleName='featured-meta'>
          <p>
            <strong>Author: </strong>
            {authorName}
          </p>
          {description && (
            <p>
              <strong>Description: </strong>
              {description}
            </p>
          )}
          <p>
            <strong>Published on:</strong> {concatDate(pubDate)}
          </p>
        </div>
        <small styleName='featured-added'>Added on: {dateToLocale(added)}</small>
      </div>
    </div>
  );
};

export default Featured;
