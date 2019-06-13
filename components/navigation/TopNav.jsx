// @flow

import React from 'react';
import Link from 'next/link';

import css from './TopNav.css';
import { colors } from '../../styles/colors';

// const topNavStyle = {
//   backgroundColor: colors.black,
//   padding: '.5rem',
//   textAlign: 'center',
// }

// const linkStyle = {
//   color: colors.white,
//   marginRight: '1rem',
// }

const TopNav = () => (
  // <div style={ topNavStyle }>
  //   <Link href="/">
  //     <a style={ linkStyle }>Home</a>
  //   </Link>
  //   <Link href="/about">
  //     <a style={ linkStyle }>About</a>
  //   </Link>
  // </div>
  <div className={ css.topNav }>
    <Link href="/">
      <a className={ css.link }>Home</a>
    </Link>
    <Link href="/about">
      <a className={ css.link }>About</a>
    </Link>
  </div>
);

export default TopNav;