import React from 'react';

// import AssetResult from 'components/AssetResult/AssetResult';
import Result from 'components/Result/Result';
import type { AssetData, PaperData } from 'types/customTypes';

import style from './ResultsGrid.module.scss';

/**
 * An asset data object
 * @typedef ResultsGridProp
 * @type {Array<PaperData> | Array<AssetData>} - An array of results or assets
 * @memberof ResultsGrid
 */
export type ResultsGridProp = Array<PaperData> | Array<AssetData>;

/**
 * JSX component that renders a grids of paper results.
 * @namespace ResultsGrid
 * @param {ResultsGridProp} results - A list of results with their data
 * @param {string} type - Identifies what type of component to display in grid
 */
const ResultsGrid = ({ results, type }: { results: Array<any>, type: string }) => {
  return (
    <div className={style['results-grid']}>
      {/* {type === 'assets' &&
        results.map((result: AssetData) => <AssetResult key={result.id} asset={result} />)} */}

      {type === 'results' &&
        results.map((result: PaperData) => <Result key={result.id} result={result} />)}
    </div>
  );
};

export default ResultsGrid;
