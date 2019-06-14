// @flow

import React from 'react';
import Link from 'next/link';

import './TopNav.scss';

const TopNav = () => (
  <div styleName='top-nav' >
    <Link href="/">
      <a styleName='nav-link'>Home</a>
    </Link>
    <Link href="/about">
      <a styleName='nav-link'>About</a>
    </Link>
  </div>
);

export default TopNav;