// @flow

import React from 'react';

/**
 * JSX component that renders the data for a specified asset.
 * @namespace Asset
 * @param {AssetData} data - A asset data object
 */
const Asset = ({ data }: { data: AssetData }) => {
  console.log(data);
  return (
    <div>
      <p>{`${data.name} - ${data.ticker}`}</p>
    </div>
  );
};

export default Asset;
