// @flow

import React from 'react';

import Plume from 'static/plume.svg';

import './Header.scss';

const Header = () => (
  <div styleName='header'>
    <h1 styleName='title'>Cryptopapers.info</h1>
    <Plume styleName='plume' />
  </div>
);

export default Header;
