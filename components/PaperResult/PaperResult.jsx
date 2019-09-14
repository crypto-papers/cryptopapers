// @flow

import React, { Fragment } from 'react';
import { QueryRenderer } from 'react-relay';

import environment from '_schema/environment';
import Loader from '_components/Loader/Loader';
import { isoToLocale } from '_utils/conversions';
import { fileQuery } from '_lib/queries/file';
import type { PaperData } from '_types/customTypes';

import './PaperResult.scss';

/**
 * JSX component that renders the data for a specified paper.
 * @namespace PaperResult
 * @param {PaperData} paper - A paper data object
 */
const PaperResult = ({ paper }: { paper: PaperData }) => {
  if (!paper) {
    return <Loader />;
  }

  return (
    <QueryRenderer
      environment={environment}
      query={fileQuery}
      variables={{ id: paper.latestVersion }}
      render={({ error, props }) => {
        const hasFile = !error && props && props.file;
        const file = hasFile ? props.file : {};

        const author = paper.author ? `by ${paper.author}` : '';
        const pubDate = file.pubDate ? isoToLocale(file.pubDate) : null;
        const url = file.url ? file.url : '';

        let byline;
        if (author && pubDate) {
          byline = `${author} | ${pubDate}`;
        } else if (author && !pubDate) {
          byline = author;
        } else if (!author && pubDate) {
          byline = pubDate;
        }

        return (
          <div>
            <div styleName='paper-result-header'>
              <h2>{paper.title}</h2>
              <small styleName='paper-result-added'>Added: {isoToLocale(paper.createAt)}</small>
            </div>
            {byline && <p styleName='paper-result-byline'>{byline}</p>}
            {paper.description && (
              <Fragment>
                <strong>Description:</strong>
                <p>{paper.description}</p>
              </Fragment>
            )}
            <object
              paper={url}
              height='1200'
              width='100%'
              styleName='paper-result-viewer'
              type='application/pdf'
            >
              <p>
                <strong>DOCUMENT UNAVAILABLE:</strong> We are unable to load PDFs in this browser.
                Please <a href={url}>download the PDF</a> to view it.
              </p>
            </object>
          </div>
        );
      }}
    />
  );
};

export default PaperResult;
