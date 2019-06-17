// @flow

import React from 'react';

import Result from 'components/Result/Result';

import './ResultsGrid.scss';

type ResultsGridProps = {
  results: Array<Results>,
};

/**
 *
 * @param {Result[]} props
 */
const ResultsGrid = ({ results }: ResultsGridProps) => (
  <div styleName='results-grid'>
    {results.map(result => (
      <Result key={result.id} result={result} />
    ))}
  </div>
);

export default ResultsGrid;
