// @flow

import React from 'react';

import Result from 'components/Result/Result';

import './ResultsGrid.scss';

/**
 * Collection of papers and their relevant data
 * @typedef
 * @type {Object}
 * @property {ResultProp[]} results - List of paper data objects
 * @memberof ResultsGrid
 */
type ResultsGridProps = {
  results: Array<ResultProp>,
};

/**
 * JSX component that renders a grids of paper results.
 * @namespace ResultsGrid
 * @param {ResultGridProps} props
 */
const ResultsGrid = ({ results }: ResultsGridProps) => (
  <div styleName='results-grid'>
    {results.map(result => (
      <Result key={result.id} result={result} />
    ))}
  </div>
);

export default ResultsGrid;
