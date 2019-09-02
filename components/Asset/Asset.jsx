// @flow

import React from 'react';

/**
 * An asset data object
 * @typedef AssetProp
 * @type {Object}
 * @property {string} id - Unique identifier
 * @property {string} name - The name of the asset
 * @property {string} ticker - The trading ticker for the asset
 * @memberof Asset
 */
export type AssetProp = {
  id: string,
  name: string,
  ticker: string,
};

/**
 * JSX component that renders the data for a specified asset.
 * @namespace Asset
 * @param {AssetProp} result - A asset data object
 */
const Asset = ({ result }: { result: AssetProp }) => {
  return (
    <div>
      <p>{`${result.name} - ${result.ticker}`}</p>
    </div>
  );
};

export default Asset;
