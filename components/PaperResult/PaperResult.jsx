// @flow

import React, { Fragment } from 'react';

import Loader from '_components/Loader/Loader';
import { concatDate, dateToLocale } from '_utils/conversions';
import type { PaperData } from '_types/customTypes';

import './PaperResult.scss';

/**
 * JSX component that renders the data for a specified paper.
 * @namespace PaperResult
 * @param {PaperData} data - A paper data object
 */
const PaperResult = ({ data }: { data: PaperData }) => {
  if (!data) {
    return <Loader />;
  }

  console.log(data);

  // const author = data.author ? `by ${data.author}` : '';
  // const date = data.pubDate ? concatDate(data.pubDate) : '';

  // let byline;
  // if (author && date) {
  //   byline = `${author} | ${date}`;
  // } else if (author && !date) {
  //   byline = author;
  // } else if (!author && date) {
  //   byline = date;
  // }

  return (
    <div>
      <div styleName='paper-result-header'>
        <h2>{data.title}</h2>
        {/* <small styleName='paper-result-added'>Added: {dateToLocale(data.added)}</small> */}
      </div>
      {/* {byline && <p styleName='paper-result-byline'>{byline}</p>} */}
      {data.description && (
        <Fragment>
          <strong>Description:</strong>
          <p>{data.description}</p>
        </Fragment>
      )}
      <object
        data={data.downloadUrl}
        height='1200'
        width='100%'
        styleName='paper-result-viewer'
        type='application/pdf'
      >
        <p>
          <strong>DOCUMENT UNAVAILABLE:</strong> We are unable to load PDFs in this browser. Please{' '}
          <a href={data.downloadUrl}>download the PDF</a> to view it.
        </p>
      </object>
    </div>
  );
};

export default PaperResult;
