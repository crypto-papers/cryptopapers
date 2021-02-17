// @flow

import React from 'react';
import type { AssetData } from '_types/customTypes';

/**
 * JSX component that renders the data for a specified asset.
 * @namespace AssetResult
 * @param {AssetData} result - An asset data object
 */
const AssetResult = ({ asset }: { +asset: AssetData }) => (
    <div>
      <p>{`${asset.name} - ${asset.ticker}`}</p>
    </div>
  );

export default AssetResult;
