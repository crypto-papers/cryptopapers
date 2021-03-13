import React from 'react';
import dynamic from 'next/dynamic';
import { QueryRenderer } from 'react-relay';

import environment from 'schema/environment';
import BlockQuote from 'components/BlockQuote/BlockQuote';
import { isoToLocale } from 'utils/conversions';
import { fileQuery } from 'lib/queries/file';
import { paperQuery } from 'lib/queries/paper';
import type { FileData, PaperData } from 'types/customTypes';

import style from './Featured.module.scss';

const ErrorMessage = dynamic(() =>
  import(
    /* webpackChunkName: "errorMessage" */
    'components/ErrorMessage/ErrorMessage'
  )
);
const Loader = dynamic(() =>
  import(
    /* webpackChunkName: "loader" */
    'components/Loader/Loader'
  )
);
const Promoted = dynamic(() =>
  import(
    /* webpackChunkName: "promoted" */
    'components/Promoted/Promoted'
  )
);

/**
 * JSX component that renders information from a featured paper.
 * @namespace Featured
 * @param {string} paperId - A paper id value
 * @param {boolean} promoted - Is the paper a promoted post
 */
const Featured = ({ paperId, promoted }: { paperId: string, promoted?: boolean }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={paperQuery}
      variables={{ id: paperId }}
      render={({ error, props }) => {
        if (error) {
          return (
            <ErrorMessage
              customMessage={'Apologies, we seem to be having trouble with that request'}
              error={error}
            />
          );
        }

        if (props && props.paper) {
          const { paper }: { paper: PaperData } = props;
          return (
            <QueryRenderer
              environment={environment}
              query={fileQuery}
              variables={{ id: paper.latestVersion }}
              render={({ error, props }) => {
                if (!error && props) {
                  const file: FileData = props.file || {};

                  const authorName = paper.author ? paper.author : 'Unknown';
                  const coverImage = file.coverImage ? file.coverImage : '/static/placeholder.svg';
                  const coverAlt = `cover of ${paper.title}`;
                  const id = paper.prettyId ? paper.prettyId : '';
                  const title = paper.subTitle ? `${paper.title}: ${paper.subTitle}` : paper.title;

                  return (
                    <a className={style['featured-link']} href={`/paper/${id}`}>
                      <div className={style['featured-container']}>
                        <figure className={style['featured-figure']}>
                          <img className={style['featured-img']} src={coverImage} alt={coverAlt} />
                        </figure>
                        <div className={style['featured-data']}>
                          <div className={style['featured-header']}>
                            <h3 className={style['featured-title']}>{title}</h3>
                            {promoted && <Promoted />}
                          </div>
                          {paper.excerpt && <BlockQuote quote={paper.excerpt} />}
                          <div className={style['featured-meta']}>
                            <p>
                              <strong>Author: </strong>
                              {authorName}
                            </p>
                            {paper.description && (
                              <p>
                                <strong>Description: </strong>
                                {paper.description}
                              </p>
                            )}
                            {file.pubDate && (
                              <p>
                                <strong>Published on:</strong> {isoToLocale(file.pubDate)}
                              </p>
                            )}
                            <small className={style['featured-added']}>
                              Added on: {isoToLocale(paper.createAt)}
                            </small>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                }
              }}
            />
          );
        }

        return <Loader />;
      }}
    />
  );
};

export default Featured;
