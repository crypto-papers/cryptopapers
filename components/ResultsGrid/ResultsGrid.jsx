// @flow

import React from 'react';

import Result, { type ResultProp } from '_components/Result/Result';

import './ResultsGrid.scss';

/**
 * JSX component that renders a grids of paper results.
 * @namespace ResultsGrid
 * @param {Array<ResultProp>} results - A list of results with their data
 */
const ResultsGrid = ({ results }: { results: Array<ResultProp> }) => {
  return (
    <div styleName='results-grid'>
      {results.map(result => {
        return <Result key={result.id} result={result} />;
      })}
    </div>
  );
};

export default ResultsGrid;
