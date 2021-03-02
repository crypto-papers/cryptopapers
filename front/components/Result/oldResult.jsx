import React from 'react';
import { QueryRenderer } from 'react-relay';

import Download from '_static/icons/download.svg';
import environment from '_schema/environment';
import { isoToLocale } from '_utils/conversions';
import { fileQuery } from '_lib/queries/file';
import type { FileData, PaperData } from '_types/customTypes';

import './Result.scss';

/**
 * JSX component that renders a single paper result.
 * @namespace Result
 * @param {PaperData} result - A paper data object
 */
const Result = ({ result }: { result: PaperData }) => {
  const { latestVersion, prettyId, title } = result;

  return (
    <QueryRenderer
      environment={environment}
      query={fileQuery}
      variables={{ id: latestVersion }}
      render={({ error, props }) => {
        if (!error && props) {
          const file: FileData = props.file || {};

          const coverImage = file.coverImage ? file.coverImage : '/static/placeholder.svg';
          const coverAlt = `cover of ${title}`;
          const id = prettyId ? prettyId : '';
          const pubDate = file.pubDate ? isoToLocale(file.pubDate) : null;
          const url = file.filename ? file.filename : '';

          return (
            <div styleName='result'>
              <a href={`/paper/${id}`}>
                <figure styleName='result-figure'>
                  <img styleName='result-image' src={coverImage} alt={coverAlt} />
                </figure>
              </a>
              <div styleName='result-meta'>
                <a href={`/paper/${id}`}>
                  <div styleName='result-text'>
                    <h4 style={{ margin: '0' }}>{title}</h4>
                    {pubDate && <small>Published on {pubDate}</small>}
                  </div>
                </a>
                {url && (
                  <a download href={url} styleName='result-download'>
                    <Download />
                  </a>
                )}
              </div>
            </div>
          );
        }

        return null;
      }}
    />
  );
};

export default Result;
