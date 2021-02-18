import React from 'react';
import dynamic from 'next/dynamic';
import { QueryRenderer } from 'react-relay';

import environment from '_schema/environment';
import BlockQuote from '_components/BlockQuote/BlockQuote';
import { isoToLocale } from '_utils/conversions';
import { fileQuery } from '_lib/queries/file';
import { paperQuery } from '_lib/queries/paper';
import type { FileData, PaperData } from '_types/customTypes';

import './Featured.scss';

const ErrorMessage = dynamic(() =>
  import(
    /* webpackChunkName: "errorMessage" */
    '_components/ErrorMessage/ErrorMessage'
  )
);
const Loader = dynamic(() =>
  import(
    /* webpackChunkName: "loader" */
    '_components/Loader/Loader'
  )
);
const Promoted = dynamic(() =>
  import(
    /* webpackChunkName: "promoted" */
    '_components/Promoted/Promoted'
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
                    <a styleName='featured-link' href={`/paper/${id}`}>
                      <div styleName='featured-container'>
                        <figure styleName='featured-figure'>
                          <img styleName='featured-img' src={coverImage} alt={coverAlt} />
                        </figure>
                        <div styleName='featured-data'>
                          <div styleName='featured-header'>
                            <h3 styleName='featured-title'>{title}</h3>
                            {promoted && <Promoted />}
                          </div>
                          {paper.excerpt && <BlockQuote quote={paper.excerpt} />}
                          <div styleName='featured-meta'>
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
                            <small styleName='featured-added'>
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
