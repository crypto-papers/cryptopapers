import React from 'react';
import Plume from '_static/plume.svg';

import './Header.scss';

/**
 * JSX component that renders the page header
 * @namespace Header
 */
const Header = () => (
  <div styleName='header'>
    <h1 styleName='title'>CryptoPapers.info</h1>
    <Plume styleName='plume' />
  </div>
);

export default Header;
