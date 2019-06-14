// @flow

import React from 'react';
import Link from 'next/link';

import './TopNav.scss';

const TopNav = () => (
  <div styleName='top-nav'>
    <Link href='/'>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a styleName='nav-link'>Home</a>
    </Link>
    <Link href='/about'>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a styleName='nav-link'>About</a>
    </Link>
    <Link href='/contribute'>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a styleName='nav-link'>Contribute</a>
    </Link>
  </div>
);

export default TopNav;
