// @flow

import React from 'react';
import dynamic from 'next/dynamic';
import { QueryRenderer } from 'react-relay';

import environment from '_schema/environment';
import { concatDate, isoToLocale } from '_utils/conversions';
import { paperQuery } from '_lib/queries/paper';
import { type PaperData } from '_types/customTypes';

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

/**
 * JSX component that renders information from a featured paper.
 * @namespace Featured
 * @param {string} paperId - A paper id value
 */
const Featured = ({ paperId }: { paperId: string }) => {
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

        /* eslint-disable react/prop-types */
        if (props && props.paper) {
          const { paper }: { paper: PaperData } = props;

          const authorName = paper.author ? paper.author : 'Unknown';
          const coverImage =
            paper.image && paper.image.url ? paper.image.url : '/static/placeholder.svg';
          const coverAlt =
            paper.image && paper.image.alt ? paper.image.alt : `cover of ${paper.title}`;

          return (
            <div styleName='featured-container'>
              <figure styleName='featured-figure'>
                <img styleName='featured-img' src={coverImage} alt={coverAlt} />
              </figure>
              <div styleName='featured-data'>
                <h3 styleName='featured-title'>{paper.title}</h3>
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
                  {paper.pubDate && (
                    <p>
                      <strong>Published on:</strong> {concatDate(paper.pubDate)}
                    </p>
                  )}
                </div>
                <small styleName='featured-added'>Added on: {isoToLocale(paper.createAt)}</small>
              </div>
            </div>
          );
        }
        /* eslint-enable react/prop-types */

        return <Loader />;
      }}
    />
  );
};

export default Featured;
