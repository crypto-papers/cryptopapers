import React from 'react';

// import Download from '_static/icons/download.svg';
import { isoToLocale } from 'utils/conversions';
import type { FileData, PaperData } from 'types/customTypes';

import style from './Result.module.scss';

/**
 * JSX component that renders a single paper result.
 * @namespace Result
 * @param {PaperData} result - A paper data object
 */
const Result = ({ result }: { result: PaperData }) => {
  const { latestVersion, prettyId, title } = result;

  const coverImage = result.coverImage ? result.coverImage : '/static/placeholder.svg';
  const coverAlt = `cover of ${title}`;
  const id = prettyId ? prettyId : '';
  const pubDate = result.pubDate ? isoToLocale(result.pubDate) : null;
  const url = result.filename ? result.filename : '';

  return (
    <div className={style.result}>
      <a href={`/paper/${id}`}>
        <figure className={style['result-figure']}>
          <img className={style['result-image']} src={coverImage} alt={coverAlt} />
        </figure>
      </a>
      <div className={style['result-meta']}>
        <a href={`/paper/${id}`}>
          <div className={style['result-text']}>
            <h4 style={{ margin: '0' }}>{title}</h4>
            {pubDate && <small>Published on {pubDate}</small>}
          </div>
        </a>
        {url && (
          <a download href={url} className={style['result-download']}>
            {/* <Download /> */}
          </a>
        )}
      </div>
    </div>
  );
}

export default Result;
