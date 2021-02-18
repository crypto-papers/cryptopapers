import React from 'react';

import './Addresses.scss';

/**
 * JSX component that generates a list of cryptocurrency addresses
 * @namespace Addresses
 * @param {Array<string>} currencies - List of cryptocurrency addresses.
 */
const Addresses = ({ currencies }: { currencies: Array<string> }) => {
  if (!currencies || !Array.isArray(currencies)) return null;

  return (
    <ul styleName='address-list'>
      {currencies.includes('eth') && (
        <li>
          <strong>ETH:</strong> {process.env.ETH_ADDRESS}
        </li>
      )}
      {currencies.includes('btc') && (
        <li>
          <strong>BTC:</strong> {process.env.BTC_ADDRESS}
        </li>
      )}
    </ul>
  );
};

export default Addresses;
