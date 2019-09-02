// @flow

import React from 'react';

import Asset, { type AssetProp } from '_components/Asset/Asset';
import Result, { type ResultProp } from '_components/Result/Result';

import './ResultsGrid.scss';

/**
 * An asset data object
 * @typedef ResultsGridProp
 * @type {Array<ResultProp> | Array<AssetProp>} - An array of results or assets
 * @memberof ResultsGrid
 */
export type ResultsGridProp = Array<ResultProp> | Array<AssetProp>;

/**
 * JSX component that renders a grids of paper results.
 * @namespace ResultsGrid
 * @param {ResultsGridProp} results - A list of results with their data
 * @param {string} type - Identifies what type of component to display in grid
 */
const ResultsGrid = ({ results, type }: { results: ResultsGridProp, type: string }) => {
  return (
    <div styleName='results-grid'>
      {results.map(result => {
        if (type === 'assets') {
          return <Asset key={result.id} result={result} />;
        } else if (type === 'results') {
          return <Result key={result.id} result={result} />;
        }
      })}
    </div>
  );
};

export default ResultsGrid;
