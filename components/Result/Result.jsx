// @flow

import React from 'react';

import Download from 'static/icons/download.svg';
import { concatDate } from 'utils/conversions';

import './Result.scss';

type ResultProp = {
  result: {
    downloadUrl: string,
    image: {
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
